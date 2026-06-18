import PageTransition from '@/components/layout/PageTransition';
import HeroSection from '@/components/home/HeroSection';
import SpecialtiesSection from '@/components/home/SpecialtiesSection';
import AboutPreview from '@/components/home/AboutPreview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <SpecialtiesSection />
      <AboutPreview />
      <TestimonialsSection />
      <GalleryPreview />
      <CTASection />
    </PageTransition>
  );
}
