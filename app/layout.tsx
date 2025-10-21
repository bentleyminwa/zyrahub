import LoadScreen from '@/components/shared/load-screen';
import { LocationProvider } from '@/features/location/context/location-context';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';

export const quicksand = Quicksand({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Zyra Hub',
  description: 'Your world in one place.',
  metadataBase: process.env.BASE_URL as URL | undefined,
  openGraph: {
    title: 'Zyra Hub',
    description: 'Your world in one place.',
    type: 'website',
    locale: 'af_KE',
    url: process.env.BASE_URL as string,
    siteName: 'Zyra Hub',
    images: [
      {
        url: `${process.env.BASE_URL}/og.png`,
        width: 800,
        height: 600,
        alt: 'Zyra Hub',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        cssLayerName: 'clerk',
      }}
    >
      <html lang='en'>
        <body className={`${quicksand.className} } antialiase bg-background`}>
          <LocationProvider>
            {/* display fallback before rendering children */}
            <LoadScreen>{children}</LoadScreen>
          </LocationProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
