import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FullpageWrapper = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef([]);
  const isAnimating = useRef(false);
  const numSections = React.Children.count(children);

  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      y: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const transition = {
    duration: 0.6,
    ease: 'easeOut',
  };

  const navigateTo = (index) => {
    if (isAnimating.current || index < 0 || index >= numSections) return;

    isAnimating.current = true;
    setActiveIndex(index);
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = (event) => {
      if (isAnimating.current) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      navigateTo(activeIndex + direction);
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [activeIndex, numSections]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isAnimating.current) return;

      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        navigateTo(activeIndex + 1);
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        navigateTo(activeIndex - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, numSections]);

  // Smooth scroll to active section
  useEffect(() => {
    if (sectionsRef.current[activeIndex]) {
      sectionsRef.current[activeIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    const timer = setTimeout(() => {
      isAnimating.current = false;
    }, transition.duration * 1000); // Reset animation flag after transition

    return () => clearTimeout(timer);
  }, [activeIndex, transition.duration]);

  return (
    <div className="relative overflow-hidden h-screen bg-gray-900">
      <AnimatePresence initial={false} custom={activeIndex}>
        {React.Children.map(children, (child, index) =>
          index === activeIndex ? (
            <motion.div
              key={index}
              custom={index}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className="absolute top-0 left-0 w-full min-h-screen flex items-center justify-center"
              ref={(el) => (sectionsRef.current[index] = el)}
            >
              {child}
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Visual indicator */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-2 z-50">
        {React.Children.map(children, (_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => navigateTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FullpageWrapper;