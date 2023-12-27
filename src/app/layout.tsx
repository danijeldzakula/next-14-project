import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Main, MyApp } from '@/src/content/Content';
import Navbar from '@/src/components/navbar/Navbar';
import Footer from '@/src/components/footer/Footer';
import ProgressProvider  from './providers';
import { Theme } from '@radix-ui/themes';
import '@/src/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home',
}

type RootProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default function RootLayout({ children, params: { locale } }: RootProps) {
  console.log("🚀 ~ file: layout.tsx:25 ~ RootLayout ~ locale :", locale );

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Theme appearance="dark">
          <MyApp>
            <ProgressProvider>
              <Navbar />
              <Main children={children} />
              <Footer />
            </ProgressProvider>
          </MyApp>
        </Theme>
      </body>
    </html>
  )
}
