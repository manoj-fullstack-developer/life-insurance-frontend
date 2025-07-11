import React, { ReactNode } from "react";
import styles from "./index.module.css";

type ContainerProps = {
  children: ReactNode;
  centerChildren?: boolean;
  className?: string;
};

const Container = ({ children, centerChildren, className }: ContainerProps) => {
  const containerClass = `
    ${styles.container} 
    ${centerChildren ? styles.centerChildren : ""} 
    ${className ? className : ""}`;
    
  return <div className={containerClass}>{children}</div>;
};

export default Container;
