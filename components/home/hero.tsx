import { assets } from '@/assets/assets';
import NavAuth from '@/features/auth/components/nav-auth';
import LocationSearch from '@/features/location/components/location-search';
import Image from 'next/image';
import Logo from '../shared/logo';

export default function HeroSection() {
  const { heroImage } = assets;

  return (
    <header className='relative w-full min-h-[60vh]'>
      <Image
        src={heroImage}
        alt={'hero image'}
        fill
        className='absolute object-cover'
      />
      <div className='absolute inset-0 bg-black/80' />

      <div className='absolute top-0 left-0 w-full flex justify-between items-center pt-10 px-14'>
        <Logo />

        <NavAuth />
      </div>

      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-6 justify-center items-center'>
        <h1 className='text-5xl font-bold text-white'>
          Your world. All in one Hub.
        </h1>

        <LocationSearch />
      </div>
    </header>
  );
}
