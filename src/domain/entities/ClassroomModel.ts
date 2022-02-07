import { v4 } from "uuid";

interface IClassroom {
  _id: string;
  name: string;
  user: string;
  assessment: string;
  createdAt?: Date | number;
}

class Classroom implements IClassroom {
  _id: string;
  name: string;
  user: string;
  assessment: string;
  createdAt?: number | Date;

  constructor(classroom: Omit<IClassroom, "_id">) {
    this._id = v4();
    this.name = classroom.name;
    this.user = classroom.user;
    this.assessment = classroom.assessment;
    this.createdAt = Date.now();
  }
}

export { Classroom, IClassroom };
