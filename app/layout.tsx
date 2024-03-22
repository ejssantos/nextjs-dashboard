import '@/app/ui/global.css';
import { inter, rock, roboto } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rock.className} antialiased`}>{children}</body>
    </html>
  );
}
