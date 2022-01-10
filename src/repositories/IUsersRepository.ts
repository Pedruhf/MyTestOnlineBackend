import { User } from "../models/UserModel";
import { UpdateUserRequestDTO } from "../useCases/User/UpdateUser/UpdateUserDTO";

interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  save(user: User): Promise<void>;
  update(id: string, user: UpdateUserRequestDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IUsersRepository };