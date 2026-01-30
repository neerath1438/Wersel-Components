import { useState, useRef, useEffect } from 'react'
import './Dropdown.css'

const Dropdown = ({
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  label,
  error,
  disabled = false,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectedOption = options.find(opt => opt.value === value)

  const handleSelect = (option) => {
    onChange(option.value)
    setIsOpen(false)
  }

  return (
    <div className={`dropdown-wrapper ${className}`} ref={dropdownRef}>
      {label && (
        <label className={`dropdown-label ${error ? 'error' : ''}`}>
          {label}
        </label>
      )}
      <div className={`dropdown-container ${isOpen ? 'open' : ''} ${error ? 'error' : ''} ${disabled ? 'disabled' : ''}`}>
        <button
          type="button"
          className="dropdown-button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
        >
          <span className={selectedOption ? 'selected' : 'placeholder'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span className="dropdown-arrow">▼</span>
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            {options.length === 0 ? (
              <div className="dropdown-item disabled">No options available</div>
            ) : (
              options.map((option) => (
                <div
                  key={option.value}
                  className={`dropdown-item ${value === option.value ? 'selected' : ''}`}
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </div>
              ))
            )}
          </div>
        )}
      </div>
      {error && <span className="dropdown-error">{error}</span>}
    </div>
  )
}

export default Dropdown

