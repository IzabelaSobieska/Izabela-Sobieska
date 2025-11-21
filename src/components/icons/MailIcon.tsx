/**
 * src/components/icons/MailIcon.tsx
 *
 * Small mail/ envelope icon component.
 */

import React from "react";
import { Mail } from "lucide-react";

/**
 * MailIcon
 *
 * Thin mail icon wrapper using lucide-react for consistent style.
 */
export default function MailIcon({
  className,
  size = 16,
}: {
  className?: string;
  size?: number;
}) {
  return <Mail size={size} className={className} />;
}