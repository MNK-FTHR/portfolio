"use client";

import Summary from "./summary/page";

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Summary />;
}
