"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CarFront, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LanguageToggle } from '@/components/LanguageToggle';
import { Language, getTranslations } from '@/lib/i18n';

interface HeaderProps {
  lang: Language;
}

const Header = ({ lang }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = getTranslations(lang);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        {
          'bg-white/95 backdrop-blur-md shadow-sm': isScrolled,
          'bg-transparent': !isScrolled
        }
      )}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <CarFront className="h-8 w-8 text-primary" />
            <span className="font-bold text-2xl text-primary">NextDeal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href={`/${lang}#features`}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              {t.nav.features}
            </Link>
            <Link 
              href={`/${lang}#how-it-works`}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              {t.nav.howItWorks}
            </Link>
            <Link 
              href={`/${lang}#faq`}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              {t.nav.faq}
            </Link>
            <LanguageToggle currentLang={lang} />
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link href={`/${lang}#early-access`}>{t.nav.getEarlyAccess}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4 flex flex-col space-y-4">
          <Link 
            href={`/${lang}#features`}
            className="text-base font-medium text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.nav.features}
          </Link>
          <Link 
            href={`/${lang}#how-it-works`}
            className="text-base font-medium text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.nav.howItWorks}
          </Link>
          <Link 
            href={`/${lang}#faq`}
            className="text-base font-medium text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.nav.faq}
          </Link>
          <LanguageToggle currentLang={lang} />
          <Button asChild className="w-full">
            <Link 
              href={`/${lang}#early-access`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.getEarlyAccess}
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;