import { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import MenuTabs from '@/components/menu/MenuTabs';
import BackgroundTexture from '@/components/decorations/BackgroundTexture';
import FloatingLeaf from '@/components/decorations/FloatingLeaf';
import LotusFlower from '@/components/decorations/LotusFlower';
import OmSymbol from '@/components/decorations/OmSymbol';
import PageTransition from '@/components/layout/PageTransition';

export const metadata: Metadata = {
  title: 'Our Menu | Pure Vegetarian & Vegan Feast in Agra',
  description: 'Explore the menu of Shankara Vegis Restaurant. Savor authentic rice, snacks, international specialties, salads, pancakes, and traditional Indian sweets cooked strictly with mineral water.',
};

export default function MenuPage() {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        {/* Full Page Marble/Cream Background */}
        <div className="absolute inset-0 z-0">
          <BackgroundTexture variant="marble" className="w-full h-full" />
        </div>

        {/* Mahadev Om Background Watermark */}
        <div className="absolute inset-0 z-0 opacity-[0.035] pointer-events-none select-none mix-blend-overlay">
          <Image
            src="/images/mahadev_om.jpg"
            alt="Mahadev Om Stone Carving Background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Decorative background leaves and symbols */}
        <FloatingLeaf size="lg" rotation={-30} opacity={0.2} delay={0.5} duration={8} className="top-12 left-6 text-primary-500" />
        <LotusFlower size="md" rotation={15} opacity={0.25} delay={2} duration={7} className="top-1/3 right-10" />
        <FloatingLeaf size="sm" rotation={15} opacity={0.25} delay={4} duration={7} className="top-2/3 left-10 text-primary-300" />
        <OmSymbol size={220} className="absolute top-1/4 right-6 text-accent-saffron/10 opacity-10 animate-pulse-slow" />
        <OmSymbol size={220} className="absolute bottom-1/4 left-6 text-accent-saffron/10 opacity-10 animate-pulse-slow" />

        <div className="relative z-10 py-12">
          <Container>
            {/* Page Header */}
            <SectionHeading
              title="Our Vegetarian & Vegan Menu"
              subtitle="Authentic Recipes Crafted with Devotion"
              align="center"
              className="mb-4"
            />

            {/* Mineral Water Banner */}
            <div className="max-w-md mx-auto mb-10 bg-blue-50/90 backdrop-blur-sm border border-blue-200/55 rounded-full py-2.5 px-6 text-center shadow-sm flex items-center justify-center gap-2">
              <span className="text-xs md:text-sm font-extrabold text-blue-800 tracking-wider uppercase flex items-center gap-1.5 font-body">
                🍃 All Food Cooked with Mineral Water 💧
              </span>
            </div>

            {/* Menu Tabs Selector and List Grid */}
            <MenuTabs />
          </Container>
        </div>
      </div>
    </PageTransition>
  );
}
