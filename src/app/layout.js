import "./globals.css";

import { AuthProvider } from "./contexts/auth-context";

export const metadata = {
  title: "Aeroflix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-gradient-radial bg-fixed bg-cover bg-center">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
