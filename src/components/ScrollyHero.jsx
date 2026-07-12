import React, { useRef, useState, useEffect } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';

const TOTAL_FRAMES = 111;
const IDLE_FRAMES = 20;   // first 20 frames loop gently when page is idle
const CANVAS_SIZE = 560;  // explicit px — avoids h-full:0 bug in grid columns

const ScrollyHero = ({ h }) => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const rafRef = useRef(null);
  const idleIdxRef = useRef(0);
  const lastScrollRef = useRef(0);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0px', '-120px']);

  // ── Preload all frames ──────────────────────────────────────────────────
  useEffect(() => {
    const imgs = [];
    let loaded = 0;
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/frames/frame_${String(i).padStart(4, '0')}.jpg`;
      img.onload = () => {
        loaded++;
        if (loaded === TOTAL_FRAMES) {
          imagesRef.current = imgs;
          setReady(true);
        }
      };
      img.onerror = () => { loaded++; }; // don't block on missing frames
      imgs.push(img);
    }
  }, []);

  // ── Draw a specific frame index ─────────────────────────────────────────
  const drawFrame = (idx) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[idx];
    if (!canvas || !img || !img.complete) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // contain-fit: preserve ratio, center in canvas
    const scale = Math.min(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
    const x = (canvas.width - img.naturalWidth * scale) / 2;
    const y = (canvas.height - img.naturalHeight * scale) / 2;
    ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
  };

  // ── Animation loop: idle at top, scroll-driven below ───────────────────
  useEffect(() => {
    if (!ready) return;
    drawFrame(0); // show first frame immediately

    const FPS_MS = 1000 / 18; // idle loop ~18fps
    let then = Date.now();

    const loop = () => {
      rafRef.current = requestAnimationFrame(loop);
      const progress = scrollYProgress.get();

      if (progress > 0.01) {
        // scroll-driven: map 0.01–1 → frames IDLE_FRAMES–TOTAL_FRAMES
        const factor = Math.min(1, (progress - 0.01) / 0.99);
        const idx = IDLE_FRAMES + Math.floor(factor * (TOTAL_FRAMES - IDLE_FRAMES - 1));
        const clamped = Math.min(TOTAL_FRAMES - 1, Math.max(0, idx));
        if (clamped !== lastScrollRef.current) {
          lastScrollRef.current = clamped;
          drawFrame(clamped);
        }
      } else {
        // idle: loop first IDLE_FRAMES at ~18fps
        const now = Date.now();
        if (now - then >= FPS_MS) {
          then = now;
          drawFrame(idleIdxRef.current);
          idleIdxRef.current = (idleIdxRef.current + 1) % IDLE_FRAMES;
        }
      }
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [ready, scrollYProgress]);

  // ── Copy props with safe fallbacks ─────────────────────────────────────
  const badge    = h?.badge    || 'Revenue Infrastructure';
  const line1    = h?.h1_line1 || 'We Build';
  const line2    = h?.h1_line2 || 'Revenue';
  const line3    = h?.h1_line3 || 'Engines.';
  const subtitle = h?.subtitle || 'Most agencies deliver activity. 4U Pact delivers infrastructure: CRM, automation, and content that converts.';
  const cta      = h?.cta_primary || 'Book Free Audit';

  const wordAnim = {
    hidden:  { opacity: 0, y: 12, rotateX: 60 },
    visible: { opacity: 1, y: 0,  rotateX: 0,  transition: { duration: 0.3, ease: 'easeOut' } },
  };

  return (
    /*
      300vh tall section = the "scroll runway".
      The inner div is sticky top-0 h-screen so it stays pinned
      while the user scrolls through the runway → robot animates.
    */
    <section
      ref={sectionRef}
      style={{ height: '300vh' }}
      className="relative bg-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">

            {/* ── LEFT: copy ─────────────────────────────────── */}
            <Motion.div className="max-w-xl" style={{ y: textY }}>
              <p className="text-[11px] font-black uppercase tracking-[0.35em] text-primary mb-5 pt-20 lg:pt-0">
                {badge}
              </p>

              <Motion.h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] leading-[0.95] font-black tracking-tighter"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
              >
                <div className="text-slate-950">
                  {line1.split(' ').map((w, i) => (
                    <Motion.span key={i} variants={wordAnim} className="inline-block mr-[0.2em]" style={{ transformOrigin: 'bottom' }}>{w}</Motion.span>
                  ))}
                </div>
                <div className="text-primary italic">
                  {line2.split(' ').map((w, i) => (
                    <Motion.span key={i} variants={wordAnim} className="inline-block mr-[0.2em]" style={{ transformOrigin: 'bottom' }}>{w}</Motion.span>
                  ))}
                </div>
                <div className="text-teal italic">
                  {line3.split(' ').map((w, i) => (
                    <Motion.span key={i} variants={wordAnim} className="inline-block mr-[0.2em]" style={{ transformOrigin: 'bottom' }}>{w}</Motion.span>
                  ))}
                </div>
              </Motion.h1>

              <p className="mt-7 text-lg text-slate-600 font-bold leading-relaxed">
                {subtitle}
              </p>

              <div className="mt-9">
                <a
                  href="#revenue-audit"
                  className="inline-flex px-8 py-4 bg-teal text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-900 transition-colors"
                >
                  {cta}
                </a>
              </div>
            </Motion.div>

            {/* ── RIGHT: canvas ────────────────────────────────── */}
            <div className="flex justify-center lg:justify-end items-center">
              {/* Loading bar shown until frames are ready */}
              {!ready && (
                <div
                  style={{ width: CANVAS_SIZE, height: CANVAS_SIZE }}
                  className="flex items-center justify-center"
                >
                  <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full animate-pulse" style={{ width: '60%' }} />
                  </div>
                </div>
              )}

              {/*
                Canvas: explicit pixel size so CSS never collapses it to 0.
                Canvas pixel resolution matches display size for crisp rendering.
              */}
              <canvas
                ref={canvasRef}
                width={CANVAS_SIZE}
                height={CANVAS_SIZE}
                style={{
                  width: CANVAS_SIZE,
                  height: CANVAS_SIZE,
                  display: ready ? 'block' : 'none',
                  background: 'transparent',
                }}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollyHero;
