import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mbzolfaghari.ir'),
  title: 'محمد باقر ذوالفقاری | Product, Operations & TravelTech',
  description:
    'وبسایت شخصی محمد باقر ذوالفقاری؛ مدیر محصول و عملیات با تجربه در TravelTech، CRM، SaaS و سیستم‌های عملیاتی مقیاس‌پذیر.',
  openGraph: {
    title: 'Mohammad Bagher Zolfaghari | Product & Operations',
    description:
      'Product, operations and TravelTech portfolio focused on scalable systems, CRM, dashboards and execution.',
    url: 'https://mbzolfaghari.ir',
    siteName: 'MBZ Portfolio',
    locale: 'fa_IR',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
