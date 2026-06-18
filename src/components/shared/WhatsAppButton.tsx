'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { restaurantInfo } from '@/data/restaurant-info';

export default function WhatsAppButton() {
  // Clean phone number for URL
  const number = restaurantInfo.whatsapp.replace(/[^0-9]/g, '');
  const message = encodeURIComponent('Namaste! I would like to reserve a table at Shankara Vegis Restaurant.');
  const url = `https://wa.me/${number}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 group flex items-center">
      {/* Slide-out tooltip label */}
      <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3.5 py-2 bg-white text-primary-950 text-xs font-bold font-body rounded-full shadow-lg border border-primary-100/50 whitespace-nowrap opacity-0 scale-90 -translate-x-4 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
        Book on WhatsApp
      </span>

      {/* Pulsing ring animations */}
      <motion.span
        animate={{
          scale: [1, 1.4, 1.6, 1.3, 1],
          opacity: [0.4, 0.25, 0, 0.1, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.2,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 rounded-full bg-green-500 -z-10 shadow-lg"
      />
      <motion.span
        animate={{
          scale: [1, 1.25, 1.4, 1.1, 1],
          opacity: [0.5, 0.3, 0, 0.2, 0.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.2,
          ease: 'easeInOut',
          delay: 0.6,
        }}
        className="absolute inset-0 rounded-full bg-[#128C7E] -z-10 shadow-md"
      />

      {/* Main Action Button */}
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 15 }}
        className="bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white p-3.5 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center border-2 border-white/95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 pointer-events-auto"
        title="Book Table via WhatsApp"
        aria-label="Book Table via WhatsApp"
      >
        <svg
          className="w-6 h-6 fill-current drop-shadow-sm"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.859-4.42 9.863-9.864.002-2.637-1.023-5.116-2.887-6.982C16.58 1.892 14.1 .865 11.468.865 6.035.865 1.613 5.286 1.609 10.73c-.001 1.701.446 3.362 1.3 4.8l-.993 3.626 3.731-.978zM18.006 14.88c-.33-.165-1.953-.964-2.253-1.074-.3-.109-.519-.165-.738.165-.219.33-.847 1.074-1.039 1.293-.191.218-.383.245-.713.08-1.748-.872-3.053-1.547-4.25-3.593-.317-.547.317-.508.908-1.693.099-.197.05-.371-.025-.519-.075-.149-.738-1.782-1.01-2.439-.266-.638-.535-.55-.738-.56-.19-.01-.41-.01-.629-.01-.218 0-.573.082-.873.41-.3.33-1.147 1.12-1.147 2.73s1.173 3.167 1.337 3.385c.164.218 2.302 3.515 5.576 4.927.779.336 1.386.537 1.86.688.784.248 1.498.213 2.062.129.629-.094 1.953-.798 2.226-1.53.272-.731.272-1.359.19-1.488-.08-.129-.3-.219-.629-.384z" />
        </svg>
      </motion.a>
    </div>
  );
}
