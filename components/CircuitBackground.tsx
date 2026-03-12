import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function CircuitBackground() {
  const { theme } = useTheme();
  const lineColor = theme === 'dark' ? '#0f8200' : '#333333';
  const nodeColor = theme === 'dark' ? '#0f8200' : '#666666';

  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20 z-0"
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {/* Horizontal lines */}
      <motion.line
        x1="100" y1="150" x2="400" y2="150"
        stroke={lineColor}
        strokeWidth="2"
        filter="url(#glow)"
        strokeDasharray="10 10"
        animate={{ strokeDashoffset: [0, 20] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <motion.line
        x1="500" y1="250" x2="700" y2="250"
        stroke={lineColor}
        strokeWidth="2"
        filter="url(#glow)"
        strokeDasharray="10 10"
        animate={{ strokeDashoffset: [0, 20] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
      />
      <motion.line
        x1="200" y1="350" x2="600" y2="350"
        stroke={lineColor}
        strokeWidth="2"
        filter="url(#glow)"
        strokeDasharray="10 10"
        animate={{ strokeDashoffset: [0, 20] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2 }}
      />
      {/* Vertical lines */}
      <motion.line
        x1="300" y1="100" x2="300" y2="200"
        stroke={lineColor}
        strokeWidth="2"
        filter="url(#glow)"
        strokeDasharray="10 10"
        animate={{ strokeDashoffset: [0, 20] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
      />
      <motion.line
        x1="500" y1="200" x2="500" y2="300"
        stroke={lineColor}
        strokeWidth="2"
        filter="url(#glow)"
        strokeDasharray="10 10"
        animate={{ strokeDashoffset: [0, 20] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
      />
      {/* Diagonal lines */}
      <motion.line
        x1="400" y1="150" x2="500" y2="250"
        stroke={lineColor}
        strokeWidth="2"
        filter="url(#glow)"
        strokeDasharray="10 10"
        animate={{ strokeDashoffset: [0, 20] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.8 }}
      />
      <motion.line
        x1="100" y1="350" x2="200" y2="450"
        stroke={lineColor}
        strokeWidth="2"
        filter="url(#glow)"
        strokeDasharray="10 10"
        animate={{ strokeDashoffset: [0, 20] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2.2 }}
      />
      {/* Nodes */}
      <motion.circle
        cx="300" cy="150" r="4"
        fill={nodeColor}
        filter="url(#glow)"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="500" cy="250" r="4"
        fill={nodeColor}
        filter="url(#glow)"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      <motion.circle
        cx="400" cy="350" r="4"
        fill={nodeColor}
        filter="url(#glow)"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
      <motion.circle
        cx="200" cy="350" r="4"
        fill={nodeColor}
        filter="url(#glow)"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
      />
    </svg>
  );
}
