import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
}

const CommonButton: React.FC<ButtonProps> = ({ label, className, ...props }) => {
  return (
    <button
      className={`bg-gradient-to-r from-purple-300 to-purple-500 text-white cursor-pointer
        font-semibold px-6 py-2 rounded-full shadow-md 
        hover:from-purple-400 hover:to-purple-600 transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-purple-400 ${className}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default CommonButton;
