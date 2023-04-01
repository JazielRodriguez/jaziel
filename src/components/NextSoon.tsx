import styles from "../styles/NextSoon.module.css";
import { fontPoppins } from "@/utils/font";
import { useTranslation } from "react-i18next";
const NextSoon = () => {
  const { t } = useTranslation("translations");
  return (
    <div className={styles.next}>
      <h1 className={fontPoppins}>{t("comingSoon")}</h1>
    </div>
  );
};
export default NextSoon;
