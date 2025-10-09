import Footer from '@/components/shared/footer';
import Navbar from '@/components/shared/navbar';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className='min-h-[61vh]'>{children}</main>
      <Footer />
    </>
  );
}
