// src/components/CursorSpotlight.tsx
import React, { useEffect, useRef } from 'react';

export const CursorSpotlight: React.FC<{
  size?: number;
  color?: string;
  haloSize?: number;
  haloColor?: string;
  enabled?: boolean;
}> = ({
  size = 520,
  color = 'rgba(139,92,246,0.22)',
  haloSize = 740,
  haloColor = 'rgba(139,92,246,0.18)',
  enabled = true,
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const el = rootRef.current;
    if (!el) return;

    // Initialize to center so it’s visible before first move
    el.style.setProperty('--sx', '50vw');
    el.style.setProperty('--sy', '50vh');

    const onMove = (e: PointerEvent) => {
      el.style.setProperty('--sx', `${e.clientX}px`);
      el.style.setProperty('--sy', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-" // above bg layers, below content
    >
      {/* Core glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(${size}px ${size}px at var(--sx, 50vw) var(--sy, 50vh), ${color} 0%, transparent 60%)`,
          transition: 'background-position 80ms ease-out',
        }}
      />
      {/* Outer halo */}
      <div
        className="absolute inset-0 blur-2xl opacity-60"
        style={{
          background: `radial-gradient(${haloSize}px ${haloSize}px at var(--sx, 50vw) var(--sy, 50vh), ${haloColor} 0%, transparent 65%)`,
          transition: 'background-position 80ms ease-out',
        }}
      />
    </div>
  );
};
