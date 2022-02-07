interface UpdateUserRequestDTO {
  email?: string;
  name?: string;
  age?: number;
  picture?: string;
  passwordResetToken?: string;
  passwordResetExpires?: number;
}

export { UpdateUserRequestDTO };

