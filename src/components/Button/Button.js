import React from "react";
import Image from "next/image";
import classNames from "classnames";
import styles from "./Button.module.scss";

function Button({ onClick, children, iconOnly }) {
  return (
    <button
      className={classNames(styles.btn, {
        [styles.iconOnlyWrapper]: iconOnly,
      })}
      onClick={onClick}
    >
      <div
        className={classNames(styles.default, { [styles.iconOnly]: iconOnly })}
      >
        <Image
          alt="go back"
          className={styles.leftIcon}
          src={iconOnly ? "/chevron_left-black.svg" : "/chevron_left.svg"}
          width={iconOnly ? 20 : 30}
          height={iconOnly ? 20 : 30}
        />
      </div>
      {!iconOnly && children}
      {!iconOnly && (
        <Image
          className={styles.rightIcon}
          alt="go back"
          src="/chevron_right.svg"
          width={iconOnly ? 20 : 30}
          height={iconOnly ? 20 : 30}
        />
      )}
    </button>
  );
}

export default Button;
