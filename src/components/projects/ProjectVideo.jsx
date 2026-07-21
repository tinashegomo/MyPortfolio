export default function ProjectVideo({ url, title }) {
  if (!url) return null;

  let embedUrl = url;

  // Convert YouTube watch URL to embed URL
  if (url.includes('youtube.com/watch')) {
    const videoId = new URL(url).searchParams.get('v');
    if (videoId) embedUrl = `https://www.youtube.com/embed/${videoId}`;
  }

  // Convert youtu.be short URL to embed URL
  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1]?.split('?')[0];
    if (videoId) embedUrl = `https://www.youtube.com/embed/${videoId}`;
  }

  return (
    <div className="relative w-full aspect-video rounded-card overflow-hidden bg-surface-elevated border border-border-default">
      <iframe
        src={embedUrl}
        title={title || 'Project video'}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
