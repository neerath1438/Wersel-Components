import './Button.css'

const Button = ({
  children,
  onClick,
  variant = 'default',
  size = 'medium',
  disabled = false,
  type = 'button',
  loading = false,
  iconLeft = null,
  iconRight = null,
  className = '',
  ...props
}) => {
  // Map size shortcuts to full names for backward compatibility
  const sizeMap = {
    'sm': 'small',
    'lg': 'large',
    'small': 'small',
    'medium': 'medium',
    'large': 'large'
  }

  const mappedSize = sizeMap[size] || 'medium'

  // Combine classes
  const buttonClasses = `btn btn-${variant} btn-${mappedSize} ${className}`.trim()

  // Check if it's an icon-only button
  const isIconOnly = !children && (iconLeft || iconRight)

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      {...props}
    >
      {loading && (
        <span className="btn-spinner"></span>
      )}
      {!loading && iconLeft && (
        <span className="btn-icon-left">{iconLeft}</span>
      )}
      {!loading && children && (
        <span className={isIconOnly ? '' : 'btn-text'}>{children}</span>
      )}
      {!loading && iconRight && (
        <span className="btn-icon-right">{iconRight}</span>
      )}
    </button>
  )
}

export default Button

