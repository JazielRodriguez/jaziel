import React from "react";
import Image from "next/image";
import HomeImage from "../images/dev-cat.png";
import styles from "../styles/Home.module.css";
import { fontPoppins } from "@/utils/font";
import { Typewriter } from "react-simple-typewriter";
import { typewriterWords } from "@/utils/typewriterWords";
const Intro: React.FC = () => {
  return (
    <main className={styles.intro}>
      <div>
        <h1 className={fontPoppins}>Jaziel Rodriguez</h1>
        <p className={fontPoppins}>
          <span>
            <Typewriter
              words={typewriterWords}
              loop={true}
              cursor
              cursorStyle="|"
            />
          </span>
        </p>
      </div>
      <div className={styles["intro-img"]}>
        <Image src={HomeImage} alt="Jaziel Rodriguez - Cat Developer" fill />
      </div>
    </main>
  );
};
export default Intro;
