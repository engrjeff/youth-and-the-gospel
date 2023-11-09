import { type ReactNode } from "react";

function FormControl({ children }: { children: ReactNode }) {
  return <div className='flex flex-col gap-2'>{children}</div>;
}

export default FormControl;
