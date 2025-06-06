import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`px-4 sm:px-6 md:px-12 lg:px-40 ${className}`}>{children}</div>;
};

export default Container;
