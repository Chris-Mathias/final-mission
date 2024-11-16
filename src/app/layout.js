import "./globals.css";

export const metadata = {
  title: "Aeroflix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className="antialiased bg-gradient-radial bg-fixed bg-cover bg-center"
      >
        {children}
      </body>
    </html>
  );
}
