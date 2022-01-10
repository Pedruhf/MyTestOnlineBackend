import { ICreateUserRequestDTO } from "./CreateUseDTO";

function validateEmail(email: string): void {
  if (!email.trim()) {
    throw new Error("Campo de e-mail vazio");
  }

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(email)) {
    throw new Error("E-mail mal formatado");
  }
}

function validateName(name: string): void {
  if (!name.trim()) {
    throw new Error("Campo de nome vazio");
  }

  const nameRegex = /^[a-zA-Z ]+$/;

  if (!nameRegex.test(name)) {
    throw new Error("O nome não pode conter números ou caracteres especiais");
  }
}

function validateAge(age: number): void {
  if (!age) {
    throw new Error("Campo de idade vazio");
  }

  if (age < 0) {
    throw new Error("A idade não pode ser negativa");
  }

  if (age > 120) {
    throw new Error("Duvido que você seja tão velho assim 😁");
  }
}


function validatePassword(password: string): void {
  if (!password.trim()) {
    throw new Error("Campo de senha vazio");
  }

  if (password.length < 8) {
    throw new Error("A senha precisa ter no mínimo 8 caracteres");
  }
}

function validateConfirmPassword(confirmPassword: string, password: string): void {
  if (!confirmPassword.trim()) {
    throw new Error("Campo de confirmação de senha vazio");
  }

  if (confirmPassword.length < 8) {
    throw new Error("A senha precisa ter no mínimo 8 caracteres");
  }

  if (password !== confirmPassword) {
    throw new Error("Senha de confirmação inválida");
  }
}

function createUserValidateFields(user: ICreateUserRequestDTO): void {
  validateEmail(user.email);
  validateName(user.name);
  validateAge(user.age);
  validatePassword(user.password);
  validateConfirmPassword(user.confirmPassword, user.password);
}

export { createUserValidateFields };