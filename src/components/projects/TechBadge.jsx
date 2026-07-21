import Badge from '../ui/Badge';

export default function TechBadge({ technologies = [] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <Badge key={tech} color="primary">{tech}</Badge>
      ))}
    </div>
  );
}
