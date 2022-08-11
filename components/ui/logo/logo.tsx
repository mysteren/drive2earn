import Image from "next/image";
import { FunctionComponent } from "react";
import styles from "./logo.module.css";

const Logo: FunctionComponent = () => {
  return (
    <div className={`${styles.containerBorder} ${styles.polygon}`}>
      <div className={`${styles.container} ${styles.polygon}`}>
        <Image src="/icons/logo.svg" width={155} height={42}></Image>
      </div>
    </div>
  );
};

export default Logo;
