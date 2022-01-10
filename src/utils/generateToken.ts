import jwt from "jsonwebtoken";

const secret = process.env.SECRET_KEY;

function generateToken(params: Object = {}, expires: number = 86400): string {
  const token = jwt.sign(params, secret, { expiresIn: expires });
  
  return token;
}

export { generateToken };