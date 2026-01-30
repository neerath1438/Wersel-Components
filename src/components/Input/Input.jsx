import { useState } from 'react'
import './Input.css'

const Input = ({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={`input-wrapper ${className}`}>
      {label && (
        <label className={`input-label ${required ? 'required' : ''}`}>
          {label}
        </label>
      )}
      <div className={`input-container ${isFocused ? 'focused' : ''} ${error ? 'error' : ''}`}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          className="input-field"
          {...props}
        />
      </div>
      {error && <span className="input-error">{error}</span>}
    </div>
  )
}

export default Input

