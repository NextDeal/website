import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import FAQ from '@/components/home/FAQ';
import EarlyAccess from '@/components/home/EarlyAccess';
import { getTranslations } from '@/lib/i18n';

export default function Home() {
  const t = getTranslations('he');
  
  return (
    <div className="flex flex-col">
      <Hero translations={t.hero} lang="he" />
      <Features translations={t.features} lang="he" />
      <HowItWorks translations={t.howItWorks} lang="he" />
      <FAQ translations={t.faq} lang="he" />
      <EarlyAccess translations={t.earlyAccess} lang="he" />
    </div>
  );
}