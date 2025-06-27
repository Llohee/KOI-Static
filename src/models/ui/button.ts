import { cva, type VariantProps } from "class-variance-authority"
import type { ReactNode } from "react"

export const buttonVariants = cva(
  "flex gap-2 items-center justify-center active:opacity-55 focus:outline-none !transition-all",
  {
    variants: {
      intent: {
        default: "bg-brand border-2 border-brand text-brand",
        primary: "bg-primary border-2 border-primary text-primary",
      },
      styleBtn: {
        outline: "!bg-brand-background",
        solid: "!text-white",
      },
      size: {
        sm: "h-10 px-6 py-2 text-button-3",
        md: "h-12 px-10 py-2 text-button-2",
        lg: "h-14 px-12 py-2 text-button-1",
      },
      rounded: {
        default: "rounded-xl",
        full: "rounded-full",
      },
      fullWidth: {
        true: "!w-full",
        false: "!w-fit",
      },
      isLoading: {
        true: "animate-pulse",
        false: "",
      },
      disabled: {
        true: "opacity-70",
        false: "",
      },
      isOnlyIcon: {
        true: 'aspect-square !rounded-full',
        false: '',
      },
    },
    defaultVariants: {
      intent: "default",
      styleBtn: "solid",
      size: "md",
      isLoading: false,
      rounded: "default",
      fullWidth: false,
      disabled: false,
    },
  }
)


export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  onlyIcon?: ReactNode
  children: ReactNode
  startIcon?: ReactNode
  endIcon?: ReactNode
  onClick?: () => void
  isLoading?: boolean
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

