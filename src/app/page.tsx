import PageTransition from '@/components/layout/PageTransition';
import HeroSection from '@/components/home/HeroSection';
import SpecialtiesSection from '@/components/home/SpecialtiesSection';
import RooftopExperience from '@/components/home/RooftopExperience';
import AboutPreview from '@/components/home/AboutPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <SpecialtiesSection />
      <RooftopExperience />
      <AboutPreview />
      <WhyChooseUs />
      <TestimonialsSection />
      <GalleryPreview />
      <CTASection />
    </PageTransition>
  );
}
