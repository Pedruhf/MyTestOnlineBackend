"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Answer = void 0;
const uuid_1 = require("uuid");
class Answer {
    constructor(answer) {
        this._id = (0, uuid_1.v4)(),
            this.user = answer.user;
        this.assessment = answer.assessment;
        this.questions = answer.questions;
        this.createdAt = Date.now();
    }
}
exports.Answer = Answer;
