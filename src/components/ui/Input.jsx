import { forwardRef } from 'react';

const Input = forwardRef(function Input(
  { label, error, className = '', ...props },
  ref
) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-text-secondary">{label}</label>
      )}
      <input
        ref={ref}
        className={`w-full h-11 px-4 bg-surface-elevated border border-border-default rounded-input
          text-sm text-text-primary placeholder:text-text-muted
          focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary
          transition-colors duration-200
          ${error ? 'border-danger-main focus:ring-danger-main/20 focus:border-danger-main' : ''}
          ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-danger-main">{error}</p>}
    </div>
  );
});

export default Input;
