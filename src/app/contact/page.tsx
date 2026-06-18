import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Compass } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant-info';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/contact/ContactForm';
import ReservationForm from '@/components/contact/ReservationForm';
import MapEmbed from '@/components/contact/MapEmbed';
import BackgroundTexture from '@/components/decorations/BackgroundTexture';
import FloatingLeaf from '@/components/decorations/FloatingLeaf';
import PageTransition from '@/components/layout/PageTransition';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Contact & Table Booking | Rooftop Dining near Taj Mahal South Gate',
  description: 'Book your table online at Shankara Vegis Restaurant in Agra. Enjoy pure vegetarian & vegan recipes with a 360° rooftop Taj view. Phone: +91 99176 39035.',
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        {/* Full Page Marble Background */}
        <div className="absolute inset-0 z-0">
          <BackgroundTexture variant="marble" className="w-full h-full" />
        </div>

        {/* Decorative background leaves */}
        <FloatingLeaf size="lg" rotation={10} opacity={0.2} delay={0.5} duration={8} className="top-12 left-6 text-primary-500" />
        <FloatingLeaf size="md" rotation={-45} opacity={0.15} delay={2} duration={6} className="bottom-20 right-6 text-primary-400" />

        <div className="relative z-10 py-12">
          <Container>
            {/* Page Header */}
            <SectionHeading
              title="Contact & Reservations"
              subtitle="We would love to host you on our rooftop"
              align="center"
              className="mb-12"
            />

            {/* Top Section: Info Cards + Map */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              {/* Info Cards */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                {/* Address Card */}
                <Card hoverable={false} className="p-5 flex gap-4 items-start bg-white/70 backdrop-blur-sm border border-primary-100/20">
                  <div className="p-3 bg-primary-50 rounded-xl text-primary-600 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-primary-950 mb-1">Our Location</h4>
                    <p className="font-body text-xs md:text-sm text-gray-500 leading-relaxed">
                      {restaurantInfo.address.street},<br />
                      Near Taj Mahal South Gate, {restaurantInfo.address.city}, {restaurantInfo.address.state} - {restaurantInfo.address.pincode}
                      <br />
                      <span className="text-accent-saffron font-bold text-[11px] mt-1 block">Plus Code: {restaurantInfo.address.plusCode}</span>
                    </p>
                  </div>
                </Card>

                {/* Call Card with Prominent Button */}
                <Card hoverable={false} className="p-5 flex flex-col gap-4 bg-white/70 backdrop-blur-sm border border-primary-100/20">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-primary-50 rounded-xl text-primary-600 flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-primary-950 mb-1">Phone & WhatsApp</h4>
                      <p className="font-body text-xs md:text-sm text-gray-500 leading-relaxed">
                        WhatsApp or Call for instant table bookings and rooftop availability.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-1">
                    <a href={`tel:${restaurantInfo.phone.replace(/[^0-9+]/g, '')}`} className="flex-1">
                      <Button className="w-full text-xs py-2 bg-[#7B1818] hover:bg-[#B22222] border-0 text-white font-bold shadow-md">
                        📞 Call: {restaurantInfo.phoneDisplay}
                      </Button>
                    </a>
                    <a
                      href={`https://wa.me/${restaurantInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full text-xs py-2 bg-green-600 hover:bg-green-700 border-0 text-white font-bold shadow-md">
                        💬 WhatsApp Us
                      </Button>
                    </a>
                  </div>
                </Card>

                {/* Walking Guide Card */}
                <Card hoverable={false} className="p-5 flex gap-4 items-start bg-amber-50/50 backdrop-blur-sm border border-accent-saffron/20 rounded-2xl">
                  <div className="p-3 bg-amber-100 rounded-xl text-accent-saffron flex-shrink-0">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-primary-950 mb-1">Walking Guide from Taj</h4>
                    <p className="font-body text-xs md:text-sm text-gray-600 leading-relaxed">
                      We are situated just **0.5 km (a 5-minute walk)** from the **Taj Mahal South Gate**. Walk down Chowk Kagziyan in Tajganj, and you will spot our large Lord Shiva signage. Access the stairs to reach the rooftop view deck.
                    </p>
                  </div>
                </Card>

                {/* Email Card */}
                <Card hoverable={false} className="p-5 flex gap-4 items-start bg-white/70 backdrop-blur-sm border border-primary-100/20">
                  <div className="p-3 bg-primary-50 rounded-xl text-primary-600 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-primary-950 mb-1">Email Inquiry</h4>
                    <p className="font-body text-xs md:text-sm text-gray-500 leading-relaxed">
                      General: <a href={`mailto:${restaurantInfo.email}`} className="hover:text-accent-orange font-semibold text-primary-800 transition-colors">{restaurantInfo.email}</a>
                    </p>
                  </div>
                </Card>

                {/* Hours Card */}
                <Card hoverable={false} className="p-5 flex gap-4 items-start bg-white/70 backdrop-blur-sm border border-primary-100/20">
                  <div className="p-3 bg-primary-50 rounded-xl text-primary-600 flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-primary-950 mb-1">Opening Hours</h4>
                    <p className="font-body text-xs md:text-sm text-gray-500 leading-relaxed">
                      Open Daily: 8:00 AM - 10:30 PM (including Happy Hour 6:00 PM - 7:00 PM)
                    </p>
                  </div>
                </Card>
              </div>

              {/* Map Embed */}
              <div className="lg:col-span-7">
                <MapEmbed />
              </div>
            </div>

            {/* Bottom Section: Split Forms */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Table Booking Form */}
              <div id="reserve">
                <ReservationForm />
              </div>

              {/* Contact Message Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </PageTransition>
  );
}
