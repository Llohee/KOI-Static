import { buttonVariants, type ButtonProps } from '@/models/ui/button'
import React from 'react'

const Button: React.FC<ButtonProps> = ({
  children,
  size ,
  intent,
  styleBtn,
  rounded,
  fullWidth,
  startIcon,
  endIcon,
  onlyIcon,
  onClick,
  className = '',
  disabled = false,
  isLoading = false,
  ...props
}) => {
  const isOnlyIcon = Boolean(onlyIcon)

  return (
    <button
      className={buttonVariants({
        intent,
        styleBtn,
        size,
        disabled,
        isLoading,
        rounded,
        fullWidth,
        className,
        isOnlyIcon,
      })}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...props}
    >
      {isOnlyIcon ? (
        isLoading ? (
          <svg
            className="size-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          <span className="flex items-center">{onlyIcon}</span>
        )
      ) : (
        <>
          {startIcon && (
            <span className="flex items-center mr-2">{startIcon}</span>
          )}
          {!startIcon && isLoading && (
            <svg
              className="size-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          {children}
          {endIcon && <span className="flex items-center ml-2">{endIcon}</span>}
        </>
      )}
    </button>
  )
}

export default Button
