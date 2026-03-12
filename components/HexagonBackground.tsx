import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function HexagonBackground() {
  const { theme } = useTheme();
  const hexColor = theme === 'dark' ? '#0f8200' : '#000000';

  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-30 z-0"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <pattern id="hexGrid" width="50" height="43.3" patternUnits="userSpaceOnUse">
          <polygon
            points="25,5 37.5,12.5 37.5,30.8 25,38.3 12.5,30.8 12.5,12.5"
            fill="none"
            stroke={hexColor}
            strokeWidth="0.5"
            filter="url(#glow)"
          />
          <line x1="25" y1="5" x2="37.5" y2="12.5" stroke={hexColor} strokeWidth="0.5" filter="url(#glow)"/>
          <line x1="37.5" y1="12.5" x2="37.5" y2="30.8" stroke={hexColor} strokeWidth="0.5" filter="url(#glow)"/>
          <line x1="37.5" y1="30.8" x2="25" y2="38.3" stroke={hexColor} strokeWidth="0.5" filter="url(#glow)"/>
          <line x1="25" y1="38.3" x2="12.5" y2="30.8" stroke={hexColor} strokeWidth="0.5" filter="url(#glow)"/>
          <line x1="12.5" y1="30.8" x2="12.5" y2="12.5" stroke={hexColor} strokeWidth="0.5" filter="url(#glow)"/>
          <line x1="12.5" y1="12.5" x2="25" y2="5" stroke={hexColor} strokeWidth="0.5" filter="url(#glow)"/>
        </pattern>
      </defs>
      <motion.rect
        width="100%"
        height="100%"
        fill="url(#hexGrid)"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </svg>
  );
}
