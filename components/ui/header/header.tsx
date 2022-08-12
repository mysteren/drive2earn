import { FunctionComponent } from "react";

import Link from "next/link";
import Logo from "../logo/logo";
import BurgerMenu from "../burger-menu/burger-menu";

import styles from "./header.module.css";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Header: FunctionComponent<Props> = ({ children }) => {
  return (
    <header className={styles.container}>
      <Link href="/">
        <Logo></Logo>
      </Link>
      <nav className={styles.topCenterMenu}>
        <Link href="">How does it work</Link>
        <Link href="">NFT Car</Link>
        <Link href="">Partners and teams</Link>
        <Link href="">Questions</Link>
      </nav>
      <BurgerMenu></BurgerMenu>
    </header>
  );
};

export default Header;
