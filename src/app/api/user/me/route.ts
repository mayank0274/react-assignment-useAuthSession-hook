import { connectMongoDb } from "@/db/dbConnection";
import userModel from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { isAuth } from "@/utlis/isAuth";

connectMongoDb();

export async function GET(req: NextRequest) {
  try {
    const { isAuth: iAuthenticated, id } = await isAuth(req);

    if (!iAuthenticated) {
      return NextResponse.json(
        { success: false, error: "unauthorized user" },
        { status: 400 }
      );
    }

    const user = await userModel.findOne({ _id: id });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "user not found" },
        { status: 403 }
      );
    }

    return NextResponse.json(
      { user: { name: user.name, email: user.email }, success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "something went wrong while login" },
      { status: 400 }
    );
  }
}
