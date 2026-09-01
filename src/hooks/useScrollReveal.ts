"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealType = "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn";

interface UseScrollRevealOptions {
  type?: RevealType;
  duration?: number;
  delay?: number;
  stagger?: number;
  triggerStart?: string;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement>({
  type = "fadeUp",
  duration = 0.8,
  delay = 0,
  stagger = 0,
  triggerStart = "top 85%",
  once = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = { opacity: 0 };
    const toVars: gsap.TweenVars = { opacity: 1, duration, delay, ease: "power3.out" };

    switch (type) {
      case "fadeUp":
        fromVars.y = 50;
        toVars.y = 0;
        break;
      case "fadeLeft":
        fromVars.x = -60;
        toVars.x = 0;
        break;
      case "fadeRight":
        fromVars.x = 60;
        toVars.x = 0;
        break;
      case "scaleIn":
        fromVars.scale = 0.85;
        toVars.scale = 1;
        break;
    }

    if (stagger > 0) {
      toVars.stagger = stagger;
    }

    const targets = stagger > 0 ? el.children : el;

    gsap.set(targets, fromVars);

    const tween = gsap.to(targets, {
      ...toVars,
      scrollTrigger: {
        trigger: el,
        start: triggerStart,
        toggleActions: once ? "play none none none" : "play none none reverse",
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [type, duration, delay, stagger, triggerStart, once]);

  return ref;
}
