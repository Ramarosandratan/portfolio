import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FullpageWrapper = ({ children, onSectionChange }) => {
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

  const goToSection = (index) => {
    if (index >= 0 && index < React.Children.count(children) && !isAnimating.current) {
      isAnimating.current = true; // Start animation lock
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (onSectionChange) {
      onSectionChange(activeIndex);
    }
  }, [activeIndex, onSectionChange]);

  // Handle scroll events
  useEffect(() => {
    const handleWheel = (e) => {
      if (isAnimating.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = activeIndex + direction;
      goToSection(nextIndex);
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeIndex, children, goToSection]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isAnimating.current) return;

      let nextIndex = activeIndex;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        nextIndex = activeIndex + 1;
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        nextIndex = activeIndex - 1;
      }

      if (nextIndex !== activeIndex) {
        goToSection(nextIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, children, goToSection]);

  // Smooth scroll to active section
  // Effect to scroll to the active section
  useEffect(() => {
    if (sectionsRef.current[activeIndex]) {
      // No need for scrollIntoView if using Framer Motion for full-page transitions
      // The motion.div handles the visual positioning.
      // We just need to ensure isAnimating is reset after the transition.
      const timer = setTimeout(() => {
        isAnimating.current = false; // Release animation lock after transition duration
      }, transition.duration * 1000); // Convert seconds to milliseconds
      return () => clearTimeout(timer);
    }
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
              onAnimationComplete={() => (isAnimating.current = false)} // Release lock when animation completes
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            >
              {React.cloneElement(child, { goToSection })}
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
            onClick={() => goToSection(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FullpageWrapper;