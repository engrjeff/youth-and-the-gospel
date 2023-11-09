import { cn } from "@/lib/utils";
import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

function Label({ className, ...props }: LabelProps) {
  return (
    <label
      {...props}
      className={cn("text-sm font-medium leading-none", className)}
    />
  );
}

export default Label;
