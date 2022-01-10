"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.SECRET_KEY;
function authUser(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({ error: "Sem token de autorização" });
    }
    const parts = authHeader.split(' ');
    if (parts.length !== 2) {
        return res.status(401).send({ error: "Token mal formatado" });
    }
    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ error: "Token mal formatado" });
    }
    jsonwebtoken_1.default.verify(token, secret, (error, decoded) => {
        if (error) {
            return res.status(401).send({ error: "Token inválido" });
        }
        req.userId = decoded.id;
        return next();
    });
}
exports.authUser = authUser;
