"use client";

import { useContext } from "react";
import { LanguageContext } from "@/app/contexts/LanguageContext";

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const textData = useContext(LanguageContext).getText();

  return <>{textData.presentation} </>;
}
