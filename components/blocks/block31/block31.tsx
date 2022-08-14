import Image from "next/image";
import { FunctionComponent } from "react";
import Button1 from "../../ui/button1/button1";
import Title1 from "../../ui/title1/title1";
import styles from "./block31.module.css";

const Block31: FunctionComponent = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["columns1"]}>
        <div>
          
        </div>
        <div className={styles["info"]}>
          <Title1>What is DRIVE 2 EARN?</Title1>
          <p className={styles["info__paragraph"]}>
            A new concept that suggests the possibility of virtual earnings for
            the actions that the user performs in the real world.
          </p>
          <p className={styles["info__paragraph"]}>
            To do this, you need to &quot;link&quot; your account with a mobile device. In
            a specific case, each user earns for daily movements on any type of
            transport, developing with a speed of 10 to 60 km/h
          </p>
          <div className={styles["info__buttons"]}>
            <Button1 variant="1">
            Join The Community
            </Button1>
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

      </div>
      <div className={styles["columns1"]}></div>
    </div>
  );
};

export default Block31;
