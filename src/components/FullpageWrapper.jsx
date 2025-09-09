import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FullpageWrapper = ({ children, activeIndex, onSectionChange }) => {
  const [direction, setDirection] = useState(1);
  const [directionType, setDirectionType] = useState('vertical');
  const sectionsRef = useRef([]);
  const isAnimating = useRef(false);
  const numSections = React.Children.count(children);

  // Variants pour les animations selon le type de direction
  const currentVariants = {
    enter: (direction) => ({
      [directionType === 'vertical' ? 'y' : 'x']: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      y: 0,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      [directionType === 'vertical' ? 'y' : 'x']: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const transition = {
    duration: 0.6,
    ease: 'easeInOut',
  };

  const goToSection = (index, newDirection = direction, newDirectionType = directionType) => {
    if (index >= 0 && index < React.Children.count(children) && !isAnimating.current) {
      isAnimating.current = true; // Start animation lock
      setDirection(newDirection);
      setDirectionType(newDirectionType);
      onSectionChange(index); // Use onSectionChange to update activeIndex in App.jsx
    }
  };

  useEffect(() => {
    // This useEffect is now primarily for external changes to activeIndex
    // and to ensure onSectionChange is called when activeIndex changes internally
    // (e.g., from scroll/keyboard events).
    // However, since activeIndex is now a prop, onSectionChange will be called
    // when the prop changes from the parent.
  }, [activeIndex, onSectionChange]);

  // Handle scroll events
  useEffect(() => {
    const handleWheel = (e) => {
      if (isAnimating.current) return;

      const newDirection = e.deltaY > 0 ? 1 : -1;
      const nextIndex = activeIndex + newDirection;
      goToSection(nextIndex, newDirection, 'vertical');
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeIndex, children, goToSection]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isAnimating.current) return;

      let nextIndex = activeIndex;
      let newDirection = 1;
      let newDirectionType = 'vertical';

      if (e.key === 'ArrowDown') {
        nextIndex = activeIndex + 1;
        newDirection = 1;
        newDirectionType = 'vertical';
      } else if (e.key === 'ArrowUp') {
        nextIndex = activeIndex - 1;
        newDirection = -1;
        newDirectionType = 'vertical';
      } else if (e.key === 'ArrowRight') {
        nextIndex = activeIndex + 1;
        newDirection = 1;
        newDirectionType = 'horizontal';
      } else if (e.key === 'ArrowLeft') {
        nextIndex = activeIndex - 1;
        newDirection = -1;
        newDirectionType = 'horizontal';
      }

      if (nextIndex !== activeIndex) {
        goToSection(nextIndex, newDirection, newDirectionType);
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
      <AnimatePresence initial={false} custom={direction}>
        {React.Children.map(children, (child, index) =>
          index === activeIndex ? (
            <motion.div
              key={index}
              custom={direction}
              variants={currentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              onAnimationComplete={() => (isAnimating.current = false)} // Release lock when animation completes
              className="absolute top-0 left-0 w-full h-full"
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
