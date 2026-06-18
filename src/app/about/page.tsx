import { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import BackgroundTexture from '@/components/decorations/BackgroundTexture';
import FloatingLeaf from '@/components/decorations/FloatingLeaf';
import LotusFlower from '@/components/decorations/LotusFlower';
import OmSymbol from '@/components/decorations/OmSymbol';
import PageTransition from '@/components/layout/PageTransition';
import Card from '@/components/ui/Card';
import { Leaf, Droplet, Eye, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Our Story & Culinary Heritage since 1992',
  description: 'Discover the heritage of Shankara Vegis Restaurant in Agra. A family-owned pure vegetarian and vegan landmark since 1992, famous for its 360° rooftop views of the Taj Mahal.',
};

const coreValues = [
  {
    title: '100% Veg & Vegan',
    description: 'We adhere to the highest vegetarian and vegan purity standards. All ingredients are locally sourced and completely animal-free.',
    icon: Leaf,
    color: 'text-green-600 bg-green-50 border-green-200/55',
  },
  {
    title: 'Cooked with Mineral Water',
    description: 'Your health is our priority. In our kitchen, every single dish is cooked strictly with packaged mineral water.',
    icon: Droplet,
    color: 'text-blue-600 bg-blue-50 border-blue-200/55',
  },
  {
    title: '360° Taj Mahal View',
    description: 'Dine on our rooftop overlooking the Taj Mahal. Experience Agra\'s sunset and night beauty from the closest viewpoint.',
    icon: Eye,
    color: 'text-teal-600 bg-teal-50 border-teal-200/55',
  },
  {
    title: '30+ Years Family Legacy',
    description: 'Established in 1992, we welcome guests with the timeless spirit of "Atithi Devo Bhava" (The Guest is God).',
    icon: Heart,
    color: 'text-[#B22222] bg-red-50 border-red-200/55',
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

        {/* Decorative background elements */}
        <FloatingLeaf size="lg" rotation={25} opacity={0.2} delay={0.2} duration={8} className="top-24 left-6 text-primary-500" />
        <LotusFlower size="md" rotation={-15} opacity={0.25} delay={1.5} duration={7} className="top-48 right-12" />
        <FloatingLeaf size="md" rotation={-45} opacity={0.15} delay={2} duration={6} className="bottom-24 right-6 text-primary-400" />
        <OmSymbol size={180} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent-saffron/5 opacity-5 animate-pulse-slow" />

        <div className="relative z-10 py-12">
          <Container>
            {/* Page Header */}
            <SectionHeading
              title="About Shankara Vegis"
              subtitle=" Agra's Pure Vegetarian Rooftop Sanctuary Since 1992"
              align="center"
              className="mb-12"
            />

            {/* Split Story Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
              <div className="lg:col-span-6 flex flex-col gap-5">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-950">
                  Our Spiritual Origin & Legacy
                </h3>
                <p className="font-body text-gray-600 leading-relaxed text-sm md:text-base">
                  The name <span className="font-semibold text-accent-maroon">Shankara</span> is a direct reference to Lord Shiva, reflecting our family&apos;s spiritual devotion. For over 30 years, our signage has proudly featured the image of Lord Shiva, Nandi (the bull), the Trishul (trident), and the Om symbol—welcoming guests to an authentic, peaceful sanctuary of pure vegetarian and vegan food in Agra.
                </p>
                <p className="font-body text-gray-600 leading-relaxed text-sm md:text-base">
                  Established in 1992, Shankara Vegis Restaurant is a family-owned institution situated right near the South Gate of the iconic Taj Mahal. We are recommended by **Lonely Planet** and have been awarded the **TripAdvisor Certificate of Excellence 2025**.
                </p>
                <p className="font-body text-gray-600 leading-relaxed text-sm md:text-base">
                  We are deeply committed to hygiene. As noted on our menu, **all food is cooked exclusively using packaged mineral water**, providing complete peace of mind to our international and local visitors alike.
                </p>
              </div>
              <div className="lg:col-span-6 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-card border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
                  alt="Taj Mahal View from Rooftop"
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
                subtitle="The principles that guide our kitchen and service"
                align="center"
                className="mb-10"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {coreValues.map((value, i) => {
                  const IconComponent = value.icon;
                  return (
                    <Card key={i} className="p-6 md:p-8 flex flex-col gap-5 bg-white/60 hover:bg-white transition-all duration-300 border border-primary-100/30 group hover:border-accent-saffron/40 hover:shadow-card-hover">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6" />
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#7B1818] text-white rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-xl mb-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#601212] to-[#7B1818] z-0 opacity-95" />
              {/* Mahadev Trishul Background (Premium blending) */}
              <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none mix-blend-multiply">
                <Image
                  src="/images/mahadev_trishul.png"
                  alt="Mahadev Trishul"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <FloatingLeaf size="lg" rotation={45} opacity={0.12} delay={0.5} duration={9} className="top-10 -left-10 text-primary-200" />
              
              <div className="lg:col-span-7 flex flex-col gap-5 relative z-10">
                <span className="text-accent-saffron font-body font-semibold tracking-widest text-xs uppercase">
                  Agra Landmark
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold">
                  A True 360° Panoramic Sunset Experience
                </h3>
                <p className="font-body text-pink-100/80 text-sm md:text-base leading-relaxed">
                  Watching the sunset paint the white marble of the Taj Mahal in shades of rose and gold is a highlight of any trip to India. At Shankara Vegis, our 360-degree rooftop terrace offers the perfect, unhindered view to accompany your dinner.
                </p>
                <p className="font-body text-pink-100/80 text-sm md:text-base leading-relaxed">
                  Whether you are stopping by for a crispy South Indian dosa after touring the Taj South Gate, or looking to relax during our 6 PM - 7 PM Happy Hour, our rooftop provides a magical Agra heritage experience.
                </p>
              </div>
              <div className="lg:col-span-5 relative h-[250px] md:h-[320px] rounded-xl overflow-hidden border-2 border-white/20 z-10">
                <Image
                  src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600"
                  alt="Taj Mahal View at Sunset"
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
