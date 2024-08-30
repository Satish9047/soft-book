"use client";

import React from "react";
import StoreProvider from "@/redux/store";
import Navbar from "./Navbar";

const WrapperLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="px-4">{children}</div>
    </>
  );
};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <WrapperLayout>{children}</WrapperLayout>
    </StoreProvider>
  );
};

export default Wrapper;
