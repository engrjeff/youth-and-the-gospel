"use client";

import type { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import LoadingSpinner from "./LoadingSpinner";

function RegisterFormFieldset({ children }: { children: ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <fieldset className='space-y-5' disabled={pending}>
      {pending && (
        <div className='z-[9999] fixed inset-0 flex items-center justify-center bg-zinc-900/30 backdrop-blur-sm'>
          <LoadingSpinner />
        </div>
      )}
      {children}
    </fieldset>
  );
}

export default RegisterFormFieldset;
