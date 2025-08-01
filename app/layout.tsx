import './globals.css';
import type { Metadata } from 'next';
import { Inter, Assistant } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const assistant = Assistant({ 
  subsets: ['hebrew'],
  display: 'swap',
  preload: true,
  variable: '--font-assistant',
});

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'NextDeal | CRM for Car Dealerships',
  description: 'Streamline your dealership operations with NextDeal - the ultimate CRM platform for inventory management, lead generation, and customer engagement',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className={`${inter.className} ${assistant.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}