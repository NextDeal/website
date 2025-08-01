import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import FAQ from '@/components/home/FAQ';
import EarlyAccess from '@/components/home/EarlyAccess';
import { Language, getTranslations } from '@/lib/i18n';

interface HomePageProps {
  params: {
    lang: Language;
  };
}

export default function Home({ params }: HomePageProps) {
  const t = getTranslations(params.lang);
  
  return (
    <div className="flex flex-col">
      <Hero translations={t.hero} lang={params.lang} />
      <Features translations={t.features} lang={params.lang} />
      <HowItWorks translations={t.howItWorks} lang={params.lang} />
      <FAQ translations={t.faq} lang={params.lang} />
      <EarlyAccess translations={t.earlyAccess} lang={params.lang} />
    </div>
  );
}