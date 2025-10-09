'use client';

import { assets } from '@/assets/assets';
import { useRouter, useSearchParams } from 'next/navigation';

export default function HubServices() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const params = new URLSearchParams(searchParams.toString());
  const currentCategory = params.get('category');

  const { services } = assets;

  return (
    <section className='flex justify-center gap-4 text-sm mt-5'>
      {services.map((service) => (
        <div
          key={service.slug}
          onClick={() => router.push(`/hubs?category=${service.slug}`)}
          className={`border border-primary/10 rounded-sm p-2 cursor-pointer ${
            service.slug === currentCategory
              ? 'text-white bg-primary-foreground'
              : ''
          }`}
        >
          {service.title}
        </div>
      ))}
    </section>
  );
}
