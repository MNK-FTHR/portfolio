"use client";

import { createContext, FC, ReactNode, useMemo, useState } from "react";
import fr from "@/app/utils/languages/fr.json";
import en from "@/app/utils/languages/en.json";

export type TLanguageContext = {
  changeLanguage: () => void;
  language: "fr" | "en";
  getText: () => typeof fr | typeof en;
};

export const LanguageContext = createContext<TLanguageContext>({
  changeLanguage: () => {},
  language: "fr",
  getText: () => fr || en,
});

type Props = { children: ReactNode };

export const WithLanguage: FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const languageSave = useMemo(
    () => ({
      changeLanguage: () => {
        setLanguage((prevLang) => (prevLang === "fr" ? "en" : "fr"));
      },
      language: language,
      getText: () => {
        return language === "fr" ? fr : en;
      },
    }),
    [language]
  );
  return (
    <LanguageContext.Provider value={languageSave}>
      {children}
    </LanguageContext.Provider>
  );
};
