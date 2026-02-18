import { motion } from 'framer-motion';
import React from 'react';

export const OwnerIllustration = () => {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full max-w-[320px]"
      >
        {/* Network Connections */}
        <g opacity="0.2" className="text-secondary">
          <line
            x1="100"
            y1="100"
            x2="300"
            y2="100"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="100"
            y1="100"
            x2="200"
            y2="250"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="300"
            y1="100"
            x2="200"
            y2="250"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="200"
            y1="250"
            x2="250"
            y2="350"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </g>

        {/* Pulsing Nodes (Trucks) */}
        {[
          { x: 100, y: 100 },
          { x: 300, y: 100 },
          { x: 200, y: 250 },
          { x: 250, y: 350 },
        ].map((node, i) => (
          <g key={i}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="20"
              animate={{ r: [20, 25, 20], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
              fill="currentColor"
              className="text-primary"
            />
            <circle cx={node.x} cy={node.y} r="6" fill="#eb5e28" />
          </g>
        ))}

        {/* Floating Data Blips */}
        {[
          { from: { x: 100, y: 100 }, to: { x: 200, y: 250 }, delay: 0 },
          { from: { x: 300, y: 100 }, to: { x: 200, y: 250 }, delay: 1 },
        ].map((blip, i) => (
          <motion.circle
            key={i}
            r="3"
            fill="#eb5e28"
            animate={{
              cx: [blip.from.x, blip.to.x],
              cy: [blip.from.y, blip.to.y],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: blip.delay }}
          />
        ))}

        {/* Small Analytics Grid */}
        <g transform="translate(40, 280)">
          {[0, 1, 2, 3].map((bar, i) => (
            <motion.rect
              key={i}
              x={i * 15}
              y={40}
              width="10"
              animate={{ height: [10, 30 + i * 10, 10], y: [40, 20 - i * 10, 40] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
              rx="5"
              fill="currentColor"
              className="text-secondary/20"
            />
          ))}
        </g>
      </svg>

      {/* Floating Utilization Badge */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute right-10 bottom-1/4 rounded-3xl border border-gray-100 bg-white p-4 shadow-2xl"
      >
        <p className="text-secondary text-[14px] font-black">Fleet Utilization</p>
        <div className="mt-2 flex items-center gap-2">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '88%' }}
              transition={{ duration: 2, delay: 0.5 }}
              className="h-full bg-green-500"
            />
          </div>
          <span className="text-xs font-bold text-green-600">88%</span>
        </div>
      </motion.div>
    </div>
  );
};
