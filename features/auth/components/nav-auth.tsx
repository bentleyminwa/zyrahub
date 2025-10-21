import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

import Link from 'next/link';

export default async function NavAuth() {
  const { isAuthenticated } = await auth();

  return (
    <>
      {isAuthenticated ? (
        <UserButton />
      ) : (
        <div className='flex gap-4'>
          <Button variant={'outline'} asChild>
            <Link href='/sign-in'>Login</Link>
          </Button>

          <Button variant={'default'} asChild>
            <Link href='/sign-up'>Sign Up</Link>
          </Button>
        </div>
      )}
    </>
  );
}
