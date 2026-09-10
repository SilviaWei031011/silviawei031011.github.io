import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Yushan Wei | Language, Narrative & LLM Evaluation',
  description: 'Yushan Wei studies emotional narration, human reader response, and LLM evaluation, and builds open-source tools for literature research.',
  metadataBase: new URL('https://yushan-wei.qrong.chatgpt.site'),
  alternates: { canonical: '/' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
