import { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import BackgroundTexture from '@/components/decorations/BackgroundTexture';
import FloatingLeaf from '@/components/decorations/FloatingLeaf';
import PageTransition from '@/components/layout/PageTransition';
import Card from '@/components/ui/Card';
import { Leaf, Utensils, Handshake, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Our Culinary Story & Heritage',
  description: 'Learn about Pankhuri Reloaded, a premium pure vegetarian restaurant in Agra. Discover our commitment to culinary heritage, fresh ingredients, and Indian hospitality.',
};

const coreValues = [
  {
    title: '100% Pure Vegetarian',
    description: 'We adhere to the highest standards of vegetarian purity, using completely segregated culinary tools and sourcing pure local ingredients.',
    icon: Leaf,
    color: 'text-green-600 bg-green-50 border-green-200/55',
  },
  {
    title: 'Authentic Indian Taste',
    description: 'Our recipes are passed down through generations, utilizing traditional slow-cooking methods to preserve deep spice profiles.',
    icon: Utensils,
    color: 'text-orange-600 bg-orange-50 border-orange-200/55',
  },
  {
    title: 'Warm Hospitality',
    description: 'Inspired by the Sanskrit proverb "Atithi Devo Bhava" (The Guest is God), we welcome every patron with warmth and attentiveness.',
    icon: Handshake,
    color: 'text-amber-600 bg-amber-50 border-amber-200/55',
  },
  {
    title: 'Culinary Sophistication',
    description: 'We merge Agra\'s traditional Mughal-influenced vegetarian items with premium contemporary presentation and ambiance.',
    icon: Sparkles,
    color: 'text-yellow-600 bg-yellow-50 border-yellow-200/55',
  },
];

export default function AboutPage() {
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
        <FloatingLeaf size="lg" rotation={25} opacity={0.25} delay={0.2} duration={8} className="top-24 left-6 text-primary-500" />
        <FloatingLeaf size="md" rotation={-45} opacity={0.2} delay={1.5} duration={6} className="bottom-24 right-6 text-primary-400" />
        <FloatingLeaf size="sm" rotation={60} opacity={0.35} delay={3.5} duration={5} className="top-1/2 right-12 text-primary-300" />

        <div className="relative z-10 py-12">
          <Container>
            {/* Page Header */}
            <SectionHeading
              title="About Pankhuri Reloaded"
              subtitle="The Story of Agra's Finest Pure Vegetarian Sanctuary"
              align="center"
              className="mb-12"
            />

            {/* Split Story Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
              <div className="lg:col-span-6 flex flex-col gap-5">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-950">
                  Where Tradition Meets Taste
                </h3>
                <p className="font-body text-gray-600 leading-relaxed text-sm md:text-base">
                  Established with a vision to redefine pure vegetarian dining, <span className="font-semibold text-primary-900">Pankhuri Reloaded</span> has grown into a culinary landmark in Agra, India. Located on the bustling Fatehabad Road, just minutes away from the iconic Taj Mahal, we serve as a peaceful retreat for both locals and travelers seeking authentic vegetarian delicacies.
                </p>
                <p className="font-body text-gray-600 leading-relaxed text-sm md:text-base">
                  &quot;Reloaded&quot; represents our evolution—marrying age-old secret recipes with a luxurious, contemporary fine-dining ambiance. Our kitchen remains strictly vegetarian, celebrating the rich variety of grains, pulses, fresh cottage cheese, and seasonal vegetables of the subcontinent.
                </p>
              </div>
              <div className="lg:col-span-6 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-card border-4 border-white">
                <Image
                  src="/images/interior_arches.jpg"
                  alt="Restaurant Dining Area"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Core Values Section */}
            <div className="mb-20">
              <SectionHeading
                title="Our Core Values"
                subtitle="The principles that guide our kitchen"
                align="center"
                className="mb-10"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {coreValues.map((value, i) => {
                  const IconComponent = value.icon;
                  return (
                    <Card key={i} className="p-6 md:p-8 flex flex-col gap-5 bg-white/60 hover:bg-white transition-all duration-300 border border-primary-100/30 group hover:border-primary-300 hover:shadow-card-hover">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 animate-pulse-slow" />
                      </div>
                      <h4 className="font-heading text-lg font-bold text-primary-950">
                        {value.title}
                      </h4>
                      <p className="font-body text-xs md:text-sm text-gray-500 leading-relaxed">
                        {value.description}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Connection to Agra / Heritage Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-primary-900 text-white rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-xl mb-10">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-950 to-primary-900 z-0 opacity-95" />
              {/* Peacock Feather Background (Premium blending) */}
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay">
                <Image
                  src="/images/peacock_feather_left.jpg"
                  alt="Peacock Feather"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <FloatingLeaf size="lg" rotation={45} opacity={0.12} delay={0.5} duration={9} className="top-10 -left-10 text-primary-200" />
              
              <div className="lg:col-span-7 flex flex-col gap-5 relative z-10">
                <span className="text-accent-saffron font-body font-semibold tracking-widest text-xs uppercase">
                  Agra Connection
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold">
                  Savoring Near the Wonder of the World
                </h3>
                <p className="font-body text-primary-200 text-sm md:text-base leading-relaxed">
                  Agra is famous worldwide for the Taj Mahal, representing love and timeless beauty. At Pankhuri Reloaded, we pay homage to this heritage by crafting culinary creations that reflect the same level of care, patience, and visual artistry.
                </p>
                <p className="font-body text-primary-200 text-sm md:text-base leading-relaxed">
                  We invite travelers from across the globe to complete their Agra experience by tasting the true, rich spices and flavors of classic Indian cooking in a safe, hygienic, and premium setting.
                </p>
              </div>
              <div className="lg:col-span-5 relative h-[250px] md:h-[320px] rounded-xl overflow-hidden border-2 border-white/20 z-10">
                <Image
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=600"
                  alt="Taj Mahal View"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </PageTransition>
  );
}
