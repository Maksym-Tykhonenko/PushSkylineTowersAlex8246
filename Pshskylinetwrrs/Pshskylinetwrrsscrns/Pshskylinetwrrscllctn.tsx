import {pshskylinetwrrsallfacades} from '../Pshskylinetwrrsdata/pshskylinetwrrsfacdata';

import {
  pshskylinetwrrsGetSavedIds,
  pshskylinetwrrsSetSaved,
} from '../Pshskylinetwrrsdata/pshskylinetwrrssvd';
import LinearGradient from 'react-native-linear-gradient';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo, useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Pshskylinetwrrsclay from '../Pshskylinetwrrscpnts/Pshskylinetwrrsclay';

const Pshskylinetwrrscllctn = () => {
  const pshskylinetwrrsnavigation = useNavigation();
  const pshskylinetwrrsinsets = useSafeAreaInsets();
  const [pshskylinetwrrssavedids, pshskylinetwrrssetsavedids] = useState<
    Set<string>
  >(new Set());
  const [pshskylinetwrrsdemoremoved, pshskylinetwrrssetdemoremoved] = useState<
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

  const pshskylinetwrrssaveditems = useMemo(() => {
    return pshskylinetwrrsallfacades.filter(pshskylinetwrrsitem =>
      pshskylinetwrrssavedids.has(pshskylinetwrrsitem.pshskylinetwrrsid),
    );
  }, [pshskylinetwrrssavedids]);

  const pshskylinetwrrsisdemomode = pshskylinetwrrssaveditems.length === 0;

  const pshskylinetwrrsgriditems = useMemo(() => {
    if (pshskylinetwrrsisdemomode) {
      return pshskylinetwrrsallfacades
        .slice(0, 2)
        .filter(
          pshskylinetwrrsitem =>
            !pshskylinetwrrsdemoremoved.has(
              pshskylinetwrrsitem.pshskylinetwrrsid,
            ),
        );
    }
    return pshskylinetwrrssaveditems;
  }, [
    pshskylinetwrrsisdemomode,
    pshskylinetwrrssaveditems,
    pshskylinetwrrsdemoremoved,
  ]);

  const pshskylinetwrrscountriescount = useMemo(() => {
    return new Set(
      pshskylinetwrrsgriditems.map(pshskylinetwrrsitem =>
        pshskylinetwrrsitem.pshskylinetwrrscountry.toLowerCase(),
      ),
    ).size;
  }, [pshskylinetwrrsgriditems]);

  const pshskylinetwrrscategoriescount = useMemo(() => {
    return new Set(pshskylinetwrrsgriditems.map(i => i.pshskylinetwrrscategory))
      .size;
  }, [pshskylinetwrrsgriditems]);

  const pshskylinetwrrsopendetails = useCallback(
    (pshskylinetwrrsid: string) => {
      const pshskylinetwrrsitem = pshskylinetwrrsallfacades.find(
        i => i.pshskylinetwrrsid === pshskylinetwrrsid,
      );
      if (!pshskylinetwrrsitem) {
        return;
      }
      const pshskylinetwrrsrootNav =
        (pshskylinetwrrsnavigation as any).getParent?.()?.getParent?.() ??
        (pshskylinetwrrsnavigation as any).getParent?.() ??
        pshskylinetwrrsnavigation;
      pshskylinetwrrsrootNav.navigate('Pshskylinetwrrsfacddtl', {
        pshskylinetwrrsitem,
      });
    },
    [pshskylinetwrrsnavigation],
  );

  const pshskylinetwrrsremove = useCallback(
    async (pshskylinetwrrsid: string) => {
      if (pshskylinetwrrsisdemomode) {
        pshskylinetwrrssetdemoremoved(pshskylinetwrrsprev => {
          const pshskylinetwrrsnext = new Set(pshskylinetwrrsprev);
          pshskylinetwrrsnext.add(pshskylinetwrrsid);
          return pshskylinetwrrsnext;
        });
        return;
      }
      pshskylinetwrrssetsavedids(pshskylinetwrrsprev => {
        const pshskylinetwrrsnext = new Set(pshskylinetwrrsprev);
        pshskylinetwrrsnext.delete(pshskylinetwrrsid);
        return pshskylinetwrrsnext;
      });
      try {
        await pshskylinetwrrsSetSaved(pshskylinetwrrsid, false);
      } catch {
        pshskylinetwrrsGetSavedIds()
          .then(pshskylinetwrrsset =>
            pshskylinetwrrssetsavedids(pshskylinetwrrsset),
          )
          .catch(() => {});
      }
    },
    [pshskylinetwrrsisdemomode],
  );

  const pshskylinetwrrsshare = useCallback(
    async (pshskylinetwrrsid: string) => {
      const pshskylinetwrrsitem = pshskylinetwrrsallfacades.find(
        i => i.pshskylinetwrrsid === pshskylinetwrrsid,
      );
      if (!pshskylinetwrrsitem) {
        return;
      }
      const pshskylinetwrrscoords = `${pshskylinetwrrsitem.pshskylinetwrrscoordinates.pshskylinetwrrslat}, ${pshskylinetwrrsitem.pshskylinetwrrscoordinates.pshskylinetwrrslng}`;
      const pshskylinetwrrstext = `${
        pshskylinetwrrsitem.pshskylinetwrrsname
      }\n${pshskylinetwrrsitem.pshskylinetwrrscity}, ${
        pshskylinetwrrsitem.pshskylinetwrrscountry
      }\nBuilt: ${
        pshskylinetwrrsitem.pshskylinetwrrsbuilt
      }\nRating: ${pshskylinetwrrsitem.pshskylinetwrrsrating.toFixed(
        1,
      )}\nCoordinates: ${pshskylinetwrrscoords}`;
      try {
        await Share.share({message: pshskylinetwrrstext});
      } catch {
        console.log('Error');
      }
    },
    [],
  );

  return (
    <Pshskylinetwrrsclay>
      <View
        style={[
          styles.pshskylinetwrrscontainer,
          {paddingTop: pshskylinetwrrsinsets.top + 15},
        ]}>
        <Text style={styles.pshskylinetwrrstitle}>My Collection</Text>
        <Text style={styles.pshskylinetwrrssubtitle}>
          {pshskylinetwrrsgriditems.length} saved{' '}
          {pshskylinetwrrsgriditems.length === 1 ? 'facade' : 'facades'}
        </Text>

        <View style={styles.pshskylinetwrrsstatsrow}>
          <View style={styles.pshskylinetwrrsstatcard}>
            <Text style={styles.pshskylinetwrrsstatvalue}>
              {pshskylinetwrrsgriditems.length}
            </Text>
            <Text style={styles.pshskylinetwrrsstatlabel}>Saved</Text>
          </View>
          <View style={styles.pshskylinetwrrsstatcard}>
            <Text style={[styles.pshskylinetwrrsstatvalue, {color: '#06B6D4'}]}>
              {pshskylinetwrrscountriescount}
            </Text>
            <Text style={styles.pshskylinetwrrsstatlabel}>Countries</Text>
          </View>
          <View style={styles.pshskylinetwrrsstatcard}>
            <Text style={styles.pshskylinetwrrsstatvalue}>
              {pshskylinetwrrscategoriescount}
            </Text>
            <Text style={styles.pshskylinetwrrsstatlabel}>Categories</Text>
          </View>
        </View>

        <View style={styles.pshskylinetwrrsgrid}>
          {pshskylinetwrrsgriditems.map(pshskylinetwrrsitem => (
            <Pressable
              key={pshskylinetwrrsitem.pshskylinetwrrsid}
              onPress={() =>
                pshskylinetwrrsopendetails(
                  pshskylinetwrrsitem.pshskylinetwrrsid,
                )
              }
              style={styles.pshskylinetwrrscardwrap}>
              <ImageBackground
                source={pshskylinetwrrsitem.pshskylinetwrrsimage}
                style={styles.pshskylinetwrrscard}
                imageStyle={styles.pshskylinetwrrscardimage}>
                <View style={styles.pshskylinetwrrscardactions}>
                  <Pressable
                    hitSlop={10}
                    onPress={pshskylinetwrrsevent => {
                      (pshskylinetwrrsevent as any)?.stopPropagation?.();
                      pshskylinetwrrsshare(
                        pshskylinetwrrsitem.pshskylinetwrrsid,
                      );
                    }}
                    style={styles.pshskylinetwrrsactioncircle}>
                    <Image
                      source={require('../../assets/i/pshskylinetwrrstsshr.png')}
                    />
                  </Pressable>
                  <Pressable
                    hitSlop={10}
                    onPress={pshskylinetwrrsevent => {
                      (pshskylinetwrrsevent as any)?.stopPropagation?.();
                      pshskylinetwrrsremove(
                        pshskylinetwrrsitem.pshskylinetwrrsid,
                      );
                    }}
                    style={[
                      styles.pshskylinetwrrsactioncircle,
                      styles.pshskylinetwrrsactioncircledanger,
                    ]}>
                    <Image
                      source={require('../../assets/i/pshskylinetwrrstldel.png')}
                    />
                  </Pressable>
                </View>

                <LinearGradient
                  colors={['#060B1A00', '#060B1AE5']}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    height: 120,
                    width: '100%',
                  }}
                />
                <View style={styles.pshskylinetwrrscardfooter}>
                  <Text style={styles.pshskylinetwrrscardtitle}>
                    {pshskylinetwrrsitem.pshskylinetwrrsname}
                  </Text>
                  <Text style={styles.pshskylinetwrrscardsubtitle}>
                    {pshskylinetwrrsitem.pshskylinetwrrscountry}
                  </Text>
                </View>
              </ImageBackground>
            </Pressable>
          ))}
        </View>
      </View>
    </Pshskylinetwrrsclay>
  );
};

export default Pshskylinetwrrscllctn;

const styles = StyleSheet.create({
  pshskylinetwrrsactioncircledanger: {
    backgroundColor: '#EF444426',
    borderColor: 'transparent',
  },

  pshskylinetwrrsactiondangertext: {
    fontSize: 14,
  },

  pshskylinetwrrscontainer: {
    paddingHorizontal: 18,
    paddingBottom: 110,
  },
  pshskylinetwrrstitle: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '900',
  },
  pshskylinetwrrssubtitle: {
    color: '#FFFFFF80',
    fontSize: 12,
    marginTop: 6,
    marginBottom: 24,
  },
  pshskylinetwrrsstatsrow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  pshskylinetwrrsstatcard: {
    flex: 1,
    height: 78,
    backgroundColor: '#FFFFFF0D',
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pshskylinetwrrsstatvalue: {
    color: '#3B82F6',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 4,
  },
  pshskylinetwrrsstatlabel: {
    color: '#FFFFFF66',
    fontSize: 11,
    fontWeight: '400',
  },
  pshskylinetwrrsgrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 6,
  },
  pshskylinetwrrscardwrap: {
    width: '48%',
  },
  pshskylinetwrrscard: {
    height: 220,
    borderRadius: 18,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  pshskylinetwrrscardimage: {
    borderRadius: 22,
  },
  pshskylinetwrrscardactions: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    gap: 8,
    zIndex: 2,
  },
  pshskylinetwrrsactioncircle: {
    width: 30,
    height: 30,
    borderRadius: 16,
    backgroundColor: '#060B1AB2',
    borderWidth: 1,
    borderColor: '#FFFFFF26',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pshskylinetwrrscardfooter: {
    paddingHorizontal: 12,
    paddingBottom: 14,
    flex: 1,
    justifyContent: 'flex-end',
  },

  pshskylinetwrrscardtitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 3,
  },
  pshskylinetwrrscardsubtitle: {
    color: '#FFFFFF80',
    fontSize: 10,
  },
});
