import Image from "next/image";
import { FunctionComponent } from "react";
import Cart2 from "../../carts/cart2/cart2";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block31.module.css";

const Block31: FunctionComponent = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["columns1"]}>
        <div></div>
        <div className={styles["info"]}>
          <Title1>What is Veemans ?</Title1>
          <p className={styles["info__paragraph"]}>
            This is a game app, using which you earn tokens for every km of
            riding any type of transport, at a speed of 10 to 60 km/h.
          </p>
          <p className={styles["info__paragraph"]}>
            It is simple: buy a Veeman NFT car, travel by any type of transport
            and earn VMS tokens. Increase your game fleet, capture territories
            and increase the number of tokens you get.
          </p>
          <div className={styles["info__buttons"]}>
            <Button1 variant="1">Join The Community</Button1>
            <a className={styles["info__rm"]} href="">
              Read More
              <Image
                src="/icons/arrow1.svg"
                width="14"
                height="14"
                alt="->"
              ></Image>
            </a>
          </div>
        </div>
      </div>
      <div className={styles["columns1"]}>
        <div>
          <Cart2>
            <Title1 type="h3">Mission</Title1>
            <p>
              We are committed to making trips by private <br /> transport safer
              and greener by introducing speed <br /> rewards up to 60 km/h
              while reducing fuel <br /> consumption and emissions.
            </p>
          </Cart2>
        </div>
        <div></div>
      </div>
      <div className={styles["columns1"]}>
        <div></div>
        <div>
          <Cart2>
            <Title1 type="h3">NFT Veeman</Title1>
            <p>Digital avatar of your car.</p>
          </Cart2>
        </div>
      </div>
      <div className={styles["columns1"]}>
        <div>
          <Cart2>
            <Title1 type="h3"> Mystery Box</Title1>
            <p>
              Find the Mystery box while driving and <br /> contains an
              improvement in the technical <br /> characteristics of the
              machine.
            </p>
          </Cart2>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Block31;
