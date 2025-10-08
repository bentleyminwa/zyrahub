import { Button } from '../ui/button';

export default function Navbar() {
  return (
    <nav>
      <h1>Z Hub</h1>
      <input type='text' placeholder='search' />
      <div>
        <Button variant={'outline'}>Login</Button>
        <Button variant={'default'}>Sign Up</Button>
      </div>
    </nav>
  );
}
