import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  const { logo } = assets;

  return (
    <Link href='/' className='flex items-center'>
      <Image src={logo} alt='logo' className='w-8 h-8' />
      <h1 className='text-4xl font-bold text-primary-foreground'>Hub.</h1>
    </Link>
  );
}
