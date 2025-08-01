"use client";

import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Language } from '@/lib/i18n';

interface HowItWorksProps {
  translations: any;
  lang: Language;
}

const HowItWorks = ({ translations, lang }: HowItWorksProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const steps = translations.steps.map((step: any, index: number) => ({
    ...step,
    color: ['bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500'][index]
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  return (
    <section 
      id="how-it-works" 
      className="py-20 bg-gradient-to-b from-white to-slate-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 opacity-0 transition-opacity duration-1000 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {translations.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {translations.description}
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-slate-200 z-0 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                ref={el => stepsRef.current[index] = el}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } md:items-center opacity-0 transition-all duration-1000 delay-${index * 200}`}
              >
                {/* Content */}
                <div className="md:w-1/2 p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${step.color} text-white font-bold mb-4 shadow-lg`}>
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-600 mb-4">{step.description}</p>
                </div>
                
                {/* Timeline node for desktop */}
                <div className="hidden md:flex items-center justify-center md:w-24 relative z-10">
                  <div className={`w-8 h-8 rounded-full border-4 border-white ${step.color} shadow-md`}></div>
                </div>
                
                {/* Image/Illustration */}
                <div className="md:w-1/2 p-6">
                  <div className={`h-48 rounded-xl flex items-center justify-center ${
                    index % 2 === 0 ? 'bg-blue-50' : 'bg-indigo-50'
                  } shadow-sm transition-transform hover:scale-105`}>
                    <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                      <div className={`w-8 h-8 ${step.color} rounded-full flex items-center justify-center`}>
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block p-1 rounded-lg bg-blue-100">
            <p className="text-blue-700 font-medium px-4 py-2">
              {translations.cta}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;