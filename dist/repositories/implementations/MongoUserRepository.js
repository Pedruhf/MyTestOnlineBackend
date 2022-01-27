"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoUserRepository = void 0;
const MongoUserSchema_1 = require("./schemas/MongoUserSchema");
class MongoUserRepository {
    async findByEmail(email) {
        const user = await MongoUserSchema_1.mongoUserModel.findOne({ email }).select("+password");
        return user;
    }
    async findById(id) {
        const user = await MongoUserSchema_1.mongoUserModel.findById(id).select("+password");
        return user;
    }
    async findByResetToken(token) {
        const user = await MongoUserSchema_1.mongoUserModel.findOne({ passwordResetToken: token }).select("+passwordResetToken +passwordResetExpires");
        return user;
    }
    async save(user) {
        await MongoUserSchema_1.mongoUserModel.create(user);
    }
    async update(id, user) {
        await MongoUserSchema_1.mongoUserModel.findByIdAndUpdate(id, user);
    }
    async delete(id) {
        await MongoUserSchema_1.mongoUserModel.findByIdAndDelete(id);
    }
}
exports.MongoUserRepository = MongoUserRepository;
