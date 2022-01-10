"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoUserRepository = void 0;
const UserModel_1 = require("../../models/UserModel");
class MongoUserRepository {
    async findByEmail(email) {
        const user = await UserModel_1.mongoUser.findOne({ email }).select("+password");
        return user;
    }
    async findById(id) {
        const user = await UserModel_1.mongoUser.findById(id).select("+password");
        return user;
    }
    async save(user) {
        await UserModel_1.mongoUser.create(user);
    }
    async update(id, user) {
        await UserModel_1.mongoUser.findByIdAndUpdate(id, user);
    }
    async delete(id) {
        await UserModel_1.mongoUser.findByIdAndDelete(id);
    }
}
exports.MongoUserRepository = MongoUserRepository;
