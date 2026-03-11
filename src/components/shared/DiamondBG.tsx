'use client';

import { useEffect, useRef } from 'react';

interface Diamond {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  opacity: number;
  fadePhase: number;
  fadeSpeed: number;
  driftX: number;
  driftY: number;
  r: number;
  g: number;
  b: number;
}

// Wide range: dark forest → mid green → sage → gray-green → silver → near-white
const PALETTE: [number, number, number][] = [
  [19, 37, 30],     // #13251e dark forest
  [34, 60, 48],     // dark-mid green
  [44, 75, 64],     // #2c4b40 mid green
  [62, 100, 82],    // sage green
  [80, 115, 100],   // muted sage
  [110, 140, 125],  // gray-green
  [140, 160, 150],  // light gray-green
  [170, 185, 178],  // silver-green
  [195, 205, 200],  // light silver
  [215, 220, 218],  // near-white
];

function createDiamond(canvasW: number, canvasH: number): Diamond {
  const size = 150 + Math.random() * 250; // 150-400px
  const [r, g, b] = PALETTE[Math.floor(Math.random() * PALETTE.length)];
  const baseOpacity = 0.08 + Math.random() * 0.32; // 8-40%
  return {
    x: Math.random() * canvasW,
    y: Math.random() * canvasH,
    size,
    baseOpacity,
    opacity: baseOpacity * Math.random(),
    fadePhase: Math.random() * Math.PI * 2,
    fadeSpeed: 0.003 + Math.random() * 0.008, // slow pulse ~4-12s cycle
    driftX: (Math.random() - 0.5) * 0.06, // barely perceptible
    driftY: (Math.random() - 0.5) * 0.04,
    r,
    g,
    b,
  };
}

function drawDiamond(ctx: CanvasRenderingContext2D, d: Diamond, canvasW: number, canvasH: number) {
  let edgeFade = 1;
  const fadeZone = 100;
  if (d.x < fadeZone) edgeFade = Math.min(edgeFade, d.x / fadeZone);
  if (d.x > canvasW - fadeZone) edgeFade = Math.min(edgeFade, (canvasW - d.x) / fadeZone);
  if (d.y < fadeZone) edgeFade = Math.min(edgeFade, d.y / fadeZone);
  if (d.y > canvasH - fadeZone) edgeFade = Math.min(edgeFade, (canvasH - d.y) / fadeZone);

  ctx.save();
  ctx.translate(d.x, d.y);
  ctx.rotate(Math.PI / 4); // fixed 45° — static diamond, no spinning
  ctx.globalAlpha = d.opacity * Math.max(0, edgeFade);

  const half = d.size / 2;
  ctx.beginPath();
  ctx.rect(-half, -half, d.size, d.size);
  ctx.closePath();

  ctx.fillStyle = `rgb(${d.r}, ${d.g}, ${d.b})`;
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
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(10, Math.min(18, Math.floor(parent.offsetWidth / 80)));
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
        // Fade in/out pulse
        d.fadePhase += d.fadeSpeed;
        d.opacity = d.baseOpacity * (0.4 + 0.6 * ((Math.sin(d.fadePhase) + 1) / 2));

        // Very slow drift
        d.x += d.driftX;
        d.y += d.driftY;

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
