const colorMap = {
  default: 'bg-surface-elevated text-text-secondary',
  primary: 'bg-brand-subtle text-brand-primary',
  success: 'bg-success-bg text-success-main',
  warning: 'bg-warning-bg text-warning-main',
  info: 'bg-info-bg text-info-main',
  danger: 'bg-danger-main/10 text-danger-main',
};

export default function Badge({ children, color = 'default', className = '' }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-pill text-ui-badge font-medium
        ${colorMap[color]}
        ${className}`}
    >
      {children}
    </span>
  );
}
