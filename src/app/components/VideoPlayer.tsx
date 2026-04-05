import { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  src: string;
  className?: string;
  isHLS?: boolean;
}

export function VideoPlayer({ src, className, isHLS = false }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isHLS && videoRef.current) {
      // For HLS streams, we'll use native HLS support in Safari or fallback
      if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = src;
      } else {
        // For browsers without native HLS support, dynamically load hls.js
        import('hls.js').then((HLS) => {
          if (HLS.default.isSupported() && videoRef.current) {
            const hls = new HLS.default();
            hls.loadSource(src);
            hls.attachMedia(videoRef.current);
          }
        }).catch(() => {
          // Fallback to regular video if hls.js fails to load
          if (videoRef.current) {
            videoRef.current.src = src;
          }
        });
      }
    }
  }, [src, isHLS]);

  if (isHLS) {
    return (
      <video
        ref={videoRef}
        className={className}
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }

  return (
    <video
      className={className}
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
