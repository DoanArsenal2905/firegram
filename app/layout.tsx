import { Lato } from 'next/font/google';

import './globals.scss';

const lato = Lato({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Firegram',
  description:
    'Where to store your memorable photos and discover beautiful photos all over the world.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={lato.className}>{children}</body>
    </html>
  );
}
