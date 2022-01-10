import { Router } from "express";
import { authUser } from "../middlewares/auth";
import {
  createUserController,
  listUserController,
  updateUserController,
  deleteUserController,
  loginUserController,
  changePasswordController,
  confirmEmailController,
  forgotPasswordController,
  resetPasswordController,
  resendConfirmationController,
} from "../useCases/User";

const userRoutes = Router();

userRoutes.get("/", (req, res) => {
  return listUserController.list(req, res);
});

userRoutes.post("/", (req, res) => {
  return createUserController.handle(req, res);
});

userRoutes.put("/", authUser, (req, res) => {
  return updateUserController.handle(req, res);
});

userRoutes.delete("/", authUser, (req, res) => {
  return deleteUserController.handle(req, res);
});

userRoutes.post("/login", (req, res) => {
  return loginUserController.handle(req, res);
});

userRoutes.post("/change-password", authUser, (req, res) => {
  return changePasswordController.handle(req, res);
});

userRoutes.get("/confirm-email/:id", (req, res) => {
  return confirmEmailController.handle(req, res);
});

userRoutes.post("/resend-confirmation-email", (req, res) => {
  return resendConfirmationController.handle(req, res);
});

userRoutes.post("/forgot-password", (req, res) => {
  return forgotPasswordController.handle(req, res);
});

userRoutes.get("/reset-password/:token", (req, res) => {
  return resetPasswordController.handle(req, res);
});

export { userRoutes };