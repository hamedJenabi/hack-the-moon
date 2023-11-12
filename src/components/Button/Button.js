import React from "react";
import Image from "next/image";
import classNames from "classnames";
import styles from "./Button.module.scss";

function Button({ onClick, children, disabled = false }) {
  return (
    <button
      className={classNames(styles.btn, {
        [styles.disabled]: disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
