import { motion } from 'framer-motion';
import React from 'react';

export const DriverIllustration = () => {
  return (
    <div className="relative flex size-full items-center justify-center bg-orange-50/30">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full max-w-[320px]"
      >
        {/* Dashboard Circle */}
        <circle
          cx="200"
          cy="200"
          r="120"
          stroke="currentColor"
          strokeWidth="2"
          className="text-orange-200"
        />
        <circle
          cx="200"
          cy="200"
          r="100"
          stroke="currentColor"
          strokeWidth="20"
          strokeDasharray="10 5"
          className="text-orange-100/50"
        />

        {/* Gauge Needle */}
        <motion.g
          animate={{ rotate: [20, 160, 100, 140, 20] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ originX: '200px', originY: '200px' }}
        >
          <line
            x1="200"
            y1="200"
            x2="200"
            y2="110"
            stroke="#eb5e28"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="200" cy="200" r="10" fill="#eb5e28" />
        </motion.g>

        {/* Mini Map */}
        <rect
          x="230"
          y="230"
          width="80"
          height="60"
          rx="8"
          fill="white"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-100 shadow-sm"
        />
        <path
          d="M240 250Q260 270 280 250T300 270"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-orange-200"
        />
        <motion.circle
          animate={{ x: [0, 60], y: [0, 20] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          cx="240"
          cy="250"
          r="3"
          fill="#eb5e28"
        />
      </svg>

      {/* Floating Earnings Badge */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="bg-primary absolute top-1/2 left-1/4 -translate-y-1/2 rounded-3xl p-4 text-white shadow-2xl"
      >
        <p className="text-[10px] font-black tracking-widest uppercase opacity-60">
          Today&apos;s Earnings
        </p>
        <p className="text-2xl font-black">₦45,200</p>
      </motion.div>

      {/* New Load Notification blip */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
        transition={{ duration: 0.5, delay: 2, repeat: Infinity, repeatDelay: 5 }}
        className="bg-secondary border-secondary-foreground/10 absolute top-1/3 right-1/4 flex items-center gap-2 rounded-2xl border p-3 shadow-xl"
      >
        <div className="bg-primary size-3 animate-ping rounded-full" />
        <p className="text-secondary-foreground text-[10px] font-bold">New Load Available</p>
      </motion.div>

      {/* Metrics Row */}
      <div className="absolute right-10 bottom-10 left-10 flex justify-between">
        {[
          { label: 'Rating', val: '4.9★' },
          { label: 'Trips', val: '24' },
          { label: 'Hours', val: '6.5h' },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-[9px] font-black tracking-tight text-gray-400 uppercase">
              {stat.label}
            </p>
            <p className="text-secondary text-sm font-bold">{stat.val}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
