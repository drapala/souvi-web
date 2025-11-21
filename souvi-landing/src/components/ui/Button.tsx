import React from 'react'
import { ArrowRight, Loader2 } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  isLoading?: boolean
  withArrow?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', isLoading, withArrow, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
    
    const variants = {
      primary: "bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0",
      secondary: "bg-gray-900 hover:bg-gray-800 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5",
      outline: "border-2 border-gray-200 hover:border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
      ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
    }

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
      xl: "px-10 py-5 text-xl"
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
        {children}
        {withArrow && !isLoading && <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
      </button>
    )
  }
)

Button.displayName = "Button"
