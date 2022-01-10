import mongoose from "mongoose";

interface ICreateClassroomRequestDTO {
  name: string;
  assessment: mongoose.Schema.Types.ObjectId;
}

export { ICreateClassroomRequestDTO };