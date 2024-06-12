import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { connectMongoDb } from "@/db/dbConnection";
import { JWT_SECRET } from "./envConfig";
import { headers } from "next/headers";
connectMongoDb();

export const isAuth = async (req: NextRequest) => {
  const token = headers().get("Authorization") || "";

  if (!token) {
    return { isAuth: false, id: null };
  }

  try {
    const parsedToken = token.split(" ")[1];
    const decodedToken: any = jwt.verify(parsedToken, JWT_SECRET!);

    if (!decodedToken) {
      return { isAuth: false, id: null };
    }

    return { isAuth: true, id: decodedToken.id };
  } catch (error) {
    return { isAuth: false, id: null };
  }
};
