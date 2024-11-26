import "./globals.css";

import { DataP, DataProvider } from "./contexts/data-context";

export const metadata = {
  title: "Aeroflix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-gradient-radial bg-fixed bg-cover bg-center">
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}
