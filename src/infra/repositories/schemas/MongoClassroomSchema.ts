import mongoose from "mongoose";
import { IClassroom } from "../../../domain/entities/ClassroomModel";

const classroomSchema = new mongoose.Schema<IClassroom>({
  _id: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    ref: "User",
    required: true,
  },
  assessment: {
    type: String,
    ref: "Assessment",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const mongoClassroomModel = mongoose.model("Classroom", classroomSchema);

export { mongoClassroomModel };