import {ImageSourcePropType} from 'react-native';

export type pshskylinetwrrsCategory = 'All' | 'Gothic' | 'Futuristic' | 'Historical';

export type pshskylinetwrrsFacadeItem = {
  pshskylinetwrrsid: string;
  pshskylinetwrrscategory: Exclude<pshskylinetwrrsCategory, 'All'>;
  pshskylinetwrrsname: string;
  pshskylinetwrrscity: string;
  pshskylinetwrrscountry: string;
  pshskylinetwrrscoordinates: {pshskylinetwrrslat: number; pshskylinetwrrslng: number};
  pshskylinetwrrsbuilt: string;
  pshskylinetwrrsdescription: string;
  pshskylinetwrrsfacts: string[];
  pshskylinetwrrsrating: number;
  pshskylinetwrrsimage: ImageSourcePropType;
};

const pshskylinetwrrsclamp = (pshskylinetwrrsvalue: number, pshskylinetwrrsmin: number, pshskylinetwrrsmax: number) =>
  Math.max(pshskylinetwrrsmin, Math.min(pshskylinetwrrsmax, pshskylinetwrrsvalue));

const pshskylinetwrrsseededRating = (pshskylinetwrrsseed: string) => {
  let pshskylinetwrrshash = 0;
  for (let pshskylinetwrrsi = 0; pshskylinetwrrsi < pshskylinetwrrsseed.length; pshskylinetwrrsi += 1) {
    pshskylinetwrrshash = pshskylinetwrrshash * 31 + pshskylinetwrrsseed.charCodeAt(pshskylinetwrrsi);
  }
  const pshskylinetwrrsnormalized = (Math.abs(pshskylinetwrrshash) % 1000) / 999;
  const pshskylinetwrrsrating = 3.6 + pshskylinetwrrsnormalized * 1.4;
  return Math.round(pshskylinetwrrsclamp(pshskylinetwrrsrating, 3.6, 5) * 10) / 10;
};

const pshskylinetwrrsdataBase: Omit<pshskylinetwrrsFacadeItem, 'pshskylinetwrrsrating'>[] = [
  // GOTHIC
  {
    pshskylinetwrrsid: 'gothic-cologne-cathedral',
    pshskylinetwrrscategory: 'Gothic',
    pshskylinetwrrsname: 'Cologne Cathedral',
    pshskylinetwrrscity: 'Cologne',
    pshskylinetwrrscountry: 'Germany',
    pshskylinetwrrscoordinates: {pshskylinetwrrslat: 50.9413, pshskylinetwrrslng: 6.9583},
    pshskylinetwrrsbuilt: '1248',
    pshskylinetwrrsdescription:
      'One of the largest Gothic cathedrals in Europe famous for its dramatic twin towers, dark facade, and detailed stained glass windows.',
    pshskylinetwrrsfacts: [
      'Construction lasted more than 600 years',
      'UNESCO World Heritage Site',
      'Twin towers are 157 meters tall',
    ],
    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc1.png'),
  },
  {
    pshskylinetwrrsid: 'gothic-notre-dame',
    pshskylinetwrrscategory: 'Gothic',
    pshskylinetwrrsname: 'Notre-Dame Cathedral',
    pshskylinetwrrscity: 'Paris',
    pshskylinetwrrscountry: 'France',
    pshskylinetwrrscoordinates: {pshskylinetwrrslat: 48.853, pshskylinetwrrslng: 2.3499},
    pshskylinetwrrsbuilt: '1163',
    pshskylinetwrrsdescription:
      'Legendary Gothic cathedral known for gargoyles, rose windows, and medieval Parisian architecture.',
    pshskylinetwrrsfacts: [
      'Inspired Victor Hugo’s novel',
      'Features iconic rose windows',
      'Reopened after restoration works',
    ],
    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc2.png'),
  },
  {
    pshskylinetwrrsid: 'gothic-milan-cathedral',
    pshskylinetwrrscategory: 'Gothic',
    pshskylinetwrrsname: 'Milan Cathedral',
    pshskylinetwrrscity: 'Milan',
    pshskylinetwrrscountry: 'Italy',
    pshskylinetwrrscoordinates: {pshskylinetwrrslat: 45.4642, pshskylinetwrrslng: 9.1916},
    pshskylinetwrrsbuilt: '1386',
    pshskylinetwrrsdescription:
      'Massive Gothic cathedral covered with marble details, statues, and elegant sharp spires.',
    pshskylinetwrrsfacts: [
      'Contains over 3,000 statues',
      'Largest church in Italy',
      'Took nearly 600 years to complete',
    ],
    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc3.png'),
  },
  {
    pshskylinetwrrsid: 'gothic-st-vitus',
    pshskylinetwrrscategory: 'Gothic',
    pshskylinetwrrsname: 'St. Vitus Cathedral',
    pshskylinetwrrscity: 'Prague',
    pshskylinetwrrscountry: 'Czech Republic',
    pshskylinetwrrscoordinates: {pshskylinetwrrslat: 50.0909, pshskylinetwrrslng: 14.4005},
    pshskylinetwrrsbuilt: '1344',
    pshskylinetwrrsdescription:
      'Historic Gothic cathedral inside Prague Castle with colorful stained glass and towering arches.',
    pshskylinetwrrsfacts: [
      'Holds Czech crown jewels',
      'Features a giant rose window',
      'Mixes Gothic and Neo-Gothic styles',
    ],
    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc4.png'),
  },
  {
    pshskylinetwrrsid: 'gothic-westminster',
    pshskylinetwrrscategory: 'Gothic',
    pshskylinetwrrsname: 'Westminster Abbey',
    pshskylinetwrrscity: 'London',
    pshskylinetwrrscountry: 'United Kingdom',
    pshskylinetwrrscoordinates: {pshskylinetwrrslat: 51.4993, pshskylinetwrrslng: -0.1273},
    pshskylinetwrrsbuilt: '1245',
    pshskylinetwrrsdescription:
      'Famous Gothic abbey known for royal ceremonies, detailed stone facade, and British history.',
    pshskylinetwrrsfacts: [
      'Coronation church of British monarchs',
      'Burial place of famous scientists',
      'UNESCO World Heritage Site',
    ],
    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc5.png'),
  },

  // FUTURISTIC
  {
    pshskylinetwrrsid: 'futuristic-burj-khalifa',
    pshskylinetwrrscategory: 'Futuristic',
    pshskylinetwrrsname: 'Burj Khalifa',
    pshskylinetwrrscity: 'Dubai',
    pshskylinetwrrscountry: 'UAE',
    pshskylinetwrrscoordinates: {pshskylinetwrrslat: 25.1972, pshskylinetwrrslng: 55.2744},
    pshskylinetwrrsbuilt: '2010',
    pshskylinetwrrsdescription:
      'The tallest skyscraper in the world featuring sleek futuristic glass architecture inspired by desert flowers.',
    pshskylinetwrrsfacts: ['Height exceeds 828 meters', 'Has 163 floors', 'Visible from over 90 km away'],
    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc6.png'),
  },
  {
    pshskylinetwrrsid: 'futuristic-marina-bay-sands',
    pshskylinetwrrscategory: 'Futuristic',
    pshskylinetwrrsname: 'Marina Bay Sands',
    pshskylinetwrrscity: 'Singapore',
    pshskylinetwrrscountry: 'Singapore',
    pshskylinetwrrscoordinates: {pshskylinetwrrslat: 1.2834, pshskylinetwrrslng: 103.8607},
    pshskylinetwrrsbuilt: '2010',
    pshskylinetwrrsdescription:
      'Futuristic hotel complex with three towers connected by a massive rooftop sky park.',
    pshskylinetwrrsfacts: ['Rooftop shaped like a ship', 'Features a famous infinity pool', 'One of Singapore’s symbols'],
    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc7.png'),
  },
  {
    pshskylinetwrrsid: 'futuristic-the-shard',
    pshskylinetwrrscategory: 'Futuristic',
    pshskylinetwrrsname: 'The Shard',
    pshskylinetwrrscity: 'London',
    pshskylinetwrrscountry: 'United Kingdom',
    pshskylinetwrrscoordinates: {pshskylinetwrrslat: 51.5045, pshskylinetwrrslng: -0.0865},
    pshskylinetwrrsbuilt: '2012',
    pshskylinetwrrsdescription:
      'Ultra-modern glass skyscraper inspired by sharp crystal shards and futuristic minimalism.',
    pshskylinetwrrsfacts: ['Tallest building in the UK', 'Designed by Renzo Piano', 'Reflects sunlight differently each hour'],
    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc8.png'),
  },
  {
    pshskylinetwrrsid: 'futuristic-galaxy-soho',
    pshskylinetwrrscategory: 'Futuristic',
    pshskylinetwrrsname: 'Galaxy SOHO',
    pshskylinetwrrscity: 'Beijing',
    pshskylinetwrrscountry: 'China',
    pshskylinetwrrscoordinates: {pshskylinetwrrslat: 39.9215, pshskylinetwrrslng: 116.417},
    pshskylinetwrrsbuilt: '2012',
    pshskylinetwrrsdescription:
      'Futuristic curved complex with flowing organic architecture and smooth white facades.',
    pshskylinetwrrsfacts: ['Designed by Zaha Hadid', 'No sharp building corners', 'Inspired by fluid movement'],
    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc9.png'),
  },
  {
    pshskylinetwrrsid: 'futuristic-museum-of-the-future',
    pshskylinetwrrscategory: 'Futuristic',
    pshskylinetwrrsname: 'Museum of the Future',
    pshskylinetwrrscity: 'Dubai',
    pshskylinetwrrscountry: 'UAE',
    pshskylinetwrrscoordinates: {pshskylinetwrrslat: 25.2206, pshskylinetwrrslng: 55.2827},
    pshskylinetwrrsbuilt: '2022',
    pshskylinetwrrsdescription:
      'Futuristic torus-shaped building featuring Arabic calligraphy integrated into its facade.',
    pshskylinetwrrsfacts: ['Covered in Arabic poetry', 'Represents innovation and technology', 'One of the most photographed buildings in Dubai'],
    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc10.png'),
  },

  // HISTORICAL
  {
    pshskylinetwrrsid: 'historical-colosseum',
    pshskylinetwrrscategory: 'Historical',
    pshskylinetwrrsname: 'Colosseum',
    pshskylinetwrrscity: 'Rome',
    pshskylinetwrrscountry: 'Italy',
    pshskylinetwrrscoordinates: {pshskylinetwrrslat: 41.8902, pshskylinetwrrslng: 12.4922},
    pshskylinetwrrsbuilt: '80 AD',
    pshskylinetwrrsdescription:
      'Ancient Roman amphitheater famous for gladiator battles and iconic stone architecture.',
    pshskylinetwrrsfacts: ['Could hold over 50,000 spectators', 'One of the New Seven Wonders', 'Nearly 2,000 years old'],
    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc11.png'),
  },
  {
    pshskylinetwrrsid: 'historical-parthenon',
    pshskylinetwrrscategory: 'Historical',
    pshskylinetwrrsname: 'Parthenon',
    pshskylinetwrrscity: 'Athens',
    pshskylinetwrrscountry: 'Greece',
    pshskylinetwrrscoordinates: {pshskylinetwrrslat: 37.9715, pshskylinetwrrslng: 23.7267},
    pshskylinetwrrsbuilt: '432 BC',
    pshskylinetwrrsdescription:
      'Ancient Greek temple dedicated to Athena featuring classical columns and marble architecture.',
    pshskylinetwrrsfacts: ['Symbol of Ancient Greece', 'Built entirely from marble', 'Located on the Acropolis hill'],
    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc12.png'),
  },
  {
    pshskylinetwrrsid: 'historical-forbidden-city',
    pshskylinetwrrscategory: 'Historical',
    pshskylinetwrrsname: 'Forbidden City',
    pshskylinetwrrscity: 'Beijing',
    pshskylinetwrrscountry: 'China',
    pshskylinetwrrscoordinates: {pshskylinetwrrslat: 39.9163, pshskylinetwrrslng: 116.3972},
    pshskylinetwrrsbuilt: '1420',
    pshskylinetwrrsdescription:
      'Massive imperial palace complex with traditional Chinese architecture and golden roofs.',
    pshskylinetwrrsfacts: ['Home to 24 Chinese emperors', 'Contains nearly 1,000 buildings', 'UNESCO World Heritage Site'],
    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc13.png'),
  },
  {
    pshskylinetwrrsid: 'historical-alhambra',
    pshskylinetwrrscategory: 'Historical',
    pshskylinetwrrsname: 'Alhambra',
    pshskylinetwrrscity: 'Granada',
    pshskylinetwrrscountry: 'Spain',
    pshskylinetwrrscoordinates: {pshskylinetwrrslat: 37.1761, pshskylinetwrrslng: -3.5881},
    pshskylinetwrrsbuilt: '1238',
    pshskylinetwrrsdescription:
      'Historic palace fortress blending Islamic architecture, gardens, and detailed decorative facades.',
    pshskylinetwrrsfacts: ['Famous for intricate wall carvings', 'Overlooks Granada city', 'Combines palace and fortress design'],
    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc14.png'),
  },
  {
    pshskylinetwrrsid: 'historical-machu-picchu',
    pshskylinetwrrscategory: 'Historical',
    pshskylinetwrrsname: 'Machu Picchu',
    pshskylinetwrrscity: 'Cusco Region',
    pshskylinetwrrscountry: 'Peru',
    pshskylinetwrrscoordinates: {pshskylinetwrrslat: -13.1631, pshskylinetwrrslng: -72.545},
    pshskylinetwrrsbuilt: '1450',
    pshskylinetwrrsdescription:
      'Ancient Incan mountain city surrounded by dramatic landscapes and stone terraces.',
    pshskylinetwrrsfacts: ['Hidden for centuries', 'Located high in the Andes', 'One of the world’s most famous archaeological sites'],
    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc15.png'),
  },
];

export const pshskylinetwrrscategories: {pshskylinetwrrskey: pshskylinetwrrsCategory; pshskylinetwrrslabel: string}[] = [
  {pshskylinetwrrskey: 'All', pshskylinetwrrslabel: 'All'},
  {pshskylinetwrrskey: 'Gothic', pshskylinetwrrslabel: 'Gothic'},
  {pshskylinetwrrskey: 'Futuristic', pshskylinetwrrslabel: 'Futuristic'},
  {pshskylinetwrrskey: 'Historical', pshskylinetwrrslabel: 'Historical'},
];

export const pshskylinetwrrsallfacades: pshskylinetwrrsFacadeItem[] = pshskylinetwrrsdataBase.map(pshskylinetwrrsitem => ({
  ...pshskylinetwrrsitem,
  pshskylinetwrrsrating: pshskylinetwrrsseededRating(pshskylinetwrrsitem.pshskylinetwrrsid),
}));

