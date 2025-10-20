import { Button } from '@/components/ui/button';
import { auth, currentUser } from '@clerk/nextjs/server';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover';
import { LogOutIcon } from 'lucide-react';
import Link from 'next/link';

export default async function NavAuth() {
  const { isAuthenticated } = await auth();

  const user = await currentUser();

  const getNameInitials = (first: string, last: string) => {
    return `${first.charAt(0).toUpperCase()}${last.charAt(0).toUpperCase()}`;
  };

  return (
    <>
      {isAuthenticated ? (
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage
                src={user?.imageUrl}
                className='w-10 h-10 rounded-full'
              />
              <AvatarFallback className='p-3 rounded-full bg-background'>
                <span className='text-sm font-semibold'>
                  {getNameInitials(user?.firstName || '', user?.lastName || '')}
                </span>
              </AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent
            sideOffset={4}
            className='w-fit bg-background p-3 rounded-md shadow-md space-y-3'
          >
            <p className='font-semibold text-sm'>Account</p>
            <Button variant={'destructive'}>
              <LogOutIcon />
              <span>Logout</span>
            </Button>
          </PopoverContent>
        </Popover>
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
