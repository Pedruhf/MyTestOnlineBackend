"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.professorUser = void 0;
const User_1 = require("../useCases/User");
async function professorUser(req, res, next) {
    const userId = req.userId;
    const user = await User_1.usersRepository.findById(userId);
    if (!user.isProfessor) {
        return res.status(401).send({ error: "É necessário ser um professor para realizar esta operação" });
    }
    req.professorUser = true;
    return next();
}
exports.professorUser = professorUser;
