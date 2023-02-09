import React from "react";

const FormControl = ({ type, value, placeholder, onChange, required }) => {
  return (
    <div>
      <input
        //className="p-2 rounded border focus:outline-none focus:border-yellow-400 border-2 w-full valid:border-green-400 invalid:border-red-600"
        className="p-2 rounded border focus:outline-none  focus:border-yellow-400  border-2 w-full"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default FormControl;
