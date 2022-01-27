import mongoose from "mongoose";

interface ICreateUserRequestDTO {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  age: number;
  isProfessor: boolean;
  picture?: string;
}

export { ICreateUserRequestDTO };