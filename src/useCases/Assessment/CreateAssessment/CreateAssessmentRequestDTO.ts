import mongoose from "mongoose";

interface ICreateAssessmentRequestDTO {
  title: string;
  description?: string;
}

export { ICreateAssessmentRequestDTO };