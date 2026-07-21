import { Link } from 'react-router-dom';

export default function Card({ children, className = '', to, hover = true, ...props }) {
  const base = `bg-surface-default border border-border-default rounded-card shadow-elevation-1 overflow-hidden
    ${hover ? 'hover-lift' : ''}
    ${className}`;

  if (to) {
    return (
      <Link to={to} className={base} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <div className={base} {...props}>
      {children}
    </div>
  );
}
