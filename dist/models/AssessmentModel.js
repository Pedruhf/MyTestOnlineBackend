"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assessment = void 0;
const uuid_1 = require("uuid");
class Assessment {
    constructor(assessment) {
        this._id = (0, uuid_1.v4)();
        this.title = assessment.title;
        this.description = assessment.description;
        this.user = assessment.user;
        this.questions = assessment.questions;
        this.createdAt = Date.now();
    }
}
exports.Assessment = Assessment;
