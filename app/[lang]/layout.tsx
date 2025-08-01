import '../globals.css';
import type { Metadata } from 'next';
import { Inter, Assistant } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Language } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const assistant = Assistant({ 
  subsets: ['hebrew'],
  display: 'swap',
  preload: true,
  variable: '--font-assistant',
});

export const metadata: Metadata = {
  title: 'NextDeal | CRM for Car Dealerships',
  description: 'Streamline your dealership operations with NextDeal - the ultimate CRM platform for inventory management, lead generation, and customer engagement',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: Language;
  };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const isHebrew = params.lang === 'he';
  const fontClass = isHebrew ? assistant.className : inter.className;
  
  return (
    <div 
      lang={params.lang} 
      dir={isHebrew ? 'rtl' : 'ltr'}
      className={cn(
        'min-h-screen flex flex-col antialiased',
        fontClass,
        isHebrew && 'font-assistant'
      )}
    >
      <Header lang={params.lang} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer lang={params.lang} />
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'he' },
  ];
}