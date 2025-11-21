/**
 * src/components/icons/WhatsAppIcon.tsx
 *
 * Lightweight WhatsApp logo as inline SVG to avoid extra dependencies.
 */

import React from "react";

/**
 * WhatsAppIcon
 *
 * Render a small WhatsApp SVG icon. Use it inside buttons or links.
 */
export default function WhatsAppIcon({
  size = 16,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 .01 5.39.01 12.02 0 13.95.39 15.8 1.12 17.46L0 24l6.8-1.11A11.96 11.96 0 0012 24c6.63 0 12-5.39 12-12.02 0-3.2-1.25-6.2-3.48-8.5zM12 21.8c-1.1 0-2.18-.28-3.13-.8l-.22-.12-4.04.66.69-3.92-.14-.25A8.03 8.03 0 014 12.02c0-4.42 3.58-8.02 8-8.02 2.14 0 4.16.83 5.67 2.34A7.97 7.97 0 0120 12.02c0 4.42-3.58 8-8 8zm4.35-5.8c-.23-.12-1.36-.67-1.57-.75-.21-.09-.36-.12-.51.12-.14.23-.55.75-.68.9-.12.16-.25.18-.47.06-.23-.13-.98-.36-1.86-1.15-.69-.61-1.15-1.36-1.29-1.59-.13-.24-.01-.36.1-.48.1-.09.23-.24.36-.36.12-.12.16-.21.24-.36.08-.15.04-.27-.02-.39-.06-.12-.51-1.25-.7-1.71-.18-.45-.37-.39-.51-.4l-.44-.01c-.15 0-.39.06-.6.28-.21.22-.8.78-.8 1.9s.82 2.2.93 2.36c.12.16 1.6 2.46 3.88 3.45 2.28.99 2.28.66 2.68.62.4-.03 1.36-.56 1.55-1.09.2-.53.2-.98.14-1.08-.05-.1-.19-.16-.42-.28z" />
    </svg>
  );
}