"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { VGArianeString } from "@/app/components/atoms/VGArianeString";

const HobbiesLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const usefulPathname = pathname.split("/")[pathname.split("/").length - 1];
  return (
    <>
      <VGArianeString usefulPathname={usefulPathname} root="hobbies" />
      {children}
    </>
  );
};

export default HobbiesLayout;
