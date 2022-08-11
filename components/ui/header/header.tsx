import { FunctionComponent } from "react";
import Logo from "../logo/logo";
import TopMenu from "../top-menu/top-menu";

// import TopMenu from "../top-menu/top-menu";
import styles from './header.module.css';

interface Props {
    children: JSX.Element|JSX.Element[]
  }

const Header: FunctionComponent<Props> = ({children}) => {
    return (
        <header className={styles.container}>
          <Logo></Logo>
          <div>

          </div>
          <TopMenu></TopMenu>
        {/* { children}  */}
      </header>
    )
}

export default Header;
