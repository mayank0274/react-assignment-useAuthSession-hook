import { connectMongoDb } from "@/db/dbConnection";
import userModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@/utlis/envConfig";

connectMongoDb();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "email and password are required" },
        { status: 422 }
      );
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "invalid login credentails" },
        { status: 403 }
      );
    }

    const matchPwd = await bcrypt.compare(password, user.password);

    if (!matchPwd) {
      return NextResponse.json(
        { success: false, message: "invalid login credentails" },
        { status: 403 }
      );
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET!, {
      expiresIn: "20m",
    });

    return NextResponse.json({ token, success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "something went wrong while login" },
      { status: 400 }
    );
  }
}
