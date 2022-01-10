import { User, mongoUser } from "../../models/UserModel";
import { UpdateUserRequestDTO } from "../../useCases/User/UpdateUser/UpdateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

class MongoUserRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    const user = await mongoUser.findOne({ email }).select("+password");
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await mongoUser.findById(id).select("+password");
    return user;
  }

  async save(user: User): Promise<void> {
    await mongoUser.create(user);
  }

  async update(id: string, user: UpdateUserRequestDTO): Promise<void> {
    await mongoUser.findByIdAndUpdate(id, user);
  }

  async delete(id: string): Promise<void> {
    await mongoUser.findByIdAndDelete(id);
  }
}

export { MongoUserRepository };