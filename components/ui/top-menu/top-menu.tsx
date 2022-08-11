import Image from "next/image";
import { FunctionComponent } from "react";
import styles from "./top-menu.module.css";

const TopMenu: FunctionComponent = () => {
  return (
    <div className={`${styles.containerBorder} ${styles.polygon}`}>
      <div className={`${styles.container} ${styles.polygon}`}>
        <Image src="/icons/burger.svg" width={39} height={28}></Image>
      </div>
    </div>
  );
};

export default TopMenu;
