'use client';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover';
import { LogOutIcon } from 'lucide-react';
import { useState } from 'react';

export default function NavAuth() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? (
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage
                src='https://github.com/shadcn.png'
                className='w-10 h-10 rounded-full'
              />
              <AvatarFallback className='p-3 rounded-full bg-background'>
                CN
              </AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent
            sideOffset={4}
            className='w-fit bg-background p-3 rounded-md shadow-md space-y-3'
          >
            <p className='font-semibold text-sm'>Account</p>
            <Button variant={'destructive'} onClick={() => setLoggedIn(false)}>
              <LogOutIcon />
              <span>Logout</span>
            </Button>
          </PopoverContent>
        </Popover>
      ) : (
        <div className='flex gap-4'>
          <Button variant={'outline'} onClick={() => setLoggedIn(true)}>
            Login
          </Button>
          <Button variant={'default'}>Sign Up</Button>
        </div>
      )}
    </>
  );
}
