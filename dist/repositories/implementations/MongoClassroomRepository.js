"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoClassroomRepository = void 0;
const MongoClassroomSchema_1 = require("./schemas/MongoClassroomSchema");
class MongoClassroomRepository {
    async save(classroom) {
        var _a, _b;
        const newClassroom = await ((_b = (await ((_a = (await MongoClassroomSchema_1.mongoClassroomModel.create(classroom))) === null || _a === void 0 ? void 0 : _a.populate(["user", "assessment"])))) === null || _b === void 0 ? void 0 : _b.populate("assessment.questions"));
        return newClassroom;
    }
    async findById(id) {
        var _a, _b;
        const classroom = await ((_b = (await ((_a = (await MongoClassroomSchema_1.mongoClassroomModel.findById(id))) === null || _a === void 0 ? void 0 : _a.populate(["user", "assessment"])))) === null || _b === void 0 ? void 0 : _b.populate("assessment.questions"));
        if (classroom) {
            classroom.assessment.user = undefined;
        }
        return classroom;
    }
    async findAll() {
        const classroom = await MongoClassroomSchema_1.mongoClassroomModel.find();
        return classroom;
    }
    async update(id, classroom) {
        await MongoClassroomSchema_1.mongoClassroomModel.findByIdAndUpdate(id, classroom);
    }
    async delete(id) {
        await MongoClassroomSchema_1.mongoClassroomModel.findByIdAndDelete(id);
    }
}
exports.MongoClassroomRepository = MongoClassroomRepository;
