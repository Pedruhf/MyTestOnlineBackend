import { MongoUserRepository } from "../../repositories/implementations/MongoUserRepository";

import { CreateUserController } from "./CreateUser/CreateUserController";
import { CreateUserUseCase } from "./CreateUser/CreateUserUseCase";

import { ListUserUseCase } from "./ListUser/ListUserUseCase";
import { ListUserController } from "./ListUser/ListUserController";

import { UpdateUserUseCase } from "./UpdateUser/UpdateUserUseCase";
import { UpdateUserController } from "./UpdateUser/UpdateUserController";

import { DeleteUserUseCase } from "./DeleteUser/DeleteUserUseCase";
import { DeleteUserController } from "./DeleteUser/DeleteUserController";

import { LoginUserUseCase } from "./LoginUser/LoginUserUseCase";
import { LoginUserController } from "./LoginUser/LoginUserController";

import { ConfirmEmailUseCase } from "./ConfirmEmail/ConfirmEmailUseCase";
import { ConfirmEmailController } from "./ConfirmEmail/ConfirmEmailController";

import { ChangePasswordUseCase } from "./ChangePassword/ChangePasswordUseCase";
import { ChangePasswordController } from "./ChangePassword/ChangePasswordController";

import { ForgotPasswordUseCase } from "./ForgotPassword/ForgotPasswordUseCase";
import { ForgotPasswordController } from "./ForgotPassword/ForgotPasswordController";

import { ResetPasswordUseCase } from "./ResetPassword/ResetPasswordUseCase";
import { ResetPasswordController } from "./ResetPassword/ResetPasswordController";

import { ResendConfirmationEmailUseCase } from "./ResendConfirmationEmail/ResendConfirmationEmailUseCase";
import { ResendConfirmationEmailController } from "./ResendConfirmationEmail/ResendConfirmationEmailController";

const usersRepository = new MongoUserRepository();

const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

const listUserUseCase = new ListUserUseCase(usersRepository);
const listUserController = new ListUserController(listUserUseCase);

const updateUserUseCase = new UpdateUserUseCase(usersRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);

const deleteUserUseCase = new DeleteUserUseCase(usersRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

const loginUserUseCase = new LoginUserUseCase(usersRepository);
const loginUserController = new LoginUserController(loginUserUseCase);

const changePasswordUseCase = new ChangePasswordUseCase(usersRepository);
const changePasswordController = new ChangePasswordController(changePasswordUseCase);

const confirmEmailUseCase = new ConfirmEmailUseCase(usersRepository);
const confirmEmailController = new ConfirmEmailController(confirmEmailUseCase);

const forgotPasswordUseCase = new ForgotPasswordUseCase(usersRepository);
const forgotPasswordController = new ForgotPasswordController(forgotPasswordUseCase);

const resetPasswordUseCase = new ResetPasswordUseCase(usersRepository);
const resetPasswordController = new ResetPasswordController(resetPasswordUseCase);

const resendConfirmationUseCase = new ResendConfirmationEmailUseCase(usersRepository);
const resendConfirmationController = new ResendConfirmationEmailController(resendConfirmationUseCase);

export {
  usersRepository,
  createUserUseCase,
  createUserController,
  listUserUseCase,
  listUserController,
  updateUserUseCase,
  updateUserController,
  deleteUserUseCase,
  deleteUserController,
  loginUserUseCase,
  loginUserController,
  changePasswordUseCase,
  changePasswordController,
  confirmEmailUseCase,
  confirmEmailController,
  forgotPasswordUseCase,
  forgotPasswordController,
  resetPasswordUseCase,
  resetPasswordController,
  resendConfirmationUseCase,
  resendConfirmationController
};