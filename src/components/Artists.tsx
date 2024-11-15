import React, { useEffect, useRef, useState } from 'react';
import { artistsData } from '../data/artists';

const Artists = () => {
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    // Function to auto-scroll
    const autoScroll = () => {
      if (scrollContainer) {
        const containerWidth = scrollContainer.offsetWidth;
        const scrollAmount = containerWidth / 5; // Scroll by one artist's width
        scrollContainer.scrollBy({
          left: scrollAmount, // Scroll by one item
          behavior: 'smooth',
        });
      }
    };

    // Set an interval for auto-scrolling
    const scrollInterval = setInterval(autoScroll, 3000); // Adjust interval for smoothness (e.g., scroll every 3 seconds)

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  return (
    <section id="artists" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Artists</h2>
        <div
          ref={scrollContainerRef}
          className="flex space-x-8 overflow-x-auto cursor-grab"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Limit to 5 visible items at a time */}
          {artistsData.slice(scrollPosition, scrollPosition + 5).map((artist, index) => (
            <div
              key={index}
              className="group relative w-64" // Fixed width for each artist item
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
                  <p className="text-purple-400">{artist.genre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;
