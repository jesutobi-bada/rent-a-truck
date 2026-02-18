import { motion } from 'framer-motion';
import React from 'react';

import { Icons } from '@rent-a-truck/ui';

export const RenterIllustration = () => {
  return (
    <div className="relative flex size-full items-center justify-center">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full max-w-[320px]"
      >
        {/* Conveyor Paths */}
        <path
          d="M50 300L150 250M150 250L250 300M250 300L350 250"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="text-gray-200"
        />
        <path
          d="M50 200L150 150M150 150L250 200M250 200L350 150"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="text-gray-200"
        />

        {/* Terminals / Nodes */}
        {[
          { x: 150, y: 250, color: 'bg-amber-400' },
          { x: 250, y: 200, color: 'bg-primary' },
          { x: 150, y: 150, color: 'bg-amber-400' },
        ].map((node, i) => (
          <g key={i}>
            <circle
              cx={node.x}
              cy={node.y}
              r="8"
              fill="white"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-200"
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="12"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              fill="currentColor"
              className="text-primary/20"
            />
          </g>
        ))}

        {/* Animated Packages */}
        {[
          { delay: 0, path: 'M50 300L150 250L250 300L350 250' },
          { delay: 1.5, path: 'M50 300L150 250L250 300L350 250' },
          { delay: 0.7, path: 'M50 200L150 150L250 200L350 150' },
        ].map((pkg, i) => (
          <motion.g
            key={i}
            initial={{ offsetDistance: '0%' }}
            animate={{ offsetDistance: '100%' }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: pkg.delay,
              ease: 'linear',
            }}
            style={{
              offsetPath: `path('${pkg.path}')`,
              offsetRotate: '0deg',
            }}
          >
            <rect
              x="-15"
              y="-10"
              width="30"
              height="20"
              rx="4"
              fill="white"
              stroke="currentColor"
              strokeWidth="2"
              className="text-amber-500 shadow-sm"
            />
            <path
              d="M-15 -2L15 -2"
              stroke="currentColor"
              strokeWidth="1"
              className="text-amber-200"
            />
          </motion.g>
        ))}
      </svg>

      {/* Floating Status Card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-4 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl"
      >
        <div className="flex size-8 items-center justify-center rounded-full bg-amber-100">
          <Icons.Package className="size-4 text-amber-600" />
        </div>
        <div className="pr-2">
          <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase">
            Vehicle Status
          </p>
          <p className="text-secondary text-sm font-bold">In Transit</p>
        </div>
      </motion.div>

      {/* Floating Checkmark Card */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/4 left-4 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl"
      >
        <div className="flex size-8 items-center justify-center rounded-full bg-green-100">
          <Icons.CheckmarkCircle className="size-4 text-green-600" />
        </div>
        <div className="pr-2">
          <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Verified</p>
          <p className="text-secondary text-sm font-bold">Goods Insured</p>
        </div>
      </motion.div>
    </div>
  );
};
