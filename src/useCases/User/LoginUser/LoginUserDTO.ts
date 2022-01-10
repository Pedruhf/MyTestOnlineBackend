import { User } from "../../../models/UserModel";

interface LoginUserResponseDTO {
  user: User,
  token: string;
}

export { LoginUserResponseDTO };