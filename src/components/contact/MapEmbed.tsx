import React from 'react';

export default function MapEmbed() {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-card border border-primary-100/30 relative bg-primary-50">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.2198539077977!2d78.04021267527663!3d27.16362544974244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397470d061921f07%3A0x6f91f26a113d0a27!2sShankara%20Vegis%20Restaurant!5e0!3m2!1sen!2sin!4v1718700000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Shankara Vegis Restaurant Location Map"
        className="w-full h-full border-0"
      />
    </div>
  );
}
