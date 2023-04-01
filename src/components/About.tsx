import React from "react";
import Image from "next/image";
import HomeImage from "../images/dev-cat.png";
import styles from "../styles/About.module.css";
import { fontIndieFlower, fontPoppins } from "@/utils/font";
import Container from "./Container";
import { useTranslation } from "react-i18next";
const About: React.FC = () => {
  const {t} =useTranslation('translations')
  return (
    <div className={styles.about}>
      <Container className={styles.flex}>
        <div>
          <h2 data-aos="fade-right" className={fontIndieFlower}>
            {t('aboutMe')}
          </h2>
          <p className={fontPoppins}>
            {t('aboutMeDesc')}
          </p>
        </div>
        <div>
          <h2 data-aos="fade-right" className={fontIndieFlower}>
            {t('experience')}
          </h2>
          <ul>
            <li className={fontPoppins}>
              <p>{t('experienceOneTitle')}</p>
              <p>
              {t('experienceOneDesc')}
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
export default About;
