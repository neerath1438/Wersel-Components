import './Alert.css'

const Alert = ({
  type = 'info',
  message,
  title,
  onClose,
  showIcon = true,
  className = ''
}) => {
  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  }

  return (
    <div className={`alert alert-${type} ${className}`}>
      <div className="alert-content">
        {showIcon && <span className="alert-icon">{icons[type]}</span>}
        <div className="alert-text">
          {title && <div className="alert-title">{title}</div>}
          {message && <div className="alert-message">{message}</div>}
        </div>
      </div>
      {onClose && (
        <button className="alert-close" onClick={onClose}>
          ×
        </button>
      )}
    </div>
  )
}

export default Alert

