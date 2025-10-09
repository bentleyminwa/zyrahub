import { assets } from '@/assets/assets';
import LogoLoop from '@/components/LogoLoop';

export default function ServiceLoop() {
  const { services } = assets;

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <LogoLoop
        logos={services}
        speed={10}
        direction='left'
        logoHeight={60}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor='#E6E6EA'
        ariaLabel='Technology partners'
        className='bg-secondary text-black/50'
      />
    </section>
  );
}
