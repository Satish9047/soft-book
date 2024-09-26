import mongoose from "mongoose";

export interface User extends mongoose.Document {
  name: string;
  password: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<User>(
  {
    name: {
      type: String,
      required: [true, "Name is mandatory"],
    },
    password: {
      type: String,
      required: [true, "Password is mandatory"],
    },
    email: {
      type: String,
      match: [/.+\@.+\..+/, "Invalid email address"],
      required: [true, "Email is mandatory"],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", userSchema);
