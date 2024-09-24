"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [hasAccount, setHasAccount] = useState(false);
  const [formData, setFormData] = useState({
    fName: "",
    email: "",
    contact: "",
    password: "",
    rePassword: "",
  });

  const handleToggleAccount = () => {
    setHasAccount(!hasAccount);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (hasAccount) {
      //login
      console.log("Logging in with:", {
        email: formData.email,
        password: formData.password,
      });
    } else {
      //register
      if (formData.password !== formData.rePassword) {
        console.error("Passwords do not match");
        return;
      }
      console.log("Registering with:", formData);
    }
  };

  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col justify-center items-center">
      <div className="w-full max-w-md">
        <h1>Welcome to Soft Book Share</h1>
        <form onSubmit={handleSubmit} className="w-full">
          <h2 className="text-center">{hasAccount ? "Login" : "Register"}</h2>
          <div className="space-y-4">
            {!hasAccount ? (
              <div>
                <label htmlFor="fName">Full Name</label>
                <Input
                  name="fName"
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.fName}
                  onChange={handleInputChange}
                />
              </div>
            ) : null}
            <div>
              <label htmlFor="email">Email</label>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            {!hasAccount ? (
              <div>
                <label htmlFor="contact">Contact No.</label>
                <Input
                  name="contact"
                  type="tel"
                  required
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={handleInputChange}
                />
              </div>
            ) : null}
            <div>
              <label htmlFor="password">Password</label>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            {!hasAccount ? (
              <div>
                <label htmlFor="rePassword">Re-Enter Password</label>
                <Input
                  name="rePassword"
                  type="password"
                  required
                  placeholder="Re-Enter Password"
                  value={formData.rePassword}
                  onChange={handleInputChange}
                />
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
