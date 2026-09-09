import type { Metadata } from "next";
// CSS is processed by Next.js; TypeScript does not need to type-check this side-effect import.
// @ts-expect-error Missing declaration for the global stylesheet.
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
      <body className="min-h-full flex flex-col justify-start text-center font-sans">
        
        {children}
        </body> 
    </html>
  );
} 
