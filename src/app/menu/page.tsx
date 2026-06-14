import { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import MenuTabs from '@/components/menu/MenuTabs';
import BackgroundTexture from '@/components/decorations/BackgroundTexture';
import FloatingLeaf from '@/components/decorations/FloatingLeaf';
import PageTransition from '@/components/layout/PageTransition';

export const metadata: Metadata = {
  title: 'Our Menu | Pure Vegetarian Feast in Agra',
  description: 'Explore the complete menu of Pankhuri Reloaded Agra. Savor authentic tandoori starters, slow-cooked dal makhani, paneer pasanda, special thali, flatbreads, and traditional Indian sweets.',
};

export default function MenuPage() {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        {/* Full Page Marble/Cream Background */}
        <div className="absolute inset-0 z-0">
          <BackgroundTexture variant="marble" className="w-full h-full" />
        </div>

        {/* Peacock Border Frame Background overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none select-none">
          <Image
            src="/images/peacock_border_frame.png"
            alt="Peacock Border Frame"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Decorative background leaves */}
        <FloatingLeaf size="lg" rotation={-30} opacity={0.25} delay={0.5} duration={8} className="top-12 left-6 text-primary-500" />
        <FloatingLeaf size="md" rotation={45} opacity={0.2} delay={2} duration={6} className="bottom-20 right-6 text-primary-400" />
        <FloatingLeaf size="sm" rotation={15} opacity={0.3} delay={4} duration={7} className="top-2/3 left-10 text-primary-300" />

        <div className="relative z-10 py-12">
          <Container>
            {/* Page Header */}
            <SectionHeading
              title="Our Vegetarian Menu"
              subtitle="Authentic Recipes Crafted with Devotion"
              align="center"
              className="mb-12"
            />

            {/* Menu Tabs Selector and List Grid */}
            <MenuTabs />
          </Container>
        </div>
      </div>
    </PageTransition>
  );
}
