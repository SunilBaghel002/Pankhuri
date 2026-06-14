'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-hot-toast';
import { Calendar, Loader2 } from 'lucide-react';
import Button from '../ui/Button';

const reservationSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().regex(/^[0-9]\d{9,11}$/, { message: 'Please enter a valid contact number (10-12 digits).' }),
  guests: z.string().min(1, { message: 'Please select guest count.' }),
  date: z.string().min(1, { message: 'Please select a date.' }),
  time: z.string().min(1, { message: 'Please select a time.' }),
  notes: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

const timeSlots = [
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'
];

export default function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      guests: '2',
    }
  });

  const onSubmit = async (data: ReservationFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast.success(`Table reserved successfully for ${data.guests} guests on ${data.date} at ${data.time}!`);
    reset();
  };

  // Get today's date in YYYY-MM-DD for min date field value
  const todayDateString = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 bg-white p-6 md:p-8 rounded-2xl border border-primary-100/30 shadow-card">
      <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-950 mb-1">
        Reserve a Table
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="res-name" className="font-body text-[10px] font-bold text-primary-900 uppercase tracking-wider">
            Your Name
          </label>
          <input
            id="res-name"
            type="text"
            {...register('name')}
            className="px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none font-body text-sm text-gray-800 bg-[#FAFAFA]"
            placeholder="Priya Sharma"
          />
          {errors.name && (
            <span className="text-red-500 text-[11px] font-semibold">{errors.name.message}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="res-email" className="font-body text-[10px] font-bold text-primary-900 uppercase tracking-wider">
            Email Address
          </label>
          <input
            id="res-email"
            type="email"
            {...register('email')}
            className="px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none font-body text-sm text-gray-800 bg-[#FAFAFA]"
            placeholder="priya@example.com"
          />
          {errors.email && (
            <span className="text-red-500 text-[11px] font-semibold">{errors.email.message}</span>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label htmlFor="res-phone" className="font-body text-[10px] font-bold text-primary-900 uppercase tracking-wider">
            Contact Number
          </label>
          <input
            id="res-phone"
            type="tel"
            {...register('phone')}
            className="px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none font-body text-sm text-gray-800 bg-[#FAFAFA]"
            placeholder="9876543210"
          />
          {errors.phone && (
            <span className="text-red-500 text-[11px] font-semibold">{errors.phone.message}</span>
          )}
        </div>

        {/* Guests Count */}
        <div className="flex flex-col gap-1">
          <label htmlFor="res-guests" className="font-body text-[10px] font-bold text-primary-900 uppercase tracking-wider">
            Number of Guests
          </label>
          <select
            id="res-guests"
            {...register('guests')}
            className="px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none font-body text-sm text-gray-800 bg-[#FAFAFA]"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
          {errors.guests && (
            <span className="text-red-500 text-[11px] font-semibold">{errors.guests.message}</span>
          )}
        </div>

        {/* Date */}
        <div className="flex flex-col gap-1">
          <label htmlFor="res-date" className="font-body text-[10px] font-bold text-primary-900 uppercase tracking-wider">
            Dining Date
          </label>
          <input
            id="res-date"
            type="date"
            min={todayDateString}
            {...register('date')}
            className="px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none font-body text-sm text-gray-800 bg-[#FAFAFA]"
          />
          {errors.date && (
            <span className="text-red-500 text-[11px] font-semibold">{errors.date.message}</span>
          )}
        </div>

        {/* Time Slots */}
        <div className="flex flex-col gap-1">
          <label htmlFor="res-time" className="font-body text-[10px] font-bold text-primary-900 uppercase tracking-wider">
            Preferred Time
          </label>
          <select
            id="res-time"
            {...register('time')}
            className="px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none font-body text-sm text-gray-800 bg-[#FAFAFA]"
          >
            <option value="">Select Time Slot</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {errors.time && (
            <span className="text-red-500 text-[11px] font-semibold">{errors.time.message}</span>
          )}
        </div>
      </div>

      {/* Special Requests */}
      <div className="flex flex-col gap-1">
        <label htmlFor="res-notes" className="font-body text-[10px] font-bold text-primary-900 uppercase tracking-wider">
          Special Requests / Occasion
        </label>
        <textarea
          id="res-notes"
          rows={2}
          {...register('notes')}
          className="px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none font-body text-sm text-gray-800 bg-[#FAFAFA] resize-none"
          placeholder="E.g. anniversary celebration, window table, high-chair needed..."
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="accent"
        size="md"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 mt-1.5 bg-accent-orange text-white hover:bg-orange-600 rounded-full border border-transparent"
        iconLeft={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Calendar className="w-4 h-4" />}
      >
        {isSubmitting ? 'Reserving...' : 'Book a Table'}
      </Button>
    </form>
  );
}
