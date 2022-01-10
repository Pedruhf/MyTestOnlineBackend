"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const auth_1 = require("../middlewares/auth");
const User_1 = require("../useCases/User");
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.get("/", (req, res) => {
    return User_1.listUserController.list(req, res);
});
userRoutes.post("/", (req, res) => {
    return User_1.createUserController.handle(req, res);
});
userRoutes.put("/", auth_1.authUser, (req, res) => {
    return User_1.updateUserController.handle(req, res);
});
userRoutes.delete("/", auth_1.authUser, (req, res) => {
    return User_1.deleteUserController.handle(req, res);
});
userRoutes.post("/login", (req, res) => {
    return User_1.loginUserController.handle(req, res);
});
userRoutes.post("/change-password", auth_1.authUser, (req, res) => {
    return User_1.changePasswordController.handle(req, res);
});
userRoutes.get("/confirm-email/:id", (req, res) => {
    return User_1.confirmEmailController.handle(req, res);
});
userRoutes.post("/resend-confirmation-email", (req, res) => {
    return User_1.resendConfirmationController.handle(req, res);
});
userRoutes.post("/forgot-password", (req, res) => {
    return User_1.forgotPasswordController.handle(req, res);
});
userRoutes.get("/reset-password/:token", (req, res) => {
    return User_1.resetPasswordController.handle(req, res);
});
