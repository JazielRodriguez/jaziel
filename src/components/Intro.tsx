import React from "react";
import Image from "next/image";
import HomeImage from "../images/dev-cat.png";
import styles from "../styles/Home.module.css";
import { fontPoppins } from "@/utils/font";
import { Typewriter } from "react-simple-typewriter";
import { AiOutlineArrowDown } from "react-icons/ai";
import { typewriterWords } from "@/utils/typewriterWords";
import { IconContext } from "react-icons";
import i18n from "@/i18n";
const Intro: React.FC = () => {
  const lng = i18n.language;

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
      <IconContext.Provider value={{ size: "4rem", color: "#023b5e" }}>
        <div className={styles["arrow-indicator"]}>
          <AiOutlineArrowDown />
        </div>
      </IconContext.Provider>
    </main>
  );
};
export default Intro;
