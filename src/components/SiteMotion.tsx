import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Pause, Play } from "lucide-react";

/** Progressive enhancement: content remains visible without JS or motion support. */
export function SiteMotion() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(preference.matches);
    sync();
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (paused || reduced || preference.matches) {
      document.documentElement.dataset["motion"] = "off";
      return;
    }
    document.documentElement.dataset["motion"] = "on";
    const animations = new Set<Animation>();
    const play = (element: Element, delay = 0) => {
      if (typeof element.animate !== "function") return;
      const animation = element.animate(
        [
          { opacity: 0, transform: "translateY(28px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 850, delay, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" },
      );
      animations.add(animation);
      animation.onfinish = () => animations.delete(animation);
    };
    document
      .querySelectorAll(".hero-copy > *, .hero-visual")
      .forEach((element, i) => play(element, i * 100));
    let observer: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const element = entry.target;
            const siblings = Array.from(element.parentElement?.children ?? []);
            const stagger = element.matches(".care-card, .journey-grid article")
              ? siblings.indexOf(element) * 100
              : 0;
            play(element, stagger);
            observer?.unobserve(element);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
      );
      document
        .querySelectorAll(
          ".section-heading, .care-card, .about-image, .about-copy, .journey-grid article, .instagram-panel, .faq-grid > div, .contact-inner > div:first-child",
        )
        .forEach((element) => observer?.observe(element));
    }
    return () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      document.documentElement.dataset["motion"] = "off";
    };
  }, [pathname, paused, reduced]);

  return (
    <button
      type="button"
      className="motion-toggle"
      onClick={() => setPaused(!paused)}
      aria-label={paused ? "Ativar animações" : "Pausar animações"}
      aria-pressed={paused}
      title={
        reduced
          ? "Movimento reduzido conforme preferência do dispositivo"
          : paused
            ? "Ativar animações"
            : "Pausar animações"
      }
      disabled={reduced}
    >
      {paused || reduced ? <Play size={13} /> : <Pause size={13} />}
      <span>
        {reduced ? "Movimento reduzido" : paused ? "Ativar animações" : "Pausar animações"}
      </span>
    </button>
  );
}
