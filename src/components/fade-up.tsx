"use client";

/**
 * Animation « fondu vers le haut » (fade-up) réutilisable avec Framer Motion.
 * Utilisable au chargement (héros) ou à l’entrée dans le viewport (sections).
 */

import { motion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

export type FadeUpProps = {
  children: React.ReactNode;
  className?: string;
  /** Délai en secondes (pour enchaîner plusieurs blocs). */
  delay?: number;
  /** Si vrai, déclenche l’animation quand l’élément entre dans le viewport. */
  inView?: boolean;
} & Omit<HTMLMotionProps<"div">, "children">;

export function FadeUp({
  children,
  className,
  delay = 0,
  inView = false,
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? undefined : { opacity: 1, y: 0 }}
      whileInView={inView ? { opacity: 1, y: 0 } : undefined}
      viewport={inView ? { once: true, amount: 0.2 } : undefined}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
