import React from "react";
import BookContainer from "@/components/BookContainer";
import SideBar from "@/components/SideBar";

const page = () => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <BookContainer />
    </div>
  );
};

export default page;
