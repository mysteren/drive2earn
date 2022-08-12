import Image from "next/image";
import { FunctionComponent } from "react";
import styles from "./burger-menu.module.css";

const BurgerMenu: FunctionComponent = () => {
  return (
    <div className={`${styles.containerBorder} ${styles.polygon}`}>
      <div className={`${styles.container} ${styles.polygon}`}>
        <Image src="/icons/burger.svg" width={39} height={28} alt=""></Image>
      </div>
    </div>
  );
};

export default BurgerMenu;
