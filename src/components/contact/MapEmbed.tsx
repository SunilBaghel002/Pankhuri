import React from 'react';

export default function MapEmbed() {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-card border border-primary-100/30 relative bg-primary-50">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.497554904797!2d78.04419997631317!3d27.15925577649537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974720970a256df%3A0xe2126fa2a1f28b7e!2sFatehabad%20Rd%2C%20Agra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718300000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Pankhuri Reloaded Restaurant Location Map"
        className="w-full h-full border-0"
      />
    </div>
  );
}
