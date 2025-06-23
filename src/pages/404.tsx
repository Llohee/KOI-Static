import { useTranslation } from "react-i18next";

export default function FourOhFourPage() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-4">{t("common.notFound")}</p>
    </div>
  );
}
