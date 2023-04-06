import styles from "../styles/NextSoon.module.css";
import { fontPoppins } from "@/utils/font";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Container from "./Container";
import currencies from "../images/currecies.png";
import goalList from "../images/1680751641024.jpg";
import Link from "next/link";
const NextSoon = () => {
  const { t } = useTranslation("translations");
  return (
    <div className={styles.next}>
      <Container>
        <h1 className={fontPoppins}>{t("myWork")}</h1>
        <div className={styles.works}>
          <div className={styles.cover}>
            <a href="http://currencies-pink.vercel.app/" target="_blank">
              <Image
                src={currencies}
                alt="Jaziel Rodriguez project - Currencies App"
                fill={true}
              />
            </a>
          </div>
          <div className={styles.cover}>
            <Link href="/mobile/goal-list">
              <Image
                src={goalList}
                alt="Jaziel Rodriguez project - Goal list App"
                fill={true}
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default NextSoon;
