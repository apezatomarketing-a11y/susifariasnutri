import { GALLERY_IMAGES } from '@/lib/constants';

export default function Gallery() {
  // Duplicate images for seamless loop
  const duplicatedImages = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <div className="w-full overflow-hidden bg-card/50 rounded-lg border border-border">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Gallery Container */}
        <div className="flex gap-4 p-4 overflow-hidden">
          <div className="flex gap-4 animate-gallery-slide">
            {duplicatedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden border border-border hover:border-primary transition-colors duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
