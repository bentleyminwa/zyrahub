import { Hub } from '../types/validate';

interface HubLocationProps {
  hub: Hub;
}

const HubLocation = ({ hub }: HubLocationProps) => {
  return (
    <div className='border border-green-500'>
      <p>{hub.location.address1}</p>
      <p>{hub.location.city}</p>
      <p>{hub.location.state}</p>
    </div>
  );
};

export default HubLocation;
