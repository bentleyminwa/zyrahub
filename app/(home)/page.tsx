import HeroSection from '@/components/home/hero';
import ServiceLoop from '@/components/home/service-loop';
import Services from '@/components/home/services';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServiceLoop />
      <Services />
    </main>
  );
}
