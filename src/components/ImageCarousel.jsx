import { useState, useEffect } from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&h=800&fit=crop",
    alt: "UNCP campus landscape view",
  },
  {
    url: "https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=800&fit=crop",
    alt: "University campus buildings",
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=800&fit=crop",
    alt: "Students collaborating in computer lab",
  },
  {
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&h=800&fit=crop",
    alt: "Computer science classroom",
  },
  {
    url: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1920&h=800&fit=crop",
    alt: "University campus aerial view",
  },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Images Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Optional overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-900 p-2 rounded-full shadow-lg transition-all z-10"
        aria-label="Previous image"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-900 p-2 rounded-full shadow-lg transition-all z-10"
        aria-label="Next image"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

