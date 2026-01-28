import { GALLERY_IMAGES } from '@/lib/constants';

export default function Gallery() {
  // Duplicate images for seamless loop
  const duplicatedImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <div className="w-full overflow-hidden py-10">
      <div className="relative group">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Gallery Container */}
        <div className="flex gap-6 overflow-hidden">
          <div className="flex gap-6 animate-gallery-slide hover:[animation-play-state:paused]">
            {duplicatedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="flex-shrink-0 w-56 h-72 md:w-72 md:h-96 rounded-[2rem] overflow-hidden border-2 border-border/50 hover:border-primary transition-all duration-500 hover:scale-105 hover:-rotate-2 shadow-xl"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
