import { useState } from 'react'
import './Textarea.css'

const Textarea = ({
  label,
  placeholder = '',
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  rows = 4,
  maxLength,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={`textarea-wrapper ${className}`}>
      {label && (
        <label className={`textarea-label ${required ? 'required' : ''}`}>
          {label}
        </label>
      )}
      <div className={`textarea-container ${isFocused ? 'focused' : ''} ${error ? 'error' : ''}`}>
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          rows={rows}
          maxLength={maxLength}
          className="textarea-field"
          {...props}
        />
        {maxLength && (
          <span className="textarea-counter">
            {value?.length || 0} / {maxLength}
          </span>
        )}
      </div>
      {error && <span className="textarea-error">{error}</span>}
    </div>
  )
}

export default Textarea

