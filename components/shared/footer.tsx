import { assets } from '@/assets/assets';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  const {
    footer: { companyInfo, aboutInfo, contactInfo },
  } = assets;

  return (
    <footer className='bg-secondary p-14 text-gray-600'>
      <section className='grid grid-cols-3 gap-10'>
        <div>
          <h2 className='text-2xl text-primary-foreground font-semibold mb-5'>
            {companyInfo.title}
          </h2>
          <p className='text-sm font-semibold'>{companyInfo.description}</p>
        </div>

        <div>
          <h2 className='font-semibold mb-5'>{aboutInfo.title}</h2>
          <ul className='text-sm space-y-3'>
            {aboutInfo.links.map((link) => (
              <li key={link.title}>
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className='font-semibold mb-5'>{contactInfo.title}</h2>
          <ul className='text-sm space-y-3'>
            {contactInfo.links.map((link) => (
              <li key={link.title}>
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className='bg-black/10 w-full h-[1px] my-5' />

      <small>
        Copyright &copy; {year}. Zyra{' '}
        <span className='text-primary-foreground'>Hub.</span>
      </small>
    </footer>
  );
}
