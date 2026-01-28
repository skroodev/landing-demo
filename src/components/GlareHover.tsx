"use client";

import React, { useRef, useState } from "react";

interface GlareHoverProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
}

const GlareHover: React.FC<GlareHoverProps> = ({
  children,
  className = "",
  glareColor = "#ffffff",
  glareOpacity = 0.3,
  glareAngle = -30,
  glareSize = 300,
  transitionDuration = 800,
  playOnce = false,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isHovering) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setGlarePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (!playOnce) {
      setIsHovering(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-visible ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...props.style,
      }}
      {...props}
    >
      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Glare effect - simple radial gradient */}
      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(
              ellipse ${glareSize}px ${glareSize * 0.6}px at ${glarePosition.x}% ${glarePosition.y}%,
              rgba(255, 255, 255, ${glareOpacity}),
              rgba(255, 255, 255, 0) 70%
            )`,
            mixBlendMode: "lighten",
            opacity: 1,
            transition: `opacity ${transitionDuration}ms ease-out`,
          }}
        />
      )}
    </div>
  );
};

export default GlareHover;
