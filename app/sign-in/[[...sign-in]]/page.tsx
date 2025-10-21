import Loader from '@/components/shared/loader';
import { SignIn } from '@clerk/nextjs';

export default function SigninPage() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <SignIn
        fallback={
          <div className='flex justify-center items-center h-screen'>
            <Loader />
          </div>
        }
      />
    </div>
  );
}
