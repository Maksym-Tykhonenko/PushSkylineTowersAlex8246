import {
  pshskylinetwrrsGetSavedIds,
  pshskylinetwrrsToggleSaved,
} from '../Pshskylinetwrrsdata/pshskylinetwrrssvd';

import Pshskylinetwrrsclay from '../Pshskylinetwrrscpnts/Pshskylinetwrrsclay';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo, useState} from 'react';
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type pshskylinetwrrsCategory = 'All' | 'Gothic' | 'Futuristic' | 'Historical';

type pshskylinetwrrsFacadeItem = {
  pshskylinetwrrsid: string;
  pshskylinetwrrscategory: Exclude<pshskylinetwrrsCategory, 'All'>;
  pshskylinetwrrsname: string;
  pshskylinetwrrscity: string;
  pshskylinetwrrscountry: string;
  pshskylinetwrrscoordinates: {
    pshskylinetwrrslat: number;
    pshskylinetwrrslng: number;
  };
  pshskylinetwrrsbuilt: string;
  pshskylinetwrrsdescription: string;
  pshskylinetwrrsfacts: string[];
  pshskylinetwrrsrating: number;
  pshskylinetwrrsimage: ImageSourcePropType;
};

const pshskylinetwrrsclamp = (
  pshskylinetwrrsvalue: number,
  pshskylinetwrrsmin: number,
  pshskylinetwrrsmax: number,
) =>
  Math.max(
    pshskylinetwrrsmin,
    Math.min(pshskylinetwrrsmax, pshskylinetwrrsvalue),
  );

const pshskylinetwrrsseededRating = (pshskylinetwrrsseed: string) => {
  let pshskylinetwrrshash = 0;
  for (
    let pshskylinetwrrsi = 0;
    pshskylinetwrrsi < pshskylinetwrrsseed.length;
    pshskylinetwrrsi += 1
  ) {
    pshskylinetwrrshash =
      pshskylinetwrrshash * 31 +
      pshskylinetwrrsseed.charCodeAt(pshskylinetwrrsi);
  }
  const pshskylinetwrrsnormalized =
    (Math.abs(pshskylinetwrrshash) % 1000) / 999;
  const pshskylinetwrrsrating = 3.6 + pshskylinetwrrsnormalized * 1.4;
  return (
    Math.round(pshskylinetwrrsclamp(pshskylinetwrrsrating, 3.6, 5) * 10) / 10
  );
};

const pshskylinetwrrsdataBase: Omit<
  pshskylinetwrrsFacadeItem,
  'pshskylinetwrrsrating'
>[] = [
  // GOTHIC
  {
    pshskylinetwrrsid: 'gothic-cologne-cathedral',
    pshskylinetwrrscategory: 'Gothic',
    pshskylinetwrrsname: 'Cologne Cathedral',
    pshskylinetwrrscity: 'Cologne',
    pshskylinetwrrscountry: 'Germany',
    pshskylinetwrrscoordinates: {
      pshskylinetwrrslat: 50.9413,
      pshskylinetwrrslng: 6.9583,
    },
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
    pshskylinetwrrscoordinates: {
      pshskylinetwrrslat: 48.853,
      pshskylinetwrrslng: 2.3499,
    },
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
    pshskylinetwrrscoordinates: {
      pshskylinetwrrslat: 45.4642,
      pshskylinetwrrslng: 9.1916,
    },
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
    pshskylinetwrrscoordinates: {
      pshskylinetwrrslat: 50.0909,
      pshskylinetwrrslng: 14.4005,
    },
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
    pshskylinetwrrscoordinates: {
      pshskylinetwrrslat: 51.4993,
      pshskylinetwrrslng: -0.1273,
    },
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
    pshskylinetwrrscoordinates: {
      pshskylinetwrrslat: 25.1972,
      pshskylinetwrrslng: 55.2744,
    },
    pshskylinetwrrsbuilt: '2010',
    pshskylinetwrrsdescription:
      'The tallest skyscraper in the world featuring sleek futuristic glass architecture inspired by desert flowers.',
    pshskylinetwrrsfacts: [
      'Height exceeds 828 meters',
      'Has 163 floors',
      'Visible from over 90 km away',
    ],

    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc6.png'),
  },
  {
    pshskylinetwrrsid: 'futuristic-marina-bay-sands',
    pshskylinetwrrscategory: 'Futuristic',
    pshskylinetwrrsname: 'Marina Bay Sands',
    pshskylinetwrrscity: 'Singapore',
    pshskylinetwrrscountry: 'Singapore',
    pshskylinetwrrscoordinates: {
      pshskylinetwrrslat: 1.2834,
      pshskylinetwrrslng: 103.8607,
    },
    pshskylinetwrrsbuilt: '2010',
    pshskylinetwrrsdescription:
      'Futuristic hotel complex with three towers connected by a massive rooftop sky park.',
    pshskylinetwrrsfacts: [
      'Rooftop shaped like a ship',
      'Features a famous infinity pool',
      'One of Singapore’s symbols',
    ],

    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc7.png'),
  },
  {
    pshskylinetwrrsid: 'futuristic-the-shard',
    pshskylinetwrrscategory: 'Futuristic',
    pshskylinetwrrsname: 'The Shard',
    pshskylinetwrrscity: 'London',
    pshskylinetwrrscountry: 'United Kingdom',
    pshskylinetwrrscoordinates: {
      pshskylinetwrrslat: 51.5045,
      pshskylinetwrrslng: -0.0865,
    },
    pshskylinetwrrsbuilt: '2012',
    pshskylinetwrrsdescription:
      'Ultra-modern glass skyscraper inspired by sharp crystal shards and futuristic minimalism.',
    pshskylinetwrrsfacts: [
      'Tallest building in the UK',
      'Designed by Renzo Piano',
      'Reflects sunlight differently each hour',
    ],

    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc8.png'),
  },
  {
    pshskylinetwrrsid: 'futuristic-galaxy-soho',
    pshskylinetwrrscategory: 'Futuristic',
    pshskylinetwrrsname: 'Galaxy SOHO',
    pshskylinetwrrscity: 'Beijing',
    pshskylinetwrrscountry: 'China',
    pshskylinetwrrscoordinates: {
      pshskylinetwrrslat: 39.9215,
      pshskylinetwrrslng: 116.417,
    },
    pshskylinetwrrsbuilt: '2012',
    pshskylinetwrrsdescription:
      'Futuristic curved complex with flowing organic architecture and smooth white facades.',
    pshskylinetwrrsfacts: [
      'Designed by Zaha Hadid',
      'No sharp building corners',
      'Inspired by fluid movement',
    ],

    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc9.png'),
  },
  {
    pshskylinetwrrsid: 'futuristic-museum-of-the-future',
    pshskylinetwrrscategory: 'Futuristic',
    pshskylinetwrrsname: 'Museum of the Future',
    pshskylinetwrrscity: 'Dubai',
    pshskylinetwrrscountry: 'UAE',
    pshskylinetwrrscoordinates: {
      pshskylinetwrrslat: 25.2206,
      pshskylinetwrrslng: 55.2827,
    },
    pshskylinetwrrsbuilt: '2022',
    pshskylinetwrrsdescription:
      'Futuristic torus-shaped building featuring Arabic calligraphy integrated into its facade.',
    pshskylinetwrrsfacts: [
      'Covered in Arabic poetry',
      'Represents innovation and technology',
      'One of the most photographed buildings in Dubai',
    ],

    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc10.png'),
  },

  // HISTORICAL
  {
    pshskylinetwrrsid: 'historical-colosseum',
    pshskylinetwrrscategory: 'Historical',
    pshskylinetwrrsname: 'Colosseum',
    pshskylinetwrrscity: 'Rome',
    pshskylinetwrrscountry: 'Italy',
    pshskylinetwrrscoordinates: {
      pshskylinetwrrslat: 41.8902,
      pshskylinetwrrslng: 12.4922,
    },
    pshskylinetwrrsbuilt: '80 AD',
    pshskylinetwrrsdescription:
      'Ancient Roman amphitheater famous for gladiator battles and iconic stone architecture.',
    pshskylinetwrrsfacts: [
      'Could hold over 50,000 spectators',
      'One of the New Seven Wonders',
      'Nearly 2,000 years old',
    ],

    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc11.png'),
  },
  {
    pshskylinetwrrsid: 'historical-parthenon',
    pshskylinetwrrscategory: 'Historical',
    pshskylinetwrrsname: 'Parthenon',
    pshskylinetwrrscity: 'Athens',
    pshskylinetwrrscountry: 'Greece',
    pshskylinetwrrscoordinates: {
      pshskylinetwrrslat: 37.9715,
      pshskylinetwrrslng: 23.7267,
    },
    pshskylinetwrrsbuilt: '432 BC',
    pshskylinetwrrsdescription:
      'Ancient Greek temple dedicated to Athena featuring classical columns and marble architecture.',
    pshskylinetwrrsfacts: [
      'Symbol of Ancient Greece',
      'Built entirely from marble',
      'Located on the Acropolis hill',
    ],

    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc12.png'),
  },
  {
    pshskylinetwrrsid: 'historical-forbidden-city',
    pshskylinetwrrscategory: 'Historical',
    pshskylinetwrrsname: 'Forbidden City',
    pshskylinetwrrscity: 'Beijing',
    pshskylinetwrrscountry: 'China',
    pshskylinetwrrscoordinates: {
      pshskylinetwrrslat: 39.9163,
      pshskylinetwrrslng: 116.3972,
    },
    pshskylinetwrrsbuilt: '1420',
    pshskylinetwrrsdescription:
      'Massive imperial palace complex with traditional Chinese architecture and golden roofs.',
    pshskylinetwrrsfacts: [
      'Home to 24 Chinese emperors',
      'Contains nearly 1,000 buildings',
      'UNESCO World Heritage Site',
    ],

    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc13.png'),
  },
  {
    pshskylinetwrrsid: 'historical-alhambra',
    pshskylinetwrrscategory: 'Historical',
    pshskylinetwrrsname: 'Alhambra',
    pshskylinetwrrscity: 'Granada',
    pshskylinetwrrscountry: 'Spain',
    pshskylinetwrrscoordinates: {
      pshskylinetwrrslat: 37.1761,
      pshskylinetwrrslng: -3.5881,
    },
    pshskylinetwrrsbuilt: '1238',
    pshskylinetwrrsdescription:
      'Historic palace fortress blending Islamic architecture, gardens, and detailed decorative facades.',
    pshskylinetwrrsfacts: [
      'Famous for intricate wall carvings',
      'Overlooks Granada city',
      'Combines palace and fortress design',
    ],

    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc14.png'),
  },
  {
    pshskylinetwrrsid: 'historical-machu-picchu',
    pshskylinetwrrscategory: 'Historical',
    pshskylinetwrrsname: 'Machu Picchu',
    pshskylinetwrrscity: 'Cusco Region',
    pshskylinetwrrscountry: 'Peru',
    pshskylinetwrrscoordinates: {
      pshskylinetwrrslat: -13.1631,
      pshskylinetwrrslng: -72.545,
    },
    pshskylinetwrrsbuilt: '1450',
    pshskylinetwrrsdescription:
      'Ancient Incan mountain city surrounded by dramatic landscapes and stone terraces.',
    pshskylinetwrrsfacts: [
      'Hidden for centuries',
      'Located high in the Andes',
      'One of the world’s most famous archaeological sites',
    ],

    pshskylinetwrrsimage: require('../../assets/i/pshskylinetwrrstnloc15.png'),
  },
];

const pshskylinetwrrscategories: {
  pshskylinetwrrskey: pshskylinetwrrsCategory;
  pshskylinetwrrslabel: string;
}[] = [
  {pshskylinetwrrskey: 'All', pshskylinetwrrslabel: '🌍 All'},
  {pshskylinetwrrskey: 'Gothic', pshskylinetwrrslabel: '⛪ Gothic'},
  {pshskylinetwrrskey: 'Futuristic', pshskylinetwrrslabel: '🏙️ Futuristic'},
  {pshskylinetwrrskey: 'Historical', pshskylinetwrrslabel: '🏛️ Historical'},
];

const Pshskylinetwrrsfacdes = () => {
  const pshskylinetwrrsnavigation = useNavigation();
  const pshskylinetwrrsinsets = useSafeAreaInsets();
  const [pshskylinetwrrscategory, pshskylinetwrrssetcategory] =
    useState<pshskylinetwrrsCategory>('All');
  const [pshskylinetwrrsquery, pshskylinetwrrssetquery] = useState('');
  const [pshskylinetwrrssavedids, pshskylinetwrrssetsavedids] = useState<
    Set<string>
  >(new Set());

  const pshskylinetwrrsrefreshsaved = useCallback(() => {
    let pshskylinetwrrsalive = true;
    pshskylinetwrrsGetSavedIds()
      .then(pshskylinetwrrsset => {
        if (pshskylinetwrrsalive) {
          pshskylinetwrrssetsavedids(pshskylinetwrrsset);
        }
      })
      .catch(() => {});
    return () => {
      pshskylinetwrrsalive = false;
    };
  }, []);

  useFocusEffect(pshskylinetwrrsrefreshsaved);

  const pshskylinetwrrstogglesaved = useCallback(
    async (pshskylinetwrrsid: string) => {
      pshskylinetwrrssetsavedids(pshskylinetwrrsprev => {
        const pshskylinetwrrsnext = new Set(pshskylinetwrrsprev);
        if (pshskylinetwrrsnext.has(pshskylinetwrrsid)) {
          pshskylinetwrrsnext.delete(pshskylinetwrrsid);
        } else {
          pshskylinetwrrsnext.add(pshskylinetwrrsid);
        }
        return pshskylinetwrrsnext;
      });

      try {
        const pshskylinetwrrsfinal = await pshskylinetwrrsToggleSaved(
          pshskylinetwrrsid,
        );
        pshskylinetwrrssetsavedids(pshskylinetwrrsprev => {
          const pshskylinetwrrsnext = new Set(pshskylinetwrrsprev);
          if (pshskylinetwrrsfinal) {
            pshskylinetwrrsnext.add(pshskylinetwrrsid);
          } else {
            pshskylinetwrrsnext.delete(pshskylinetwrrsid);
          }
          return pshskylinetwrrsnext;
        });
      } catch {
        pshskylinetwrrsGetSavedIds()
          .then(pshskylinetwrrsset =>
            pshskylinetwrrssetsavedids(pshskylinetwrrsset),
          )
          .catch(() => {});
      }
    },
    [],
  );

  const pshskylinetwrrsdata = useMemo<pshskylinetwrrsFacadeItem[]>(() => {
    return pshskylinetwrrsdataBase.map(pshskylinetwrrsitem => ({
      ...pshskylinetwrrsitem,
      pshskylinetwrrsrating: pshskylinetwrrsseededRating(
        pshskylinetwrrsitem.pshskylinetwrrsid,
      ),
    }));
  }, []);

  const pshskylinetwrrsfiltered = useMemo(() => {
    const pshskylinetwrrsq = pshskylinetwrrsquery.trim().toLowerCase();
    return pshskylinetwrrsdata.filter(pshskylinetwrrsitem => {
      const pshskylinetwrrscatOk =
        pshskylinetwrrscategory === 'All'
          ? true
          : pshskylinetwrrsitem.pshskylinetwrrscategory ===
            pshskylinetwrrscategory;
      const pshskylinetwrrsqueryOk =
        pshskylinetwrrsq.length === 0
          ? true
          : `${pshskylinetwrrsitem.pshskylinetwrrsname} ${pshskylinetwrrsitem.pshskylinetwrrscity} ${pshskylinetwrrsitem.pshskylinetwrrscountry}`
              .toLowerCase()
              .includes(pshskylinetwrrsq);
      return pshskylinetwrrscatOk && pshskylinetwrrsqueryOk;
    });
  }, [pshskylinetwrrsdata, pshskylinetwrrscategory, pshskylinetwrrsquery]);

  const pshskylinetwrrsfeatured = pshskylinetwrrsdata[0];

  const pshskylinetwrrsopenDetails = (
    pshskylinetwrrsitem: pshskylinetwrrsFacadeItem,
  ) => {
    const pshskylinetwrrsrootNav =
      (pshskylinetwrrsnavigation as any).getParent?.()?.getParent?.() ??
      (pshskylinetwrrsnavigation as any).getParent?.() ??
      pshskylinetwrrsnavigation;
    pshskylinetwrrsrootNav.navigate('Pshskylinetwrrsfacddtl', {
      pshskylinetwrrsitem,
    });
  };

  const pshskylinetwrrslistitems = pshskylinetwrrsfiltered.filter(
    pshskylinetwrrsitem =>
      pshskylinetwrrsfeatured
        ? pshskylinetwrrsitem.pshskylinetwrrsid !==
          pshskylinetwrrsfeatured.pshskylinetwrrsid
        : true,
  );

  return (
    <Pshskylinetwrrsclay>
      <View
        style={[
          styles.pshskylinetwrrscontainer,
          {paddingTop: pshskylinetwrrsinsets.top + 14},
        ]}>
        <ScrollView
          contentContainerStyle={styles.pshskylinetwrrsscrollcontent}
          showsVerticalScrollIndicator={false}>
          <View style={styles.pshskylinetwrrsheaderrow}>
            <View>
              <Text style={styles.pshskylinetwrrsgreeting}>
                Good morning 👋
              </Text>
              <Text style={styles.pshskylinetwrrstitle}>Discover Facades</Text>
            </View>
            <Pressable style={styles.pshskylinetwrrsiconbutton}>
              <Image
                source={require('../../assets/i/pshskylinetwrrstbel.png')}
              />
            </Pressable>
          </View>

          <View style={styles.pshskylinetwrrssearchwrap}>
            <Image
              source={require('../../assets/i/pshskylinetwrrstsearc.png')}
            />
            <TextInput
              value={pshskylinetwrrsquery}
              onChangeText={pshskylinetwrrssetquery}
              placeholder="Search buildings, cities..."
              placeholderTextColor="#FFFFFF4D"
              style={styles.pshskylinetwrrssearchinput}
            />
          </View>

          <Pressable
            onPress={() =>
              pshskylinetwrrsfeatured &&
              pshskylinetwrrsopenDetails(pshskylinetwrrsfeatured)
            }
            style={styles.pshskylinetwrrsfeaturedwrapper}>
            <ImageBackground
              source={pshskylinetwrrsfeatured.pshskylinetwrrsimage}
              style={styles.pshskylinetwrrsfeaturedbg}>
              <LinearGradient
                colors={['#2563EB', '#06B6D4']}
                style={styles.pshskylinetwrrsfeaturedbadge}>
                <View style={{paddingHorizontal: 12, paddingVertical: 7}}>
                  <Text style={styles.pshskylinetwrrsfeaturedbadgetext}>
                    ✦ FEATURED
                  </Text>
                </View>
              </LinearGradient>
              <View style={styles.pshskylinetwrrsfeaturedfooter}>
                <Text style={styles.pshskylinetwrrsfeaturedname}>
                  {pshskylinetwrrsfeatured?.pshskylinetwrrsname}
                </Text>
                <View style={styles.pshskylinetwrrsfeaturedmetarow}>
                  <Text style={styles.pshskylinetwrrsfeaturedmeta}>
                    {pshskylinetwrrsfeatured?.pshskylinetwrrscity},{' '}
                    {pshskylinetwrrsfeatured?.pshskylinetwrrscountry}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 4,
                      backgroundColor: '#FFFFFF1A',
                      paddingHorizontal: 12,
                      paddingVertical: 7,
                      borderRadius: 14,
                    }}>
                    <Text style={styles.pshskylinetwrrsfeaturedmeta}>
                      <Text style={{color: '#FBBF24'}}> ★</Text>{' '}
                      {pshskylinetwrrsfeatured?.pshskylinetwrrsrating.toFixed(
                        1,
                      )}
                    </Text>
                  </View>
                </View>
              </View>
              <LinearGradient
                colors={[
                  'rgba(6, 11, 26, 0)',
                  'rgba(0, 0, 0, 0)',
                  'rgba(6, 11, 26, 0.95)',
                ]}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: '100%',
                }}
              />
            </ImageBackground>
          </Pressable>

          <Text style={styles.pshskylinetwrrssectiontitle}>Categories</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.pshskylinetwrrschipsrow}>
            {pshskylinetwrrscategories.map(pshskylinetwrrschip => {
              const pshskylinetwrrsactive =
                pshskylinetwrrschip.pshskylinetwrrskey ===
                pshskylinetwrrscategory;
              const pshskylinetwrrschipcontent = (
                <Text
                  style={
                    pshskylinetwrrsactive
                      ? styles.pshskylinetwrrschiptextactive
                      : styles.pshskylinetwrrschiptextidle
                  }>
                  {pshskylinetwrrschip.pshskylinetwrrslabel}
                </Text>
              );
              return (
                <Pressable
                  key={pshskylinetwrrschip.pshskylinetwrrskey}
                  onPress={() =>
                    pshskylinetwrrssetcategory(
                      pshskylinetwrrschip.pshskylinetwrrskey,
                    )
                  }
                  style={
                    pshskylinetwrrsactive
                      ? styles.pshskylinetwrrschipactivewrap
                      : styles.pshskylinetwrrschipidle
                  }>
                  {pshskylinetwrrsactive ? (
                    <LinearGradient
                      colors={['#2563EB', '#06B6D4']}
                      style={styles.pshskylinetwrrschipactivegradient}>
                      <View style={{padding: 10, paddingHorizontal: 16}}>
                        {pshskylinetwrrschipcontent}
                      </View>
                    </LinearGradient>
                  ) : (
                    pshskylinetwrrschipcontent
                  )}
                </Pressable>
              );
            })}
          </ScrollView>

          <Text style={styles.pshskylinetwrrssectiontitle}>
            Popular Worldwide
          </Text>
          <View style={styles.pshskylinetwrrslist}>
            {pshskylinetwrrslistitems.map(pshskylinetwrrsitem => (
              <Pressable
                key={pshskylinetwrrsitem.pshskylinetwrrsid}
                onPress={() => pshskylinetwrrsopenDetails(pshskylinetwrrsitem)}
                style={styles.pshskylinetwrrscard}>
                <View style={styles.pshskylinetwrrscardinner}>
                  <Image
                    source={pshskylinetwrrsitem.pshskylinetwrrsimage}
                    style={styles.pshskylinetwrrscardthumb}
                  />
                  <View style={styles.pshskylinetwrrscardcontent}>
                    <Text style={styles.pshskylinetwrrscardtitle}>
                      {pshskylinetwrrsitem.pshskylinetwrrsname}
                    </Text>
                    <Text style={styles.pshskylinetwrrscardsubtitle}>
                      {pshskylinetwrrsitem.pshskylinetwrrscity},{' '}
                      {pshskylinetwrrsitem.pshskylinetwrrscountry}
                    </Text>
                    <Text style={styles.pshskylinetwrrscardmeta}>
                      <Text style={{color: '#FBBF24'}}> ★</Text>{' '}
                      {pshskylinetwrrsitem.pshskylinetwrrsrating.toFixed(1)} ·
                      Built {pshskylinetwrrsitem.pshskylinetwrrsbuilt}
                    </Text>
                  </View>
                  <Pressable
                    hitSlop={10}
                    onPress={pshskylinetwrrsevent => {
                      (pshskylinetwrrsevent as any)?.stopPropagation?.();
                      pshskylinetwrrstogglesaved(
                        pshskylinetwrrsitem.pshskylinetwrrsid,
                      );
                    }}
                    style={[
                      styles.pshskylinetwrrsheartpill,
                      pshskylinetwrrssavedids.has(
                        pshskylinetwrrsitem.pshskylinetwrrsid,
                      ) && {
                        backgroundColor: '#EF444426',
                        borderColor: 'transparent',
                        borderWidth: 1,
                      },
                    ]}>
                    <Image
                      source={
                        pshskylinetwrrssavedids.has(
                          pshskylinetwrrsitem.pshskylinetwrrsid,
                        )
                          ? require('../../assets/i/pshskylinetwrrstlsvv.png')
                          : require('../../assets/i/pshskylinetwrrstlsvvd.png')
                      }
                      style={[
                        styles.pshskylinetwrrshearticon,
                        pshskylinetwrrssavedids.has(
                          pshskylinetwrrsitem.pshskylinetwrrsid,
                        )
                          ? styles.pshskylinetwrrshearticonsaved
                          : styles.pshskylinetwrrshearticonidle,
                      ]}
                    />
                  </Pressable>
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </Pshskylinetwrrsclay>
  );
};

export default Pshskylinetwrrsfacdes;

const styles = StyleSheet.create({
  pshskylinetwrrssearchinput: {
    flex: 1,
    color: '#FFFFFF12',
    fontSize: 14,
    paddingVertical: 0,
  },
  pshskylinetwrrsfeaturedwrapper: {
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 18,
  },
  pshskylinetwrrsfeaturedbg: {
    height: 220,
    padding: 16,
    flex: 1,
    justifyContent: 'space-between',
  },

  pshskylinetwrrscontainer: {
    flex: 1,
    backgroundColor: '#060B1A',
  },
  pshskylinetwrrsscrollcontent: {
    paddingHorizontal: 18,
    paddingBottom: 110,
  },
  pshskylinetwrrsheaderrow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  pshskylinetwrrsgreeting: {
    color: '#FFFFFF80',
    fontSize: 12,
    marginBottom: 4,
  },
  pshskylinetwrrstitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '900',
  },
  pshskylinetwrrsiconbutton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#FFFFFF12',
    borderWidth: 1,
    borderColor: '#FFFFFF1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pshskylinetwrrsiconbuttontext: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  pshskylinetwrrssearchwrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 14,
    backgroundColor: '#FFFFFF12',
    borderWidth: 1,
    borderColor: '#FFFFFF1A',
    marginBottom: 20,
  },
  pshskylinetwrrssearchicon: {
    color: '#7D869F',
    fontSize: 16,
  },

  pshskylinetwrrsfeaturedbadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#0E6BFF',
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },
  pshskylinetwrrsfeaturedbadgetext: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.4,
  },
  pshskylinetwrrsfeaturedfooter: {
    paddingTop: 12,
  },

  pshskylinetwrrsfeaturedname: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 4,
    zIndex: 1,
  },

  pshskylinetwrrsfeaturedmetarow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pshskylinetwrrsfeaturedmeta: {
    color: '#B8C0D3',
    fontSize: 13,
    zIndex: 1,
  },
  pshskylinetwrrssectiontitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 14,
    marginTop: 8,
    zIndex: 1,
  },
  pshskylinetwrrschipsrow: {
    paddingBottom: 6,
    gap: 10,
  },
  pshskylinetwrrschipidle: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: '#0B1224',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
  },

  pshskylinetwrrschipactivewrap: {
    borderRadius: 14,
    overflow: 'hidden',
  },
  pshskylinetwrrschipactivegradient: {
    height: 40,
    borderRadius: 14,
    justifyContent: 'center',
  },
  pshskylinetwrrschiptextidle: {
    color: '#C6CEE3',
    fontSize: 12,
    fontWeight: '700',
  },
  pshskylinetwrrschiptextactive: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  pshskylinetwrrslist: {
    gap: 12,
  },
  pshskylinetwrrscard: {
    borderRadius: 18,
    overflow: 'hidden',
  },

  pshskylinetwrrscardinner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    gap: 12,
    backgroundColor: '#FFFFFF0D',
    borderWidth: 1,
    borderColor: '#FFFFFF12',
  },
  pshskylinetwrrscardthumb: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: '#1F2A42',
  },

  pshskylinetwrrscardcontent: {
    flex: 1,
    minHeight: 56,
    justifyContent: 'center',
  },
  pshskylinetwrrscardtitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  pshskylinetwrrscardsubtitle: {
    color: '#FFFFFF80',
    fontSize: 11,
    marginBottom: 6,
  },

  pshskylinetwrrscardmeta: {
    color: '#FFFFFF80',
    fontSize: 11,
  },
  pshskylinetwrrsheartpill: {
    width: 38,
    height: 38,
    borderRadius: 14,
    backgroundColor: '#0B1224',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pshskylinetwrrshearticon: {
    width: 18,
    height: 18,
  },
  pshskylinetwrrshearticonidle: {
    tintColor: '#FFFFFF',
    opacity: 0.6,
  },
  pshskylinetwrrshearticonsaved: {
    opacity: 1,
  },
});
