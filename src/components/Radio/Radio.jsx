import './Radio.css'

const Radio = ({
  label,
  name,
  value,
  checked = false,
  onChange,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <label className={`radio-wrapper ${className} ${disabled ? 'disabled' : ''}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="radio-input"
        {...props}
      />
      <span className="radio-custom"></span>
      {label && <span className="radio-label">{label}</span>}
    </label>
  )
}

export default Radio

