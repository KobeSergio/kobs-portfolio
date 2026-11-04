"use client";

import { useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "@/lib/useReducedMotion";

// A build's media at 16:9: a video with its poster, an image carousel when
// there are several images, nothing when there are none. Videos autoplay
// muted and loop, except under reduced motion.
export default function Media({
  images,
  poster,
  alt,
}: {
  images: string[];
  poster?: string;
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  if (images.length === 0) return null;

  const src = images[index] ?? images[0];
  const isVideo = /\.(webm|mp4)$/.test(src);
  const hasCarousel = images.length > 1;
  const go = (step: number) =>
    setIndex((current) => (current + step + images.length) % images.length);

  return (
    <div className="relative overflow-hidden rounded-md border bg-bg-inset">
      {isVideo ? (
        <video
          key={src}
          src={src}
          poster={poster}
          className="aspect-video w-full object-cover"
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          controls
        />
      ) : (
        <div className="relative aspect-video w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1280px) 640px, 100vw"
            className="object-cover object-top"
          />
        </div>
      )}

      {hasCarousel ? (
        <>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous media"
              className="pointer-events-auto flex size-9 items-center justify-center rounded-full bg-black/50 text-xl leading-none text-white backdrop-blur"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next media"
              className="pointer-events-auto flex size-9 items-center justify-center rounded-full bg-black/50 text-xl leading-none text-white backdrop-blur"
            >
              ›
            </button>
          </div>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((image, dot) => (
              <span
                key={image}
                className={`size-1.5 rounded-full ${
                  dot === index ? "bg-fg" : "bg-fg/30"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
