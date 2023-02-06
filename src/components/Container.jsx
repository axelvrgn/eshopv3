import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-10/12 mx-auto min-h-screen p-8">
      <main>{children}</main>
    </div>
  );
};

export default Container;
