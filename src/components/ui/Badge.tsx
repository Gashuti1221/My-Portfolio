interface BadgeProps {
  children: string
  className?: string
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-block px-3 py-1 text-sm font-medium bg-gray-200 text-gray-800 rounded-full ${className}`}>
      {children}
    </span>
  )
}
