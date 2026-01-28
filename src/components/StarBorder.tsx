"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface StarBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  color?: string;
  speed?: number;
}

const StarBorder: React.FC<StarBorderProps> = ({
  children,
  color = "#ff6600",
  speed = 0.5,
  className = "",
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const points = svg.querySelectorAll("circle");

    // Animate stars around border
    points.forEach((point, index) => {
      gsap.to(point, {
        opacity: [0, 1, 0],
        duration: 3 * (1 / speed),
        delay: (index * 0.1) / speed,
        repeat: -1,
        ease: "sine.inOut",
      });
    });
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* SVG Star Border */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Top border */}
        {Array.from({ length: 8 }).map((_, i) => (
          <circle
            key={`top-${i}`}
            cx={i * 12.5}
            cy="0"
            r="1.5"
            fill={color}
            opacity="0"
          />
        ))}
        {/* Right border */}
        {Array.from({ length: 8 }).map((_, i) => (
          <circle
            key={`right-${i}`}
            cx="100"
            cy={i * 12.5}
            r="1.5"
            fill={color}
            opacity="0"
          />
        ))}
        {/* Bottom border */}
        {Array.from({ length: 8 }).map((_, i) => (
          <circle
            key={`bottom-${i}`}
            cx={100 - i * 12.5}
            cy="100"
            r="1.5"
            fill={color}
            opacity="0"
          />
        ))}
        {/* Left border */}
        {Array.from({ length: 8 }).map((_, i) => (
          <circle
            key={`left-${i}`}
            cx="0"
            cy={100 - i * 12.5}
            r="1.5"
            fill={color}
            opacity="0"
          />
        ))}
      </svg>

      {/* Border outline */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          border: `2px solid ${color}`,
          opacity: 0.3,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default StarBorder;
