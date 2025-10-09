import { assets } from '@/assets/assets';
import LogoLoop from '@/components/LogoLoop';

export default function ServiceLoop() {
  const { serviceLogos } = assets;

  return (
    <section
      style={{ height: '200px', position: 'relative', overflow: 'hidden' }}
    >
      <LogoLoop
        logos={serviceLogos}
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
