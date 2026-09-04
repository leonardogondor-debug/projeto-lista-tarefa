import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lista de Tarefas",
  description: "projeto para testar ferramentas de teste jest e testing-library",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
      className={`$h-full antialiased`}
    >
      <body className="min-h-full flex flex-col justify-start">
        
        {children}
        </body>
    </html>
  );
}
