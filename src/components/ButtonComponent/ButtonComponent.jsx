import React from "react";

export const ButtonComponent = (props) => {
  return (
    <button
      className={`bg-transparent w-fit self-center hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border-[2px] border-black hover:border-transparent rounded  ${props.className}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.buttonText}
    </button>
  );
};
