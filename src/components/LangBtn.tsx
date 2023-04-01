import i18n from "i18next";
import { useTranslation } from "react-i18next";
import styles from "../styles/LangBtn.module.css";
const LangBtn = () => {
  const { t } = useTranslation("translations");
  return (
    <button
      className={styles.btn}
      onClick={() => {
        if (i18n.language === "en") {
          i18n.changeLanguage("es");
        } else {
          i18n.changeLanguage("en");
        }
      }}
    >
      {t("changeLanguage")}
    </button>
  );
};
export default LangBtn;
