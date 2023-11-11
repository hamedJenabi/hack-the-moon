import cultureIcon from '@/icons/culture.svg';
import activeIcon from '@/icons/active.svg';
import kidFriendlyIcon from '@/icons/kidFriendly.svg';
import relaxIcon from '@/icons/relax.svg';
import culinaryIcon from '@/icons/relax.svg';
import carIcon from '@/icons/car.svg';
import publicTransportIcon from '@/icons/publicTransport.svg';


const steps = {
  1: {
    question: "What's your interest?",
    values: [
      {
        label: "Culture",
        icon: cultureIcon,
        value: {
          type: 'interest',
          value: 'culture'
        }
      },
      {
        label: "Active",
        icon: activeIcon,
        value: {
          type: 'interest',
          value: 'active'
        }
      },
      {
        label: "Kid-friendly",
        icon: kidFriendlyIcon,
        value: {
          type: 'interest',
          value: 'kidFriendly'
        }
      },
      {
        label: "Relax",
        icon: relaxIcon,
        value: {
          type: 'interest',
          value: 'relax'
        }
      },
      {
        label: "Culinary",
        icon: culinaryIcon,
        value: {
          type: 'interest',
          value: 'culinary'
        }
      },
    ]
  },
  2: {
    question: 'How do you plan to move around?',
    values: [
      {
        label: "Public Transport",
        icon: publicTransportIcon,
        value: {
          type: 'transport',
          value: 'publicTransport'
        }
      },
      {
        label: "Car",
        icon: carIcon,
        value: {
          type: 'transport',
          value: 'car'
        }
      },
    ]
  },
}

export default steps;