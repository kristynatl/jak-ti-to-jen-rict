import { preschoolConvo1 } from './preschoolConvo1';
import { preschoolConvo2 } from './prechoolConvo2';

export const ageGroups = [
  {
    id: 'predskolni-vek',
    text: 'Předškolní věk',
    src: '/img/child1.webp',
    alt: 'Ilustrace dítěte v předškolním věku',
    path: '/nacvik-rozhovoru/predskolni-vek',
    convos: [
      {
        id: 'zkoumani-vlastniho-tela',
        topic: 'Zkoumání vlastního těla',
        script: preschoolConvo1,
      },
      {
        id: 'kde-se-berou-deti',
        topic: 'Kde se berou děti',
        script: preschoolConvo2,
      },
      { id: 'soukromi', topic: 'Soukromí', script: [] },
      { id: 'poteseni-ve-vztahu', topic: 'Potěšení ve vztahu', script: [] },
      { id: 'osobni-hranice', topic: 'Osobní hranice', script: [] },
    ],
  },
  {
    id: 'mladsi-skolni-vek',
    text: 'Mladší školní věk',
    src: '/img/child2.webp',
    alt: 'Ilustrace dítěte v mladším školním věku',
    path: '/nacvik-rozhovoru/mladsi-skolni-vek',
    convos: [{ id: 'masturbace', topic: 'Masturbace', script: [] }],
  },
  {
    id: 'dospivani',
    text: 'Dospívání',
    src: '/img/child3.webp',
    alt: 'Ilustrace dospívajícího dítěte',
    path: '/nacvik-rozhovoru/dospivani',
    convos: [{ id: 'byt-dobry-v-sexu', topic: 'Být dobrý v sexu', script: [] }],
  },
];
