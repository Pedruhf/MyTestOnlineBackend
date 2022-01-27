"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
const uuid_1 = require("uuid");
class Question {
    constructor(question) {
        this._id = (0, uuid_1.v4)();
        this.title = question.title;
        this.description = question.description;
        this.alternatives = question.alternatives;
        this.assessment = question.assessment;
        this.createdAt = Date.now();
    }
}
exports.Question = Question;
