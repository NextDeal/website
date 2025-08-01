"use client";

import React, { useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Language } from '@/lib/i18n';

interface FAQProps {
  translations: any;
  lang: Language;
}

const FAQ = ({ translations, lang }: FAQProps) => {
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (faqRef.current) {
      observer.observe(faqRef.current);
    }
    
    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="faq" 
      className="py-20 bg-white"
      ref={faqRef}
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

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {translations.items.map((faq: any, index: number) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-slate-100 transition-colors">
                  <span className="text-left font-medium text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600">
            {translations.contact.text}
          </p>
          <div className="mt-4">
            <a 
              href="mailto:info@nextdeal.com" 
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              {translations.contact.cta}
              <svg className={`${lang === 'he' ? 'mr-2' : 'ml-2'} h-4 w-4`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;