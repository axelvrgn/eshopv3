import React from "react";

const Section = ({ title, children }) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="text-xl">{title}</div>
      <div className="pl-4 leading-6">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Section;
