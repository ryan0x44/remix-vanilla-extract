import React from "react";
import * as styles from "./styles.css"; // Note that `.ts` is omitted here

export const Button = React.forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={styles.root}
      >{children}</button>
    );
  }
);
Button.displayName = "Button";