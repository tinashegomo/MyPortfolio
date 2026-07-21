import { forwardRef } from 'react';

const variants = {
  primary: 'bg-brand-primary text-white hover:bg-brand-hover active:bg-brand-pressed shadow-lg hover:shadow-xl',
  secondary: 'bg-surface-elevated text-text-primary border border-border-default hover:bg-surface-muted hover:border-border-strong',
  ghost: 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated',
  danger: 'bg-danger-main text-white hover:bg-danger-hover active:bg-danger-pressed',
};

const sizes = {
  sm: 'h-10 px-4 text-sm rounded-input',
  md: 'h-12 px-6 text-sm rounded-input',
  lg: 'h-14 px-8 text-base rounded-input',
};

const Button = forwardRef(function Button(
  { variant = 'primary', size = 'md', className = '', disabled, loading, children, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 press-scale
        ${variants[variant]}
        ${sizes[size]}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}`}
      {...props}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </button>
  );
});

export default Button;
