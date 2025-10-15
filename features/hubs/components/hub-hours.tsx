import { Hub } from '../types/validate';

interface HubHoursProps {
  hub: Hub;
}

const HubHours = ({ hub }: HubHoursProps) => {
  const displayDay = (index: number) => {
    switch (index) {
      case 0:
        return 'Monday';
      case 1:
        return 'Tuesday';
      case 2:
        return 'Wednesday';
      case 3:
        return 'Thursday';
      case 4:
        return 'Friday';
      case 5:
        return 'Saturday';
      case 6:
        return 'Sunday';
      default:
        return '';
    }
  };

  return (
    <div>
      {hub.hours.map((hour, index) => (
        <div key={index} className='space-y-2 text-sm font-semibold'>
          {hour.open.map((time, index) => (
            <div key={index} className='flex justify-between items-center'>
              <span>{displayDay(time.day)}</span>
              <span>
                {time.start} - {time.end}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HubHours;
