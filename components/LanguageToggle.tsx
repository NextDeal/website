"use client";

import { Button } from '@/components/ui/button';
import { useRouter, usePathname } from 'next/navigation';
import { Language } from '@/lib/i18n';
import { useCallback } from 'react';

interface LanguageToggleProps {
  currentLang: Language;
}

export function LanguageToggle({ currentLang }: LanguageToggleProps) {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = useCallback(() => {
    const newLang = currentLang === 'en' ? 'he' : 'en';
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
  }, [currentLang, pathname, router]);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="px-2 font-medium"
      suppressHydrationWarning
    >
      {currentLang === 'en' ? 'עברית' : 'English'}
    </Button>
  );
}