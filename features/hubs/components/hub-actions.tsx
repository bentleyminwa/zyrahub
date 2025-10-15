import { assets } from '@/assets/assets';
import { Button } from '@/components/ui/button';

type HubAction = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const HubActions = () => {
  const { hubActions } = assets;
  const hubUserActions: HubAction[] = hubActions;

  const actionHandler = (label: string) => {
    switch (label) {
      case 'Write a review':
        // todo
        console.log('review');
        break;
      case 'Save Hub':
        // todo
        console.log('saved');
        break;
    }
  };

  return (
    <div className='flex gap-3'>
      {hubUserActions.map((action, index) => (
        <Button
          key={index}
          onClick={() => actionHandler(action.label)}
          variant={action.label === 'Write a review' ? 'default' : 'outline'}
        >
          {action.icon}
          <span>{action.label}</span>
        </Button>
      ))}
    </div>
  );
};

export default HubActions;
