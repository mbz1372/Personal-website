import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mohammad Bagher Zolfaghari — Product, Operations & Systems',
  description: 'Product and operations leader focused on TravelTech, CRM, marketplaces and scalable operating systems.',
  metadataBase: new URL('https://mbzolfaghari.ir'),
  openGraph: { title:'Mohammad Bagher Zolfaghari', description:'I build products that make complex operations simple.', url:'https://mbzolfaghari.ir', siteName:'MBZ Portfolio', images:['/profile.jpg'], type:'website' }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" suppressHydrationWarning><body>{children}</body></html>
}