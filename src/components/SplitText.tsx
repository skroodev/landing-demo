import React, { useRef, useEffect, useState, useMemo } from 'react';

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars';
  from?: Record<string, unknown>;
  to?: Record<string, unknown>;
  threshold?: number;
  rootMargin?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textAlign?: React.CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  tag = 'p',
  textAlign = 'center',
  onLetterAnimationComplete
}) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [gsapLoaded, setGsapLoaded] = useState(false);
  const animationCompletedRef = useRef(false);

  // Observer pour détecter la visibilité
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px', threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Charger GSAP dynamiquement quand visible
  useEffect(() => {
    if (!isVisible || gsapLoaded || animationCompletedRef.current) return;

    const loadAndAnimate = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const { SplitText: GSAPSplitText } = await import('gsap/SplitText');
      
      gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

      const el = ref.current;
      if (!el) return;

      // Attendre que les fonts soient chargées
      await document.fonts.ready;

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      const sign =
        marginValue === 0
          ? ''
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      let targets: Element[] = [];
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const splitInstance: any = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        autoSplit: splitType === 'lines',
        linesClass: 'split-line',
        wordsClass: 'split-word',
        charsClass: 'split-char',
        reduceWhiteSpace: false,
        onSplit: (self: { chars?: Element[]; words?: Element[]; lines?: Element[] }) => {
          if (splitType.includes('chars') && self.chars?.length) targets = self.chars;
          else if (splitType.includes('words') && self.words?.length) targets = self.words;
          else if (splitType.includes('lines') && self.lines?.length) targets = self.lines;
          else targets = self.chars || self.words || self.lines || [];

          gsap.fromTo(
            targets,
            { ...from },
            {
              ...to,
              duration,
              ease,
              stagger: delay / 1000,
              scrollTrigger: {
                trigger: el,
                start,
                once: true,
                fastScrollEnd: true
              },
              onComplete: () => {
                animationCompletedRef.current = true;
                onLetterAnimationComplete?.();
              },
              willChange: 'transform, opacity',
              force3D: true
            }
          );
        }
      });

      setGsapLoaded(true);
    };

    loadAndAnimate();
  }, [isVisible, gsapLoaded, text, delay, duration, ease, splitType, from, to, threshold, rootMargin, onLetterAnimationComplete]);

  const style = useMemo<React.CSSProperties>(() => ({
    textAlign,
    wordWrap: 'break-word',
    opacity: gsapLoaded ? 1 : 0,
    visibility: gsapLoaded ? 'visible' : 'hidden'
  }), [textAlign, gsapLoaded]);

  const classes = `split-parent overflow-hidden inline-block whitespace-normal ${className}`;

  const Tag = tag;
  
  return (
    <Tag ref={ref as React.RefObject<HTMLParagraphElement>} style={style} className={classes}>
      {text}
    </Tag>
  );
};

export default SplitText;
