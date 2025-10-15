import { CompassIcon, LinkIcon, MailIcon, PhoneCallIcon } from 'lucide-react';
import Link from 'next/link';
import { Hub } from '../types/validate';

interface HubContactProps {
  hub: Hub;
}

const HubContact = ({ hub }: HubContactProps) => {
  const { contact_info } = hub;

  const displayIcon = (type: string) => {
    switch (type) {
      case 'direction':
        return <CompassIcon />;
      case 'phone':
        return <PhoneCallIcon />;
      case 'email':
        return <MailIcon />;
      case 'website':
        return <LinkIcon />;
      default:
        return null;
    }
  };

  return (
    <ul className='mt-5 border border-primary/10 w-full flex justify-between items-center p-3'>
      {contact_info.map((info) => (
        <li key={info.type} className='flex items-center gap-2'>
          {displayIcon(info.type)}
          {info.type === 'phone' ? (
            <span>{info.label}</span>
          ) : (
            <Link href={info.address}>{info.label}</Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default HubContact;
