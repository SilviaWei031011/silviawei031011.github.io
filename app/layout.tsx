import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yushan Wei | Language, People & AI',
  description: 'Yushan Wei is an M.A. student at Shanghai International Studies University working on language model evaluation, human–AI interaction, and computational literary studies. Seeking Fall 2027 PhD and research assistant opportunities.',
  metadataBase: new URL('https://silviawei031011.github.io'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Yushan Wei | Language, People & AI',
    description: 'Research on language model evaluation, human responses to texts, and literature. PhD Fall 2027 and research assistant opportunities.',
    url: 'https://silviawei031011.github.io/',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
