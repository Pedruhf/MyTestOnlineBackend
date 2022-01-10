import mongoose from "mongoose";

interface IUpdateClassroomRequestDTO {
  name: string;
  assessment: mongoose.Schema.Types.ObjectId;
}

export { IUpdateClassroomRequestDTO };