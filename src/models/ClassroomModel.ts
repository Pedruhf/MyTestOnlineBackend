import mongoose from "mongoose";

interface Classroom {
  _id?: mongoose.Schema.Types.ObjectId;
  name: string;
  user: mongoose.Schema.Types.ObjectId;
  assessment: mongoose.Schema.Types.ObjectId;
  createdAt?: Date | number;
}

const classroomSchema = new mongoose.Schema<Classroom>({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  assessment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Assessment",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const mongoClassroom = mongoose.model("Classroom", classroomSchema);

export { mongoClassroom, Classroom };