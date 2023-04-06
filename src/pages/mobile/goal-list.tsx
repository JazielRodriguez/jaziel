import { fontPoppins } from "@/utils/font";
import Image from "next/image";
import goalList from "../../images/1680751641024.jpg";
import styles from "../../styles/GoalList.module.css";
import Head from "next/head";
import { useTranslation } from "react-i18next";
const GoalList = () => {
  const { t } = useTranslation("translations");
  return (
    <>
      <Head>
        <title>Goal List App - Jaziel Rodriguez</title>
      </Head>
      <div className={styles.main}>
        <div>
          <h1 style={{ textAlign: "center" }} className={fontPoppins}>
            Goal list app
          </h1>
          <p className={fontPoppins}>{t("goalListApp")}</p>
          <p>{t("goalListAppDesc")}</p>
        </div>
        <div className={styles.container}>
          <div className={styles.cover}>
            <Image
              src={goalList}
              alt="Jaziel Rodriguez project - Goal list App"
              fill={true}
            />
          </div>
          <div className={styles.info}>
            <h2>{t("tryGoalListApp")}</h2>
            <a
              href="https://expo.dev/artifacts/eas/iyffW9uUaQrVt3fYgi1r1y.apk"
              target="_blank"
              className={styles.link}
            >
              {t("downloadGoalListApp")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default GoalList;
