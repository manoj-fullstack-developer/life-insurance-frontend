import React, { ReactNode } from "react";
import styles from "./index.module.css";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  const containerClass = `${styles.container}  ${className ? className : ""}`;

  return <div className={containerClass}>{children}</div>;
};

export default Container;
