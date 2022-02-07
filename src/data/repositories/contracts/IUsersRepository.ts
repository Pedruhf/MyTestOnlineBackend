import { IUser } from "../../../domain/entities/UserModel";
import { UpdateUserRequestDTO } from "../../../domain/useCases/User/UpdateUser/UpdateUserDTO";

interface IUsersRepository {
  findByEmail(email: string): Promise<IUser>;
  findById(id: string): Promise<IUser>;
  findByResetToken(token: string): Promise<IUser>;
  save(user: IUser): Promise<void>;
  update(id: string, user: UpdateUserRequestDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IUsersRepository };