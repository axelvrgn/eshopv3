import React from "react";

const FormControl = ({ type, value, placeholder, onChange }) => {
  return (
    <div>
      <input
        className="p-2 rounded border focus:outline-none focus:border-yellow-400"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default FormControl;
