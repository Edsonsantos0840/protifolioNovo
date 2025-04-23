import React, { useEffect, useState } from 'react'

export default function useSlide({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Troca automática de slides
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 4000);
  
      return () => clearInterval(interval);
    }, [images.length]);
  return currentIndex
}
