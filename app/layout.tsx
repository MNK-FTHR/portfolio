import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Stack, CssBaseline } from "@mui/material";
import { DrawerContextProvider } from "@/app/contexts/NavigationContext";
import { WithLanguage } from "@/app/contexts/LanguageContext";
import { ThemeEditorContextProvider } from "@/app/contexts/ThemeEditorContext/ThemeEditorContext";
import { ClientLayout } from "@/app/components/ClientLayout";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GRANIER Victor",
  description: "Victor GRANIER",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Développeur Web spécialisé en Next.js, React, et TypeScript. Découvrez mon portfolio et mon CV. N'hésitez pas à me contacter!"
        />
        <meta
          name="keywords"
          content="Développeur Web, Next.js, React, TypeScript, Portfolio, CV, Freelance, Emploi"
        />
        <meta name="author" content="GRANIER Victor" />

        <meta
          property="og:title"
          content="GRANIER Victor - Développeur Web | Portfolio & CV"
        />
        <meta
          property="og:description"
          content="Développeur Web spécialisé en Next.js, React, et TypeScript. Découvrez mon portfolio et mon CV. N'hésitez pas à me contacter!"
        />
        <meta property="og:image" content="URL_de_votre_image" />
        <meta property="og:url" content="URL_de_votre_site" />
        <meta property="og:type" content="website" />
      </head>
      <body className={inter.className}>
        <main>
          <WithLanguage>
            <ThemeEditorContextProvider>
              <Stack
                sx={{
                  minWidth: "100%",
                  width: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  height: "100%",
                  maxHeight: "100%",
                  margin: 0,
                  padding: 0,
                }}
              >
                <CssBaseline />
                <DrawerContextProvider>
                  <ClientLayout>{children}</ClientLayout>
                </DrawerContextProvider>
              </Stack>
            </ThemeEditorContextProvider>
          </WithLanguage>
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
