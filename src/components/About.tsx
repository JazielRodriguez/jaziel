import React from "react";
import Image from "next/image";
import HomeImage from "../images/dev-cat.png";
import styles from "../styles/About.module.css";
import { fontIndieFlower } from "@/utils/font";
const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <h2 className={fontIndieFlower}>About me...</h2>
    </div>
  );
};
export default About;
