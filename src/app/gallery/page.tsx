import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import BackgroundTexture from '@/components/decorations/BackgroundTexture';
import FloatingLeaf from '@/components/decorations/FloatingLeaf';
import PageTransition from '@/components/layout/PageTransition';

export const metadata: Metadata = {
  title: 'Photo Gallery | Ambiance & Culinary Arts',
  description: 'A visual tour of Shankara Vegis Restaurant Agra. Browse photos of our signature pure vegetarian & vegan dishes, 360° rooftop Taj Mahal views, and cozy dining spaces.',
};

export default function GalleryPage() {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        {/* Full Page Marble Background */}
        <div className="absolute inset-0 z-0">
          <BackgroundTexture variant="marble" className="w-full h-full" />
        </div>

        {/* Decorative background leaves */}
        <FloatingLeaf size="lg" rotation={-15} opacity={0.25} delay={0.5} duration={8} className="top-12 left-6 text-primary-500" />
        <FloatingLeaf size="md" rotation={65} opacity={0.2} delay={2} duration={6} className="bottom-20 right-6 text-primary-400" />

        <div className="relative z-10 py-12">
          <Container>
            {/* Page Header */}
            <SectionHeading
              title="Our Visual Feast"
              subtitle="A Glimpse into Our Premium Ambiance and Culinary Arts"
              align="center"
              className="mb-12"
            />

            {/* Gallery Grid with filter tabs and lightbox navigation */}
            <GalleryGrid />
          </Container>
        </div>
      </div>
    </PageTransition>
  );
}
