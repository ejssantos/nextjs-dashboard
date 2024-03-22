import { Inter, Rochester, Roboto, Lusitana  } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const rock = Rochester({ subsets: ["latin"], weight: '400' });
export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700']
});