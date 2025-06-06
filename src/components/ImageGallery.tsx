
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    title: string;
    description?: string;
  }[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              setOpen(true);
            }}
            className="cursor-pointer overflow-hidden rounded-lg aspect-video bg-gray-100 relative group card-hover"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-end">
              <div className="p-4 w-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="font-medium text-sm truncate">{image.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader className="flex justify-between items-center">
            <DialogTitle className="text-lg">
              {images[selectedIndex]?.title}
            </DialogTitle>
            <button 
              onClick={() => setOpen(false)} 
              className="rounded-full p-1 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </DialogHeader>
          
          <div className="relative flex-grow overflow-hidden">
            <img
              src={images[selectedIndex]?.src}
              alt={images[selectedIndex]?.alt}
              className="w-full h-full object-contain"
            />
            
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 hover:bg-white shadow-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 hover:bg-white shadow-sm"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          {images[selectedIndex]?.description && (
            <DialogDescription className="text-sm pt-2 max-h-24 overflow-y-auto">
              {images[selectedIndex].description}
            </DialogDescription>
          )}
          
          <div className="flex justify-center space-x-1 pt-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setSelectedIndex(i)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  i === selectedIndex ? "bg-report-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImageGallery;
