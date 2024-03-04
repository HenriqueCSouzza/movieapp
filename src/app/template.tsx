import { ReactNode } from "react";
import Header from "@/components/Header";

export default function TemplateApp({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      {children}
    </div>
  );
}
