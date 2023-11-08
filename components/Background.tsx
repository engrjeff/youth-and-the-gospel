import { type ReactNode } from "react";

function Background({ children }: { children: ReactNode }) {
  return (
    <div className="hidden bg-[url('/yg-hero.png')] bg-cover bg-center bg-no-repeat text-white">
      {children}
    </div>
  );
}

export default Background;
