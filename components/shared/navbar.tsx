import Logo from './logo';

import { assets } from '@/assets/assets';
import Link from 'next/link';

import NavAuth from '@/features/auth/components/nav-auth';
import SearchBox from '../ui/searchbox';

export default function Navbar() {
  const { navIcons } = assets;

  return (
    <nav className='flex justify-between items-center px-14 py-5 bg-black/80 backdrop-blur-lg'>
      <Logo />

      <SearchBox />

      <div className='flex items-center gap-4'>
        <ul className='flex items-center gap-4 text-white'>
          {navIcons.map((icon) => (
            <li key={icon.label}>
              <Link href={icon.path}>{icon.node}</Link>
            </li>
          ))}
        </ul>

        <NavAuth />
      </div>
    </nav>
  );
}
