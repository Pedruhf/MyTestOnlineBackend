import { MongoUserRepository } from "../../../infra/repositories/implementations/MongoUserRepository";

import { CreateUserController } from "../../../presentation/controllers/User/CreateUserController";
import { CreateUserUseCase } from "./CreateUser/CreateUserUseCase";

import { ListUserUseCase } from "./ListUser/ListUserUseCase";
import { ListUserController } from "../../../presentation/controllers/User/ListUserController";

import { UpdateUserUseCase } from "./UpdateUser/UpdateUserUseCase";
import { UpdateUserController } from "../../../presentation/controllers/User/UpdateUserController";

import { DeleteUserUseCase } from "./DeleteUser/DeleteUserUseCase";
import { DeleteUserController } from "../../../presentation/controllers/User/DeleteUserController";

import { LoginUserUseCase } from "./LoginUser/LoginUserUseCase";
import { LoginUserController } from "../../../presentation/controllers/User/LoginUserController";

import { ConfirmEmailUseCase } from "./ConfirmEmail/ConfirmEmailUseCase";
import { ConfirmEmailController } from "../../../presentation/controllers/User/ConfirmEmailController";

import { ChangePasswordUseCase } from "./ChangePassword/ChangePasswordUseCase";
import { ChangePasswordController } from "../../../presentation/controllers/User/ChangePasswordController";

import { ForgotPasswordUseCase } from "./ForgotPassword/ForgotPasswordUseCase";
import { ForgotPasswordController } from "../../../presentation/controllers/User/ForgotPasswordController";

import { ResetPasswordUseCase } from "./ResetPassword/ResetPasswordUseCase";
import { ResetPasswordController } from "../../../presentation/controllers/User/ResetPasswordController";

import { ResendConfirmationEmailUseCase } from "./ResendConfirmationEmail/ResendConfirmationEmailUseCase";
import { ResendConfirmationEmailController } from "../../../presentation/controllers/User/ResendConfirmationEmailController";

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