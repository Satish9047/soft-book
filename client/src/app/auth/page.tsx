"use client";
import React, { useEffect, useState } from "react";
import { Field, FieldValues, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { signInSchema } from "@/schema/signInSchema";
import { signUpSchema } from "@/schema/signUpSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Page = () => {
  const [hasAccount, setHasAccount] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(hasAccount ? signInSchema : signUpSchema),
  });

  const handleToggleAccount = () => {
    setHasAccount(!hasAccount);
  };

  const onSubmit = (data: FieldValues) => {
    console.log("hello");
    console.log(data);
    reset();
  };

  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col justify-center items-center">
      <div className="w-full max-w-md">
        <h1>Welcome to Soft Book Share</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <h2 className="text-center">{hasAccount ? "Login" : "Register"}</h2>
          <div className="space-y-4">
            {!hasAccount ? (
              <div>
                <label>Full Name</label>
                <Input
                  type="text"
                  {...register("name")}
                  placeholder="Full Name"
                />
                {errors?.name && (
                  <p className="text-red-500">{`${errors.name.message}`}</p>
                )}
              </div>
            ) : null}
            <div>
              <label>Email</label>
              <Input type="email" {...register("email")} placeholder="Email" />
              {errors?.email && (
                <p className="text-red-500">{`${errors.email.message}`}</p>
              )}
            </div>
            {!hasAccount ? (
              <div>
                <label>Contact No.</label>
                <Input
                  type="tel"
                  {...register("contact")}
                  placeholder="Contact Number"
                />
                {errors?.contact && (
                  <p className="text-red-500">{`${errors.contact.message}`}</p>
                )}
              </div>
            ) : null}
            <div>
              <label>Password</label>
              <Input
                type="password"
                {...register("password")}
                placeholder="Password"
              />
              {errors?.password && (
                <p className="text-red-500">{`${errors.password.message}`}</p>
              )}
            </div>
            {!hasAccount ? (
              <div>
                <label>Re-Enter Password</label>
                <Input
                  type="password"
                  {...register("rePassword")}
                  placeholder="Re-Enter Password"
                />
                {errors?.rePassword && (
                  <p className="text-red-500">{`${errors.rePassword.message}`}</p>
                )}
              </div>
            ) : null}
            <div className="flex justify-between font-bold">
              {hasAccount ? (
                <p
                  onClick={handleToggleAccount}
                  className="text-blue-700 cursor-pointer"
                >
                  Register Here
                </p>
              ) : (
                <p
                  onClick={handleToggleAccount}
                  className="text-blue-700 cursor-pointer"
                >
                  Login Here
                </p>
              )}
              <Button type="submit">{hasAccount ? "Login" : "Register"}</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;

// const [formData, setFormData] = useState({
//   fName: "",
//   email: "",
//   contact: "",
//   password: "",
//   rePassword: "",
// });

// const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { name, value } = e.target;
//   setFormData((prevFormData) => ({
//     ...prevFormData,
//     [name]: value,
//   }));
// };

// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   if (hasAccount) {
//     //login
//     console.log("Logging in with:", {
//       email: formData.email,
//       password: formData.password,
//     });
//   } else {
//     //register
//     if (formData.password !== formData.rePassword) {
//       console.error("Passwords do not match");
//       return;
//     }
//     console.log("Registering with:", formData);
//   }
// };
