"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classroom = void 0;
const uuid_1 = require("uuid");
class Classroom {
    constructor(classroom) {
        this._id = (0, uuid_1.v4)();
        this.name = classroom.name;
        this.user = classroom.user;
        this.assessment = classroom.assessment;
        this.createdAt = Date.now();
    }
}
exports.Classroom = Classroom;
