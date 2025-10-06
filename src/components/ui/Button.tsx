import { ReactNode, ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-500',
    secondary: 'bg-slate-700 hover:bg-slate-600 text-white focus:ring-slate-500',
    outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white focus:ring-orange-500'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  return (
    <button
      type={props.type ?? 'button'}
      {...props}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}
