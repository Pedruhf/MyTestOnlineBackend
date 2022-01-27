import { User } from "../../../models/UserModel";

interface ILoginUserResponseDTO {
  user: User,
  token: string;
}

export { ILoginUserResponseDTO };