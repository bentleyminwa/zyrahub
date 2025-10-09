import { assets } from '@/assets/assets';
import Link from 'next/link';

export default function Services() {
  return (
    <section className='w-[70%] mx-auto my-14'>
      <h2 className='text-center text-2xl font-bold'>Featured Services</h2>
      <ul className='mt-10 grid grid-cols-4 gap-8'>
        {assets.services.map((service) => (
          <li key={service.title}>
            <Link
              href={`/hubs?category=${service.slug}`}
              className='flex flex-col justify-center items-center gap-5 border border-primary/10 rounded-sm py-12 cursor-pointer hover:shadow hover:shadow-primary/20 font-semibold transition duration-200 ease-in-out'
            >
              <span className='text-primary-foreground'>{service.node}</span>
              <span>{service.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
