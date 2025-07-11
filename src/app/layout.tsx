"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@ant-design/v5-patch-for-react-19";
import { useEffect, useState } from "react";
import { App, ConfigProvider, Spin } from "antd";
import Layout from "./components/shared/layout/index";
import { COLORS, GRADIENTS } from "./styles/colors";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <App>
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  colorPrimaryHover: COLORS.success,
                  colorPrimary: COLORS.success,
                },
                Select: {
                  colorPrimaryHover: COLORS.success,
                  colorPrimary: COLORS.success,
                },
                Button: {
                  colorPrimary: GRADIENTS.primary,
                  colorPrimaryHover: GRADIENTS.primary,
                  colorPrimaryActive: GRADIENTS.primary,
                },
              },
            }}
          >
            {!isLoaded ? <Spin /> : <Layout>{children}</Layout>}
          </ConfigProvider>
        </App>
      </body>
    </html>
  );
}
