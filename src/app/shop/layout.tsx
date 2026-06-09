import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop Premium Smartphones | DR MOBILES',
  description: 'Browse our collection of premium Apple and Android smartphones, accessories, and electronics.',
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
