import { useTranslation } from "react-i18next";

type KeyType = { [key: string]: any };

export const category = () => {
  const { t } = useTranslation();
  return {
    "01G38CBDCFJ63KDQ05DJ9BABNA": t("Category.01G38CBDCFJ63KDQ05DJ9BABNA"),
  };
};
