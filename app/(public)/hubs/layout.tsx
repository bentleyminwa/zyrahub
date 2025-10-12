import HubServices from '@/features/hubs/components/hub-services';

export default function HubsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <HubServices />
      {children}
    </main>
  );
}
