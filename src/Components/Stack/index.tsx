import React from "react";

// import { Container } from './styles';

interface StackInterface {
  title: string;
  subtitle: string;
  svg: any;
  size: any;
}

const Stack: React.FC<StackInterface> = ({ title, subtitle, svg, size }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{subtitle}</h1>
    </div>
  );
};

export default Stack;
