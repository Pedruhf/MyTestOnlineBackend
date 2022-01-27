import { IUser } from "../../models/UserModel";
import { IUsersRepository } from "../IUsersRepository";
import { UpdateUserRequestDTO } from "../../useCases/User/UpdateUser/UpdateUserDTO";
import { mongoUserModel } from "./schemas/MongoUserSchema";

class MongoUserRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<IUser> {
    const user = await mongoUserModel.findOne({ email }).select("+password");
    return user;
  }

  async findById(id: string): Promise<IUser> {
    const user = await mongoUserModel.findById(id).select("+password");
    return user;
  }

  async findByResetToken(token: string): Promise<IUser> {
    const user = await mongoUserModel.findOne({ passwordResetToken: token }).select("+passwordResetToken +passwordResetExpires");
    return user;
  }

  async save(user: IUser): Promise<void> {
    await mongoUserModel.create(user);
  }

  async update(id: string, user: UpdateUserRequestDTO): Promise<void> {
    await mongoUserModel.findByIdAndUpdate(id, user);
  }

  async delete(id: string): Promise<void> {
    await mongoUserModel.findByIdAndDelete(id);
  }
}

export { MongoUserRepository };