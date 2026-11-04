"use client";

import { useState } from "react";
import { PlusIcon } from "@/components/site/Icons";

// One question open at a time; the first starts open.
export default function Faq({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className="overflow-hidden rounded-[14px] border border-fg/14 bg-bg/85">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question} className={index > 0 ? "border-t border-fg/10" : undefined}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-${index}`}
              className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-3.5 text-left text-base font-semibold text-fg"
            >
              {item.question}
              <PlusIcon
                className={`shrink-0 motion-safe:transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            {isOpen ? (
              <p
                id={`faq-${index}`}
                className="max-w-[64ch] px-5 pb-[18px] text-[15px] leading-[1.6] text-fg-soft"
              >
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
