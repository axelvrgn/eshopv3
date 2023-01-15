import React from "react";

const FormField = ({ label, children, required }) => {
  return (
    <div className="flex flex-col">
      <div className=" flex font-semibold ">
        <div>{label}</div>
        {required ? <div className="text-red-500">*</div> : <div></div>}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default FormField;
