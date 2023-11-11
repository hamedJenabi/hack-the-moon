import cultureIcon from '@/icons/culture.svg';
import activeIcon from '@/icons/active.svg';
import kidFriendlyIcon from '@/icons/kidFriendly.svg';
import relaxIcon from '@/icons/relax.svg';
import culinaryIcon from '@/icons/relax.svg';
import carIcon from '@/icons/car.svg';
import publicTransportIcon from '@/icons/publicTransport.svg';


const steps = {
  'address': {
    question: "What's your interest?",
  },
  'datePicker': {
    question: "When?",
  },
  1: {
    question: "What's your interest?",
    values: [
      {
        label: "Culture",
        icon: cultureIcon,
        type: 'interest',
        value: 1,
      },
      {
        label: "Active",
        icon: activeIcon,
        value: 2,
        type: 'interest',
      },
      {
        label: "Kid-friendly",
        icon: kidFriendlyIcon,
        value: 3,
        type: 'interest',
      },
      {
        label: "Relax",
        icon: relaxIcon,
        value: 4,
        type: 'interest',
      },
      {
        label: "Culinary",
        icon: culinaryIcon,
        value: 5,
        type: 'interest',
      },
    ]
  },
  2: {
    question: 'How do you plan to move around?',
    values: [
      {
        label: "Public Transport",
        icon: publicTransportIcon,
        value: 1,
        type: 'transport',
      },
      {
        label: "Car",
        icon: carIcon,
        value: 2,
        type: 'transport',
      },
    ]
  },
}

export default steps;