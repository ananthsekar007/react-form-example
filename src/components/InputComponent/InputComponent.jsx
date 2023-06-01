import React from "react";

export const InputComponent = (props) => {
  return (
    <input
      className={`shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-blue-500`}
      {...props}
    />
  );
};
