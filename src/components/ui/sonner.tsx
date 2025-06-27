// import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  // const { theme = "system" } = useTheme();

  return (
    <Sonner
      // theme={theme as ToasterProps["theme"]}
      // className="toaster group"
      duration={Infinity}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[#EDE7E0] group-[.toaster]:text-brand group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-body-2",
          actionButton:
            "!group-[.toast]:bg-primary-background group-[.toast]:text-white font-medium",
          cancelButton:
            "group-[.toast]:bg-brand-background group-[.toast]:text-brand font-medium",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
