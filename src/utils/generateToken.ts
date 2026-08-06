import jwt from "jsonwebtoken"
import "dotenv/config";
import type { Request, Response} from 'express'

type userID = string;


export const generateToken = (userId: userID, res:Response) => {
    const jwtSecret = process.env.JWTSECRET;
    const jwtExpires = process.env.JWT_EXPIRES;
    if (!jwtSecret || !jwtExpires) {
      throw new Error("JWTSECRET and JWT_EXPIRES must be set in environment variables");
    }
  
    const payload = {id: userId};
    const token = jwt.sign(payload, jwtSecret ,{
    expiresIn: jwtExpires as jwt.SignOptions["expiresIn"],
    })

    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 * 7,
      });
    return token;
}