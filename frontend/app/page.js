'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'; // Assuming these exist
import { Button } from '@/components/ui/button';
import { Play, ArrowRight, Check, Plus } from 'lucide-react';

import CtaButton from '@/components/CtaButton';
import MethodologySection from '@/components/MethodologySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import VideoTestimonialsSection from '@/components/VideoTestimonialsSection';
import PhilosophySection from '@/components/PhilosophySection';
import NewsletterSection from '@/components/NewsletterSection';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import InfoproductosSection from '@/components/InfoproductosSection';
import CommunitySection from '@/components/CommunitySection';
import ContactSection from '@/components/ContactSection';
import FreeResourcesSection from '@/components/FreeResourcesSection';
import BlogSection from '@/components/BlogSection';

export default function Home() {
  // Existing data for logos (mapped from original page.js)
  const organizations = [
    { name: 'Images 1', src: '/wp-content/uploads/2025/04/images.png' },
    { name: 'Images 2', src: '/wp-content/uploads/2025/04/images-1.png' },
    { name: 'Images 3', src: '/wp-content/uploads/2025/04/images-3.png' },
    { name: 'Images 4', src: '/wp-content/uploads/2025/04/images-2.jpg' },
    { name: 'Images 5', src: '/wp-content/uploads/2025/04/img-88-300x300.jpg' }, // ASONACOP
    { name: 'Images 6', src: '/wp-content/uploads/2025/04/orglogo.jpg' }, // Maniapure
    { name: 'Images 7', src: '/wp-content/uploads/2025/04/images-2-300x162.png' }, // Manos
    { name: 'Images 8', src: '/wp-content/uploads/2025/04/logo_tierra_viva_full_definicion-1-300x300.jpg' }, // Tierra Viva
    { name: 'Images 9', src: '/wp-content/uploads/2025/04/images-4.png' } // FUNDACRECER
  ];



  return (
    <main className="min-h-screen bg-white overflow-x-hidden font-sans">

      {/* Sec1: Hero Section */}
      <HeroSection />

      {/* C2: Stats Section */}
      <StatsSection />

      {/* Sec1 (Part 2): Video and Philosophy */}
      <PhilosophySection />

      {/* Organizations Carousel */}
      <section className="bg-white py-[60px] md:py-[80px] overflow-hidden">
        <h2 className="text-center text-[36px] md:text-[52px] font-bold text-keicy-navy mb-[40px] md:mb-[60px] px-4">
          Organizaciones y empresas con las que he colaborado
        </h2>

        <div className="relative flex overflow-hidden py-10">
          <motion.div
            className="flex gap-12 md:gap-24 items-center whitespace-nowrap"
            animate={{
              x: [0, -1035], // Approximate half width for seamless loop
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {/* Double the list for infinite effect */}
            {[...organizations, ...organizations].map((org, i) => (
              <div
                key={i}
                className="shrink-0 h-[80px] md:h-[100px] w-[140px] md:w-[180px] flex items-center justify-center transition-all bg-white"
              >
                <img
                  src={org.src}
                  alt={org.name}
                  className="max-h-full max-w-full object-contain filter-none"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section >

      {/* Methodology Section */}
      < MethodologySection />

      {/* Testimonials */}
      < TestimonialsSection />

      {/* Video Testimonials */}
      < VideoTestimonialsSection />

      {/* Newsletter */}
      <NewsletterSection />

      {/* Infoproducts */}
      <InfoproductosSection />

      {/* Community CTA */}
      <CommunitySection />

      {/* Contact Form Section */}
      <ContactSection />

      {/* Free Resources Section */}
      <FreeResourcesSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Footer Content (Frame 37/23) - Implemented here if needed, or rely on layout */}
      {/* Footer code is typically in layout.tsx */}

    </main >
  );
}
