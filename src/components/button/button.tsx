import Link from "next/link";
import React from "react";
import styles from "./button.module.css";

interface Props {
  type: string;
  link: string;
}

const Button = ({ type, link }: Props) => {
  console.log(type);

  return (
    <Link className={styles.container} href={link}>
      <span className={styles.text}>Beer</span>
      <div className={styles.liquid}></div>
    </Link>
  );
};

export default Button;
