"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const AetherFlowHero = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    let animationFrameId: number;
    const mouse = { x: null as number | null, y: null as number | null, radius: 200 };

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(
        x: number,
        y: number,
        directionX: number,
        directionY: number,
        size: number,
        color: string
      ) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > canvas!.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas!.height || this.y < 0) this.directionY = -this.directionY;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= forceDirectionX * force * 5;
            this.y -= forceDirectionY * force * 5;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    let particles: Particle[] = [];

    function init() {
      particles = [];
      const numberOfParticles = (canvas!.height * canvas!.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
        const y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
        const directionX = Math.random() * 0.4 - 0.2;
        const directionY = Math.random() * 0.4 - 0.2;
        particles.push(new Particle(x, y, directionX, directionY, size, "rgba(251, 191, 36, 0.85)"));
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = dx * dx + dy * dy;
          const threshold = (canvas!.width / 7) * (canvas!.height / 7);

          if (distance < threshold) {
            const opacityValue = 1 - distance / 20000;
            const dxm = particles[a].x - (mouse.x ?? 0);
            const dym = particles[a].y - (mouse.y ?? 0);
            const distMouse = Math.sqrt(dxm * dxm + dym * dym);

            ctx.strokeStyle =
              mouse.x && distMouse < mouse.radius
                ? `rgba(253, 224, 71, ${opacityValue})`
                : `rgba(251, 191, 36, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, innerWidth, innerHeight);
      for (const p of particles) p.update();
      connect();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);
    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 + 0.5, duration: 0.8, ease: "easeInOut" as const },
    }),
  };

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      {/* Fade the canvas into the page background so the transition isn't a hard cut */}
      <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950 pointer-events-none z-[5]" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 mb-6 backdrop-blur-sm"
        >
          <Zap className="h-4 w-4 text-amber-400" />
          <span className="text-sm font-medium text-gray-200">Fullstack Web3 Developer</span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 text-white"
        >
          Hi, I&apos;m Kobs
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 mb-10 leading-7"
        >
          Fullstack Web3 developer with 5 years of shipping products end to
          end. Utilizes AI with spec-driven development to deliver day-to-day
          work more efficiently.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate="visible"
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#about"
            className="px-7 py-3 bg-amber-400 text-slate-950 font-semibold rounded-full shadow-lg shadow-amber-400/30 hover:-translate-y-0.5 hover:shadow-amber-300/40 transition-all duration-200 flex items-center gap-2"
          >
            Get to know me
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://calendly.com/ckasergio/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full border border-white/15 text-slate-50 font-semibold hover:border-amber-200/60 hover:text-amber-200 transition-all duration-200"
          >
            Book a call
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AetherFlowHero;
