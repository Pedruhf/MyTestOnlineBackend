import { User } from "../../../entities/UserModel";

interface ILoginUserResponseDTO {
  user: User,
  token: string;
}

export { ILoginUserResponseDTO };