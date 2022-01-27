"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
const bcrypt_1 = __importDefault(require("bcrypt"));
class User {
    constructor(user) {
        this.id = (0, uuid_1.v4)();
        this.email = user.email;
        this.password = bcrypt_1.default.hashSync(user.password, 10);
        this.name = user.name;
        this.age = user.age;
        this.isProfessor = user.isProfessor;
        this.picture = user.picture;
        this.emailConfirmed = false;
        this.createdAt = Date.now();
    }
}
exports.User = User;
