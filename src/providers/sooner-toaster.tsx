import React from "react";
import { Toaster, type ToasterProps } from "sonner";

const SoonerToaster = ({ ...props }: ToasterProps) => {
  return (
    <Toaster
      richColors
      position="bottom-right"
      toastOptions={{ classNames: { content: "text-sm" } }}
      {...props}
    />
  );
};

export default SoonerToaster;
