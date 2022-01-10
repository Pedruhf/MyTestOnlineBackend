import mongoose from "mongoose";

interface ICreateUserRequestDTO {
  _id?: mongoose.Schema.Types.ObjectId;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  age: number;
  isProfessor: boolean;
  picture?: string;
  emailConfirmed?: boolean;
}

export { ICreateUserRequestDTO };