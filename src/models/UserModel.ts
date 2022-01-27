import { v4 } from "uuid";
import bcrypt from "bcrypt";

interface IUser {
  _id: string;
  email: string;
  password: string;
  name: string;
  age: number;
  isProfessor: boolean;
  picture?: string;
  emailConfirmed?: boolean,
  passwordResetToken?: string;
  passwordResetExpires?: number;
  createdAt?: Date | number;
}

class User {
  readonly _id: string;
  email: string;
  password: string;
  name: string;
  age: number;
  isProfessor: boolean;
  picture?: string;
  emailConfirmed?: boolean;
  passwordResetToken?: string;
  passwordResetExpires?: number;
  createdAt?: number | Date;

  constructor(user: Omit<IUser, "_id">) {
    this._id = v4();
    this.email = user.email;
    this.password = bcrypt.hashSync(user.password, 10);
    this.name = user.name;
    this.age = user.age;
    this.isProfessor = user.isProfessor;
    this.picture = user.picture;
    this.emailConfirmed = false;
    this.createdAt = Date.now();
  }
}

export { IUser, User };