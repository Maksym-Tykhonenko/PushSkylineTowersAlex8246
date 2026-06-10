export type pshskylinetwrrsQuizQuestion = {
  pshskylinetwrrsid: string;
  pshskylinetwrrsquestion: string;
  pshskylinetwrrsoptions: [string, string, string, string];

  pshskylinetwrrscorrectindex: number;

  pshskylinetwrrsimagefacadeid: string;
};

export const pshskylinetwrrsquizlength = 5;

export const pshskylinetwrrsquizseconds = 30;

export const pshskylinetwrrsallquizquestions: pshskylinetwrrsQuizQuestion[] = [
  {
    pshskylinetwrrsid: 'q-tallest-world',
    pshskylinetwrrsquestion: 'Which building is the tallest in the world?',
    pshskylinetwrrsoptions: [
      'Marina Bay Sands',
      'The Shard',
      'Burj Khalifa',
      'Cologne Cathedral',
    ],
    pshskylinetwrrscorrectindex: 2,
    pshskylinetwrrsimagefacadeid: 'futuristic-burj-khalifa',
  },
  {
    pshskylinetwrrsid: 'q-gothic-twins',
    pshskylinetwrrsquestion:
      'Which building is famous for its Gothic twin towers?',
    pshskylinetwrrsoptions: [
      'Cologne Cathedral',
      'Galaxy SOHO',
      'The Shard',
      'Alhambra',
    ],
    pshskylinetwrrscorrectindex: 0,
    pshskylinetwrrsimagefacadeid: 'gothic-cologne-cathedral',
  },
  {
    pshskylinetwrrsid: 'q-lost-incas',
    pshskylinetwrrsquestion:
      'Which structure is known as the lost city of the Incas?',
    pshskylinetwrrsoptions: [
      'Machu Picchu',
      'Forbidden City',
      'Parthenon',
      'Westminster Abbey',
    ],
    pshskylinetwrrscorrectindex: 0,
    pshskylinetwrrsimagefacadeid: 'historical-machu-picchu',
  },
  {
    pshskylinetwrrsid: 'q-mbs-location',
    pshskylinetwrrsquestion: 'Where is Marina Bay Sands located?',
    pshskylinetwrrsoptions: ['Tokyo', 'Singapore', 'Dubai', 'Beijing'],
    pshskylinetwrrscorrectindex: 1,
    pshskylinetwrrsimagefacadeid: 'futuristic-marina-bay-sands',
  },
  {
    pshskylinetwrrsid: 'q-zaha-hadid',
    pshskylinetwrrsquestion: 'Which building was designed by Zaha Hadid?',
    pshskylinetwrrsoptions: [
      'Milan Cathedral',
      'Galaxy SOHO',
      'Burj Khalifa',
      'Colosseum',
    ],
    pshskylinetwrrscorrectindex: 1,
    pshskylinetwrrsimagefacadeid: 'futuristic-galaxy-soho',
  },
  {
    pshskylinetwrrsid: 'q-notre-style',
    pshskylinetwrrsquestion:
      'What architectural style is Notre-Dame Cathedral known for?',
    pshskylinetwrrsoptions: ['Futuristic', 'Baroque', 'Gothic', 'Modern'],
    pshskylinetwrrscorrectindex: 2,
    pshskylinetwrrsimagefacadeid: 'gothic-notre-dame',
  },
  {
    pshskylinetwrrsid: 'q-arabic-calligraphy',
    pshskylinetwrrsquestion:
      'Which building features Arabic calligraphy on its facade?',
    pshskylinetwrrsoptions: [
      'Museum of the Future',
      'The Shard',
      'Westminster Abbey',
      'Marina Bay Sands',
    ],
    pshskylinetwrrscorrectindex: 0,
    pshskylinetwrrsimagefacadeid: 'futuristic-museum-of-the-future',
  },
  {
    pshskylinetwrrsid: 'q-peru',
    pshskylinetwrrsquestion: 'Which historical site is located in Peru?',
    pshskylinetwrrsoptions: [
      'Colosseum',
      'Machu Picchu',
      'Alhambra',
      'Parthenon',
    ],
    pshskylinetwrrscorrectindex: 1,
    pshskylinetwrrsimagefacadeid: 'historical-machu-picchu',
  },
  {
    pshskylinetwrrsid: 'q-victor-hugo',
    pshskylinetwrrsquestion: 'Which building inspired Victor Hugo’s novel?',
    pshskylinetwrrsoptions: [
      'Milan Cathedral',
      'Notre-Dame Cathedral',
      'The Shard',
      'Burj Khalifa',
    ],
    pshskylinetwrrscorrectindex: 1,
    pshskylinetwrrsimagefacadeid: 'gothic-notre-dame',
  },
  {
    pshskylinetwrrsid: 'q-forbidden-city',
    pshskylinetwrrsquestion: 'Which city is home to the Forbidden City?',
    pshskylinetwrrsoptions: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
    pshskylinetwrrscorrectindex: 0,
    pshskylinetwrrsimagefacadeid: 'historical-forbidden-city',
  },
  {
    pshskylinetwrrsid: 'q-milan-marble',
    pshskylinetwrrsquestion:
      'What is the main material of Milan Cathedral’s facade?',
    pshskylinetwrrsoptions: ['Wood', 'Steel', 'Marble', 'Glass'],
    pshskylinetwrrscorrectindex: 2,
    pshskylinetwrrsimagefacadeid: 'gothic-milan-cathedral',
  },
  {
    pshskylinetwrrsid: 'q-glass-shard',
    pshskylinetwrrsquestion: 'Which building looks like a giant glass shard?',
    pshskylinetwrrsoptions: [
      'The Shard',
      'Burj Khalifa',
      'Marina Bay Sands',
      'Galaxy SOHO',
    ],
    pshskylinetwrrscorrectindex: 0,
    pshskylinetwrrsimagefacadeid: 'futuristic-the-shard',
  },
  {
    pshskylinetwrrsid: 'q-athens',
    pshskylinetwrrsquestion: 'Which landmark is located in Athens?',
    pshskylinetwrrsoptions: [
      'Alhambra',
      'Parthenon',
      'Westminster Abbey',
      'Cologne Cathedral',
    ],
    pshskylinetwrrscorrectindex: 1,
    pshskylinetwrrsimagefacadeid: 'historical-parthenon',
  },
  {
    pshskylinetwrrsid: 'q-wwii-cologne',
    pshskylinetwrrsquestion:
      'Which building survived heavy bombings during World War II?',
    pshskylinetwrrsoptions: [
      'Cologne Cathedral',
      'Museum of the Future',
      'Marina Bay Sands',
      'Galaxy SOHO',
    ],
    pshskylinetwrrscorrectindex: 0,
    pshskylinetwrrsimagefacadeid: 'gothic-cologne-cathedral',
  },
  {
    pshskylinetwrrsid: 'q-alhambra-country',
    pshskylinetwrrsquestion: 'In which country is Alhambra located?',
    pshskylinetwrrsoptions: ['Italy', 'Spain', 'France', 'Portugal'],
    pshskylinetwrrscorrectindex: 1,
    pshskylinetwrrsimagefacadeid: 'historical-alhambra',
  },
  {
    pshskylinetwrrsid: 'q-infinity-pool',
    pshskylinetwrrsquestion:
      'Which structure has an infinity pool on the rooftop?',
    pshskylinetwrrsoptions: [
      'Burj Khalifa',
      'Marina Bay Sands',
      'The Shard',
      'Galaxy SOHO',
    ],
    pshskylinetwrrscorrectindex: 1,
    pshskylinetwrrsimagefacadeid: 'futuristic-marina-bay-sands',
  },
  {
    pshskylinetwrrsid: 'q-prague-castle',
    pshskylinetwrrsquestion: 'Which building is part of Prague Castle?',
    pshskylinetwrrsoptions: [
      'Westminster Abbey',
      'St. Vitus Cathedral',
      'Notre-Dame Cathedral',
      'Parthenon',
    ],
    pshskylinetwrrscorrectindex: 1,
    pshskylinetwrrsimagefacadeid: 'gothic-st-vitus',
  },
  {
    pshskylinetwrrsid: 'q-2000-years',
    pshskylinetwrrsquestion: 'Which landmark is nearly 2,000 years old?',
    pshskylinetwrrsoptions: [
      'Burj Khalifa',
      'Museum of the Future',
      'Colosseum',
      'The Shard',
    ],
    pshskylinetwrrscorrectindex: 2,
    pshskylinetwrrsimagefacadeid: 'historical-colosseum',
  },
  {
    pshskylinetwrrsid: 'q-futuristic-london',
    pshskylinetwrrsquestion: 'Which futuristic building is located in London?',
    pshskylinetwrrsoptions: [
      'Galaxy SOHO',
      'Burj Khalifa',
      'The Shard',
      'Marina Bay Sands',
    ],
    pshskylinetwrrscorrectindex: 2,
    pshskylinetwrrsimagefacadeid: 'futuristic-the-shard',
  },
  {
    pshskylinetwrrsid: 'q-3000-statues',
    pshskylinetwrrsquestion: 'Which cathedral contains over 3,000 statues?',
    pshskylinetwrrsoptions: [
      'Milan Cathedral',
      'Westminster Abbey',
      'Notre-Dame Cathedral',
      'Cologne Cathedral',
    ],
    pshskylinetwrrscorrectindex: 0,
    pshskylinetwrrsimagefacadeid: 'gothic-milan-cathedral',
  },
  {
    pshskylinetwrrsid: 'q-dubai-future-symbol',
    pshskylinetwrrsquestion: 'Which building symbolizes the future of Dubai?',
    pshskylinetwrrsoptions: [
      'Colosseum',
      'Museum of the Future',
      'Alhambra',
      'Parthenon',
    ],
    pshskylinetwrrscorrectindex: 1,
    pshskylinetwrrsimagefacadeid: 'futuristic-museum-of-the-future',
  },
  {
    pshskylinetwrrsid: 'q-chinese-emperors',
    pshskylinetwrrsquestion:
      'Which historical site was once home to Chinese emperors?',
    pshskylinetwrrsoptions: [
      'Forbidden City',
      'Machu Picchu',
      'Westminster Abbey',
      'Marina Bay Sands',
    ],
    pshskylinetwrrscorrectindex: 0,
    pshskylinetwrrsimagefacadeid: 'historical-forbidden-city',
  },
  {
    pshskylinetwrrsid: 'q-gladiator',
    pshskylinetwrrsquestion: 'Which landmark is famous for gladiator battles?',
    pshskylinetwrrsoptions: [
      'Parthenon',
      'Colosseum',
      'Alhambra',
      'Cologne Cathedral',
    ],
    pshskylinetwrrscorrectindex: 1,
    pshskylinetwrrsimagefacadeid: 'historical-colosseum',
  },
  {
    pshskylinetwrrsid: 'q-no-corners',
    pshskylinetwrrsquestion:
      'Which building has no sharp corners in its design?',
    pshskylinetwrrsoptions: [
      'Galaxy SOHO',
      'Burj Khalifa',
      'Milan Cathedral',
      'Westminster Abbey',
    ],
    pshskylinetwrrscorrectindex: 0,
    pshskylinetwrrsimagefacadeid: 'futuristic-galaxy-soho',
  },
  {
    pshskylinetwrrsid: 'q-dubai-building',
    pshskylinetwrrsquestion: 'Which building is located in Dubai?',
    pshskylinetwrrsoptions: [
      'Marina Bay Sands',
      'Museum of the Future',
      'Parthenon',
      'Westminster Abbey',
    ],
    pshskylinetwrrscorrectindex: 1,
    pshskylinetwrrsimagefacadeid: 'futuristic-museum-of-the-future',
  },
  {
    pshskylinetwrrsid: 'q-rose-windows',
    pshskylinetwrrsquestion: 'Which structure is famous for its rose windows?',
    pshskylinetwrrsoptions: [
      'Notre-Dame Cathedral',
      'The Shard',
      'Burj Khalifa',
      'Machu Picchu',
    ],
    pshskylinetwrrscorrectindex: 0,
    pshskylinetwrrsimagefacadeid: 'gothic-notre-dame',
  },
  {
    pshskylinetwrrsid: 'q-granada',
    pshskylinetwrrsquestion: 'Which landmark overlooks Granada city?',
    pshskylinetwrrsoptions: [
      'Alhambra',
      'Colosseum',
      'Forbidden City',
      'Parthenon',
    ],
    pshskylinetwrrscorrectindex: 0,
    pshskylinetwrrsimagefacadeid: 'historical-alhambra',
  },
  {
    pshskylinetwrrsid: 'q-tallest-uk',
    pshskylinetwrrsquestion:
      'Which building is the tallest in the United Kingdom?',
    pshskylinetwrrsoptions: [
      'The Shard',
      'Burj Khalifa',
      'Marina Bay Sands',
      'Galaxy SOHO',
    ],
    pshskylinetwrrscorrectindex: 0,
    pshskylinetwrrsimagefacadeid: 'futuristic-the-shard',
  },
  {
    pshskylinetwrrsid: 'q-andes',
    pshskylinetwrrsquestion:
      'Which structure is located high in the Andes Mountains?',
    pshskylinetwrrsoptions: [
      'Machu Picchu',
      'Milan Cathedral',
      'Westminster Abbey',
      'Forbidden City',
    ],
    pshskylinetwrrscorrectindex: 0,
    pshskylinetwrrsimagefacadeid: 'historical-machu-picchu',
  },
];
