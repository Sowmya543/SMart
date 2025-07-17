
import React from 'react';
import { motion } from 'framer-motion';

const ScrollFadeIn = ({
  children,
  direction = 'up',
  duration = 0.6,
  delay = 0.1,
}) => {
  let x = 0, y = 0;
  if (direction === 'left') x = -100;
  if (direction === 'right') x = 100;
  if (direction === 'up') y = 100;
  if (direction === 'down') y = -100;

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
