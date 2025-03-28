import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
