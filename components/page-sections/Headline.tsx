"use client";

import AetherFlowHero from "@/components/ui/aether-flow-hero";

export default function Headline() {
  return (
    <section
      id="headline-fullscreen"
      className="relative -mt-16 sm:-mt-24"
      style={{ scrollSnapAlign: "start" }}
    >
      <AetherFlowHero />
    </section>
  );
}
