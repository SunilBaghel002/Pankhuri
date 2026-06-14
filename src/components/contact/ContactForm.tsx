'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-hot-toast';
import { Send, Loader2 } from 'lucide-react';
import Button from '../ui/Button';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(4, { message: 'Subject must be at least 4 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate sending message data
    console.log('Sending contact data:', data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast.success('Your message has been sent successfully! We will get back to you shortly.');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4.5 bg-white p-6 md:p-8 rounded-2xl border border-primary-100/30 shadow-card">
      <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-950 mb-1">
        Send a Message
      </h3>
      
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-body text-[10px] font-bold text-primary-900 uppercase tracking-wider">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none font-body text-sm text-gray-800 bg-[#FAFAFA]"
          placeholder="Rahul Sharma"
        />
        {errors.name && (
          <span className="text-red-500 text-[11px] font-semibold">{errors.name.message}</span>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-body text-[10px] font-bold text-primary-900 uppercase tracking-wider">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none font-body text-sm text-gray-800 bg-[#FAFAFA]"
          placeholder="rahul@example.com"
        />
        {errors.email && (
          <span className="text-red-500 text-[11px] font-semibold">{errors.email.message}</span>
        )}
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1">
        <label htmlFor="subject" className="font-body text-[10px] font-bold text-primary-900 uppercase tracking-wider">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          {...register('subject')}
          className="px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none font-body text-sm text-gray-800 bg-[#FAFAFA]"
          placeholder="Feedback, Catering inquiry..."
        />
        {errors.subject && (
          <span className="text-red-500 text-[11px] font-semibold">{errors.subject.message}</span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="font-body text-[10px] font-bold text-primary-900 uppercase tracking-wider">
          Your Message
        </label>
        <textarea
          id="message"
          rows={3}
          {...register('message')}
          className="px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 focus:outline-none font-body text-sm text-gray-800 bg-[#FAFAFA] resize-none"
          placeholder="Hi! I wanted to check..."
        />
        {errors.message && (
          <span className="text-red-500 text-[11px] font-semibold">{errors.message.message}</span>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 mt-1.5"
        iconLeft={isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
