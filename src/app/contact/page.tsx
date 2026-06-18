import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
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

export const metadata: Metadata = {
  title: 'Contact & Table Booking | Premium Dining near Taj Mahal',
  description: 'Book your table online or send a query to Pankhuri Reloaded in Agra. Savor pure vegetarian delicacies on Fatehabad Road near the Taj Mahal. Open daily from 11AM to 11PM.',
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
        <FloatingLeaf size="lg" rotation={10} opacity={0.25} delay={0.5} duration={8} className="top-12 left-6 text-primary-500" />
        <FloatingLeaf size="md" rotation={-45} opacity={0.2} delay={2} duration={6} className="bottom-20 right-6 text-primary-400" />

        <div className="relative z-10 py-12">
          <Container>
            {/* Page Header */}
            <SectionHeading
              title="Contact & Reservations"
              subtitle="We would love to host you"
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
                      {restaurantInfo.address.city}, {restaurantInfo.address.state} - {restaurantInfo.address.pincode}
                    </p>
                  </div>
                </Card>

                {/* Call Card */}
                <Card hoverable={false} className="p-5 flex gap-4 items-start bg-white/70 backdrop-blur-sm border border-primary-100/20">
                  <div className="p-3 bg-primary-50 rounded-xl text-primary-600 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-primary-950 mb-1">Phone & WhatsApp</h4>
                    <p className="font-body text-xs md:text-sm text-gray-500 leading-relaxed">
                      Reservation: <a href={`tel:${restaurantInfo.phone}`} className="hover:text-accent-orange font-semibold text-primary-800 transition-colors">{restaurantInfo.phone}</a>
                      <br />
                      WhatsApp: <a href={`https://wa.me/${restaurantInfo.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange font-semibold text-primary-800 transition-colors">{restaurantInfo.phone}</a>
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
                      Monday - Sunday: 11:00 AM - 11:00 PM
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
