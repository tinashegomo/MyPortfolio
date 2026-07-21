export default function Skeleton({ className = '', count = 1 }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`skeleton ${className}`} />
      ))}
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-surface-default border border-border-default rounded-card overflow-hidden">
      <div className="skeleton h-48 w-full rounded-none" />
      <div className="p-5 space-y-3">
        <div className="skeleton h-5 w-3/4 rounded-chip" />
        <div className="skeleton h-4 w-full rounded-chip" />
        <div className="skeleton h-4 w-2/3 rounded-chip" />
        <div className="flex gap-2 pt-2">
          <div className="skeleton h-6 w-16 rounded-pill" />
          <div className="skeleton h-6 w-16 rounded-pill" />
          <div className="skeleton h-6 w-16 rounded-pill" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonText({ lines = 3 }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`skeleton h-4 rounded-chip ${i === lines - 1 ? 'w-2/3' : 'w-full'}`}
        />
      ))}
    </div>
  );
}
