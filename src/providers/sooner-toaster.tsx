import React from "react";
import { FaCircleCheck, FaCircleInfo } from "react-icons/fa6";
import { MdOutlineError } from "react-icons/md";
import { TiWarning } from "react-icons/ti";
import { Toaster, type ToasterProps } from "sonner";

const SoonerToaster = ({ ...props }: ToasterProps) => {
  return (
    <Toaster
      richColors
      position="bottom-right"
      toastOptions={{
        classNames: {
          content: "text-sm font-sans",
        },
      }}
      icons={{
        success: <FaCircleCheck className="size-5" />,
        info: <FaCircleInfo className="size-5" />,
        warning: <TiWarning className="size-5" />,
        error: <MdOutlineError className="size-5" />,
      }}
      {...props}
    />
  );
};

export default SoonerToaster;
