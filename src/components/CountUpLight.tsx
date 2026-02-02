"use client";

import { useEffect, useRef, useState, useCallback } from 'react';

interface CountUpLightProps {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  separator?: string;
}

export default function CountUpLight({
  to,
  from = 0,
  duration = 2,
  className = '',
  separator = '',
}: CountUpLightProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (value: number) => {
      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: maxDecimals,
        maximumFractionDigits: maxDecimals
      };
      const formatted = Intl.NumberFormat('en-US', options).format(value);
      return separator ? formatted.replace(/,/g, separator) : formatted;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();

          const startTime = performance.now();
          const durationMs = duration * 1000;

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / durationMs, 1);
            
            // Easing function (ease-out)
            const eased = 1 - Math.pow(1 - progress, 3);
            
            const currentValue = from + (to - from) * eased;
            el.textContent = formatValue(currentValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              el.textContent = formatValue(to);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [from, to, duration, formatValue, hasAnimated]);

  return <span className={className} ref={ref}>{formatValue(from)}</span>;
}
