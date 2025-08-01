"use client";

import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Language } from '@/lib/i18n';

interface HeroProps {
  translations: any;
  lang: Language;
}

const Hero = ({ translations, lang }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-sky-50 via-slate-50 to-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-blue-300 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-cyan-200 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-sky-200 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div 
        ref={heroRef}
        className="container mx-auto px-4 md:px-6 py-12 md:py-24 z-10 opacity-0 transition-opacity duration-1000 ease-out"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-2">
              <span className={lang === 'he' ? 'ml-2' : 'mr-2'}>{translations.badge}</span>
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              <span dangerouslySetInnerHTML={{ __html: translations.title }} />
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-lg">
              {translations.description}
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button size="lg" asChild className="group">
                <Link href={`/${lang}#early-access`}>
                  {translations.cta.primary}
                  <ChevronRight className={`${lang === 'he' ? 'mr-2' : 'ml-2'} h-4 w-4 transition-transform group-hover:translate-x-1`} />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <Link href={`/${lang}#features`}>
                  {translations.cta.secondary}
                </Link>
              </Button>
            </div>
            
            <div className="pt-8">
              <p className="text-sm text-slate-500 mb-3">{translations.trusted}</p>
              <div className="flex flex-wrap gap-8 grayscale opacity-60">
                <div className="h-8 bg-slate-300 w-24 rounded animate-pulse"></div>
                <div className="h-8 bg-slate-300 w-28 rounded animate-pulse"></div>
                <div className="h-8 bg-slate-300 w-20 rounded animate-pulse"></div>
                <div className="h-8 bg-slate-300 w-24 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 opacity-90"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[90%] h-[80%] bg-white rounded-lg overflow-hidden shadow-lg transform rotate-3 transition-all duration-300 hover:rotate-0">
                <div className="h-10 bg-slate-100 border-b flex items-center px-4">
                  <div className="flex space-x-2 items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="h-8 bg-blue-100 w-3/4 mb-4 rounded"></div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="h-16 bg-blue-50 rounded"></div>
                    <div className="h-16 bg-blue-50 rounded"></div>
                    <div className="h-16 bg-blue-50 rounded"></div>
                  </div>
                  <div className="h-24 bg-slate-100 mb-4 rounded"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-20 bg-slate-100 rounded"></div>
                    <div className="h-20 bg-slate-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;