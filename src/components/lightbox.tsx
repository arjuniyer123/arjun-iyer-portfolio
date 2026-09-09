import React, { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function Lightbox({ src, alt, onClose }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Full-size view: ${alt}`}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-white/50"
        onClick={onClose}
        aria-label="Close image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Image — stop propagation so clicking the image itself doesn't close */}
      <img
        src={src}
        alt={alt}
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-sm shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body
  );
}

/** Returns props to make any <img> open in a Lightbox on click */
export function useLightbox() {
  const [lightbox, setLightbox] = React.useState<{ src: string; alt: string } | null>(null);

  const open = useCallback((src: string, alt: string) => setLightbox({ src, alt }), []);
  const close = useCallback(() => setLightbox(null), []);

  const node =
    lightbox ? <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={close} /> : null;

  return { open, node };
}
