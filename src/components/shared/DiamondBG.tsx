'use client';

import { useEffect, useRef } from 'react';

interface Diamond {
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  driftX: number;
  driftY: number;
  color: string;
}

const COLORS = [
  'rgba(19, 37, 30, OPACITY)',   // #13251e dark forest
  'rgba(44, 75, 64, OPACITY)',   // #2c4b40 mid green
  'rgba(62, 100, 82, OPACITY)',  // lighter sage
];

function createDiamond(canvasW: number, canvasH: number): Diamond {
  const size = 60 + Math.random() * 140; // big: 60-200px
  const colorTemplate = COLORS[Math.floor(Math.random() * COLORS.length)];
  const opacity = 0.06 + Math.random() * 0.14; // 6-20% opacity
  return {
    x: Math.random() * canvasW,
    y: Math.random() * canvasH,
    size,
    opacity,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 0.15, // very slow rotation
    driftX: (Math.random() - 0.5) * 0.2,  // slow horizontal drift
    driftY: (Math.random() - 0.5) * 0.15, // slow vertical drift
    color: colorTemplate.replace('OPACITY', opacity.toString()),
  };
}

function drawDiamond(ctx: CanvasRenderingContext2D, d: Diamond, canvasW: number, canvasH: number) {
  // Fade at edges
  let edgeFade = 1;
  const fadeZone = 80;
  if (d.x < fadeZone) edgeFade = Math.min(edgeFade, d.x / fadeZone);
  if (d.x > canvasW - fadeZone) edgeFade = Math.min(edgeFade, (canvasW - d.x) / fadeZone);
  if (d.y < fadeZone) edgeFade = Math.min(edgeFade, d.y / fadeZone);
  if (d.y > canvasH - fadeZone) edgeFade = Math.min(edgeFade, (canvasH - d.y) / fadeZone);

  ctx.save();
  ctx.translate(d.x, d.y);
  ctx.rotate((d.rotation * Math.PI) / 180);
  ctx.globalAlpha = d.opacity * Math.max(0, edgeFade);

  // Diamond shape (rotated square)
  const half = d.size / 2;
  ctx.beginPath();
  ctx.moveTo(0, -half);      // top
  ctx.lineTo(half, 0);       // right
  ctx.lineTo(0, half);       // bottom
  ctx.lineTo(-half, 0);      // left
  ctx.closePath();

  ctx.fillStyle = d.color;
  ctx.fill();

  ctx.restore();
}

export default function DiamondBG({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const diamondsRef = useRef<Diamond[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = parent.offsetWidth * dpr;
      canvas.height = parent.offsetHeight * dpr;
      canvas.style.width = parent.offsetWidth + 'px';
      canvas.style.height = parent.offsetHeight + 'px';
      ctx.scale(dpr, dpr);

      // Reinit diamonds on resize
      const count = Math.max(8, Math.min(14, Math.floor(parent.offsetWidth / 100)));
      diamondsRef.current = Array.from({ length: count }, () =>
        createDiamond(parent.offsetWidth, parent.offsetHeight)
      );
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.offsetWidth;
      const h = parent.offsetHeight;

      ctx.clearRect(0, 0, w, h);

      diamondsRef.current.forEach(d => {
        // Drift
        d.x += d.driftX;
        d.y += d.driftY;
        d.rotation += d.rotationSpeed;

        // Wrap around (with buffer)
        const buf = d.size;
        if (d.x < -buf) d.x = w + buf;
        if (d.x > w + buf) d.x = -buf;
        if (d.y < -buf) d.y = h + buf;
        if (d.y > h + buf) d.y = -buf;

        drawDiamond(ctx, d, w, h);
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}
