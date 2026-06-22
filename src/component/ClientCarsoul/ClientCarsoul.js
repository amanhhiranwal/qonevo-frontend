import { useEffect, useRef } from 'react';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context('../../Assets/client2', false, /\.(jpg|JPG|jpeg|JPEG|png|PNG|webp|WEBP|gif|GIF)$/)
);

export default function ClientCarousel() {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef(0);

  const cardWidth = 100;   // ✅ small image width
  const cardHeight = 70;   // ✅ small image height
  const gap = 50;          // gap between images
  const speed = 1;         // ✅ pixels per frame — increase for faster scroll

  const n = images.length;
  const STEP = cardWidth + gap;
  const totalWidth = n * STEP; // width of one full set

  // Double the images so it loops seamlessly
  const doubled = n > 0 ? [...images, ...images] : [];

  useEffect(() => {
    if (n === 0) return;
    const track = trackRef.current;

    function animate() {
      posRef.current -= speed;

      // When scrolled one full set, reset back silently
      if (Math.abs(posRef.current) >= totalWidth) {
        posRef.current = 0;
      }

      track.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
  }, [n, totalWidth, speed]);

  if (n === 0) return <p style={{ color: 'red' }}>No images found!</p>;

  return (
    <div style={{ overflow: 'hidden', width: '100%'}}>
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: gap,
          willChange: 'transform',
          width: 'max-content',
        }}
      >
        {doubled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`client-${i}`}
            draggable={false}
            style={{
              flexShrink: 0,
              height: cardHeight,
              objectFit: 'fit',
            }}
            className='w-full'
            loading='lazy'
          />
        ))}
      </div>
    </div>
  );
}