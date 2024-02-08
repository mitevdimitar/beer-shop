import Link from "next/link";
import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  type: string;
  link: string;
}

const Button = ({ type, link }: ButtonProps) => {
  console.log(type);

  return (
    <Link className={styles.container} href={link}>
      <span className={styles.text}>Beer</span>
      <div className={styles.liquid}></div>
    </Link>
  );
};

export default Button;
