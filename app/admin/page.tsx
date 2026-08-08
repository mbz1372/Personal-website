import AdminStudio from './studio';

export const metadata = {
  title: 'MBZ Control Room',
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminStudio />;
}
