import React from "react";

import { cn } from "@/lib/utils";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-[0.8rem] text-zinc-400", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

export default FormDescription;
