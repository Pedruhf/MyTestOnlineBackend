import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const secret = process.env.SECRET_KEY;

interface IDecoded {
  id: string;
  iat: number;
  exp: number;
}

function authUser(req: Request, res: Response, next: NextFunction): Response {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ error: "Sem token de autorização" });
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2) {
    return res.status(401).send({ error: "Token mal formatado" });
  }

  const [ scheme, token ] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: "Token mal formatado" });
  }

  jwt.verify(token, secret, (error, decoded) => {
    if (error) {
      return res.status(401).send({ error: "Token inválido" });
    }

    req.userId = (decoded as IDecoded).id;
    return next();
  });
}

export { authUser };