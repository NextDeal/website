'use client';

import React from 'react';
import Link from 'next/link';
import { CarFront, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Language, getTranslations } from '@/lib/i18n';

interface FooterProps {
  lang?: Language;
}

const Footer = ({ lang = 'he' }: FooterProps) => {
  const t = getTranslations(lang);
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href={`/${lang}`} className="flex items-center space-x-2 mb-4">
              <CarFront className="h-8 w-8" />
              <span className="font-bold text-2xl">NextDeal</span>
            </Link>
            <p className="text-slate-300 mb-6">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.company.title}</h3>
            <ul className="space-y-3">
              {t.footer.company.links.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-slate-300 hover:text-white transition-colors">{link}</Link>
              </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.resources.title}</h3>
            <ul className="space-y-3">
              {t.footer.resources.links.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-slate-300 hover:text-white transition-colors">{link}</Link>
              </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.contact.title}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="flex-shrink-0 mt-1 text-slate-300" />
                <span className="text-slate-300">info@nextdeal.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="flex-shrink-0 mt-1 text-slate-300" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1 text-slate-300" />
                <span className="text-slate-300">1234 Auto Row Dr, San Francisco, CA 94103</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NextDeal. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {t.footer.legal.map((item, index) => (
              <Link key={index} href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                {item}
            </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;