'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Quote, Star } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { testimonialsData } from '@/data/testimonials';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F4F9F0] overflow-hidden">
      <Container>
        <SectionHeading
          title="What Our Guests Say"
          subtitle="Love from around the world"
          align="center"
        />

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 pl-4 pr-4"
                >
                  <Card hoverable={false} className="p-8 md:p-12 relative flex flex-col gap-6 select-none bg-white border border-primary-100/30 shadow-card">
                    {/* Big Decorative Quote Mark */}
                    <Quote className="absolute top-6 right-8 w-16 h-16 text-primary-100/30 pointer-events-none" />

                    {/* Stars */}
                    <div className="flex gap-1 text-accent-saffron">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                      {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gray-200" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="font-body text-gray-700 text-sm md:text-base italic leading-relaxed relative z-10">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Guest details */}
                    <div className="flex flex-col border-t border-gray-100 pt-4">
                      <span className="font-heading text-lg font-bold text-primary-950">
                        {testimonial.name}
                      </span>
                      <span className="font-body text-[11px] text-primary-600 font-bold">
                        {testimonial.location} • {testimonial.date}
                      </span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'bg-primary-600 w-6'
                    : 'bg-primary-300/40 hover:bg-primary-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
