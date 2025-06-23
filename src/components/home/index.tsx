import { useTranslation } from "react-i18next";

const HomeWrapper = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">{t("Landing.title")}</h1>
      </div>
    </div>
  );
};

export default HomeWrapper;
