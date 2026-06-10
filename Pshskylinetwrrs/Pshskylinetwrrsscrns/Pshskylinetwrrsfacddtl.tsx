// fact details screen

import Pshskylinetwrrsclay from '../Pshskylinetwrrscpnts/Pshskylinetwrrsclay';

import {
  pshskylinetwrrsIsSaved,
  pshskylinetwrrsSetSaved,
} from '../Pshskylinetwrrsdata/pshskylinetwrrssvd';

import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

type pshskylinetwrrsFacadeItem = {
  pshskylinetwrrsid: string;
  pshskylinetwrrscategory: 'Gothic' | 'Futuristic' | 'Historical';
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

const Pshskylinetwrrsfacddtl = () => {
  const pshskylinetwrrsnavigation = useNavigation();
  const pshskylinetwrrsinsets = useSafeAreaInsets();
  const pshskylinetwrrsroute = useRoute() as any;
  const pshskylinetwrrsitem = (pshskylinetwrrsroute?.params
    ?.pshskylinetwrrsitem ?? null) as pshskylinetwrrsFacadeItem | null;

  const [pshskylinetwrrssaved, pshskylinetwrrssetsaved] = useState(false);
  const [pshskylinetwrrssavebusy, pshskylinetwrrssetsavebusy] = useState(false);

  const pshskylinetwrrstitle =
    pshskylinetwrrsitem?.pshskylinetwrrsname ?? 'Facade';
  const pshskylinetwrrslocation = pshskylinetwrrsitem
    ? `${pshskylinetwrrsitem.pshskylinetwrrscity}, ${pshskylinetwrrsitem.pshskylinetwrrscountry}`
    : '';
  const pshskylinetwrrsrating = useMemo(
    () => pshskylinetwrrsitem?.pshskylinetwrrsrating ?? 4.6,
    [pshskylinetwrrsitem],
  );
  const pshskylinetwrrsbuilt = pshskylinetwrrsitem?.pshskylinetwrrsbuilt ?? '—';
  const pshskylinetwrrscategory =
    pshskylinetwrrsitem?.pshskylinetwrrscategory ?? 'Gothic';

  useEffect(() => {
    let pshskylinetwrrsmounted = true;
    if (!pshskylinetwrrsitem?.pshskylinetwrrsid) {
      return () => {
        pshskylinetwrrsmounted = false;
      };
    }
    pshskylinetwrrsIsSaved(pshskylinetwrrsitem.pshskylinetwrrsid)
      .then(pshskylinetwrrsval => {
        if (pshskylinetwrrsmounted) {
          pshskylinetwrrssetsaved(pshskylinetwrrsval);
        }
      })
      .catch(() => {});
    return () => {
      pshskylinetwrrsmounted = false;
    };
  }, [pshskylinetwrrsitem?.pshskylinetwrrsid]);

  const pshskylinetwrrstogglesaved = useCallback(async () => {
    if (!pshskylinetwrrsitem?.pshskylinetwrrsid || pshskylinetwrrssavebusy) {
      return;
    }
    try {
      pshskylinetwrrssetsavebusy(true);
      const pshskylinetwrrsnext = await pshskylinetwrrsSetSaved(
        pshskylinetwrrsitem.pshskylinetwrrsid,
        !pshskylinetwrrssaved,
      );
      pshskylinetwrrssetsaved(pshskylinetwrrsnext);
    } finally {
      pshskylinetwrrssetsavebusy(false);
    }
  }, [
    pshskylinetwrrsitem?.pshskylinetwrrsid,
    pshskylinetwrrssaved,
    pshskylinetwrrssavebusy,
  ]);

  const pshskylinetwrrsopengdirections = useCallback(() => {
    if (!pshskylinetwrrsitem?.pshskylinetwrrsid) {
      return;
    }
    (pshskylinetwrrsnavigation as any).navigate('Pshskylinetwrrstaabs', {
      screen: 'Pshskylinetwrrsmap',
      params: {
        pshskylinetwrrsfocusid: pshskylinetwrrsitem.pshskylinetwrrsid,
      },
    });
  }, [pshskylinetwrrsnavigation, pshskylinetwrrsitem]);

  const pshskylinetwrrshandleshare = useCallback(async () => {
    if (!pshskylinetwrrsitem) {
      return;
    }
    const pshskylinetwrrscoords = `${pshskylinetwrrsitem.pshskylinetwrrscoordinates.pshskylinetwrrslat}, ${pshskylinetwrrsitem.pshskylinetwrrscoordinates.pshskylinetwrrslng}`;
    const pshskylinetwrrstext = `${pshskylinetwrrsitem.pshskylinetwrrsname}\n${
      pshskylinetwrrsitem.pshskylinetwrrscity
    }, ${pshskylinetwrrsitem.pshskylinetwrrscountry}\nBuilt: ${
      pshskylinetwrrsitem.pshskylinetwrrsbuilt
    }\nRating: ${pshskylinetwrrsitem.pshskylinetwrrsrating.toFixed(
      1,
    )}\nCoordinates: ${pshskylinetwrrscoords}`;
    try {
      await Share.share({message: pshskylinetwrrstext});
    } catch {
      console.log('Error');
    }
  }, [pshskylinetwrrsitem]);

  return (
    <Pshskylinetwrrsclay bounce={false}>
      <View style={{paddingBottom: 40}}>
        <ImageBackground
          source={pshskylinetwrrsitem?.pshskylinetwrrsimage}
          style={styles.pshskylinetwrrshero}>
          <View
            style={[
              styles.pshskylinetwrrsherotoprow,
              {paddingTop: pshskylinetwrrsinsets.top + 10},
            ]}>
            <Pressable
              onPress={() => (pshskylinetwrrsnavigation as any).goBack?.()}
              style={styles.pshskylinetwrrsherobutton}>
              <Image
                source={require('../../assets/i/pshskylinetwrrstsback.png')}
              />
            </Pressable>
            <View style={styles.pshskylinetwrrsheroright}>
              <Pressable
                onPress={pshskylinetwrrshandleshare}
                style={styles.pshskylinetwrrsherobutton}>
                <Image
                  source={require('../../assets/i/pshskylinetwrrstsshr.png')}
                />
              </Pressable>
              <Pressable
                onPress={pshskylinetwrrstogglesaved}
                style={styles.pshskylinetwrrsherobutton}>
                <Image
                  source={require('../../assets/i/pshskylinetwrrstselik.png')}
                  style={{
                    tintColor: pshskylinetwrrssaved ? '#EF4444' : '#FFFFFF',
                    opacity: pshskylinetwrrssaved ? 1 : 0.7,
                  }}
                />
              </Pressable>
            </View>
          </View>
          <LinearGradient
            colors={['#060B1A66', '#00000000', '#060B1AD9']}
            style={{
              position: 'absolute',
              bottom: 0,
              height: 320,
              width: '100%',
            }}
          />
          <LinearGradient
            colors={['#0E6BFF', '#00D4FF']}
            style={styles.pshskylinetwrrscategorypill}>
            <View
              style={{
                paddingHorizontal: 14,
                paddingVertical: 10,
                borderRadius: 14,
                zIndex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.pshskylinetwrrscategorypilltext}>
                {pshskylinetwrrscategory}
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>

        <View style={styles.pshskylinetwrrscontent}>
          <Text style={styles.pshskylinetwrrstitle}>
            {pshskylinetwrrstitle}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              marginBottom: 14,
              marginTop: 4,
            }}>
            <Image
              source={require('../../assets/i/pshskylinetwrrstslocc.png')}
            />
            <Text style={styles.pshskylinetwrrslocation}>
              {pshskylinetwrrslocation}
            </Text>
          </View>

          <View style={styles.pshskylinetwrrsstatsrow}>
            <View style={styles.pshskylinetwrrsstatcard}>
              <Text style={{color: '#FBBF24', marginBottom: 4}}>★</Text>
              <Text style={styles.pshskylinetwrrsstatvalue}>
                {pshskylinetwrrsrating.toFixed(1)}
              </Text>
              <Text style={styles.pshskylinetwrrsstatlabel}>Rating</Text>
            </View>
            <View style={styles.pshskylinetwrrsstatcard}>
              <Image
                source={require('../../assets/i/pshskylinetwrrstsbuild.png')}
                style={{marginBottom: 5}}
              />
              <Text style={styles.pshskylinetwrrsstatvalue}>
                {pshskylinetwrrsbuilt}
              </Text>
              <Text style={styles.pshskylinetwrrsstatlabel}>Built</Text>
            </View>
          </View>

          <Text style={styles.pshskylinetwrrssectiontitle}>About</Text>
          <Text style={styles.pshskylinetwrrsbody}>
            {pshskylinetwrrsitem?.pshskylinetwrrsdescription ?? '—'}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              marginTop: 16,
            }}>
            <Image
              source={require('../../assets/i/pshskylinetwrrstsfcts.png')}
            />
            <Text style={[styles.pshskylinetwrrssectiontitle]}>
              Quick Facts
            </Text>
          </View>

          <View style={styles.pshskylinetwrrsfactslist}>
            {(pshskylinetwrrsitem?.pshskylinetwrrsfacts ?? []).map(
              (pshskylinetwrrsfact, pshskylinetwrrsindex) => (
                <View
                  key={`${pshskylinetwrrsindex}-${pshskylinetwrrsfact}`}
                  style={styles.pshskylinetwrrsfactrow}>
                  <LinearGradient
                    colors={['#0E6BFF', '#00D4FF']}
                    style={styles.pshskylinetwrrsfactbadge}>
                    <Text style={styles.pshskylinetwrrsfactbadgetext}>
                      {pshskylinetwrrsindex + 1}
                    </Text>
                  </LinearGradient>
                  <Text style={styles.pshskylinetwrrsfacttext}>
                    {pshskylinetwrrsfact}
                  </Text>
                </View>
              ),
            )}
          </View>

          <View style={styles.pshskylinetwrrsbottomrow}>
            <Pressable
              onPress={pshskylinetwrrsopengdirections}
              style={styles.pshskylinetwrrssecondarybutton}>
              <Image
                source={require('../../assets/i/pshskylinetwrrstlocdet.png')}
              />
              <Text style={styles.pshskylinetwrrssecondarybuttontext}>
                Get Directions
              </Text>
            </Pressable>

            <Pressable
              onPress={pshskylinetwrrstogglesaved}
              style={[
                styles.pshskylinetwrrsprimarybuttonwrap,
                pshskylinetwrrssaved && {
                  borderColor: '#EF44444D',
                  borderWidth: 1,
                },
              ]}>
              <LinearGradient
                colors={
                  pshskylinetwrrssaved
                    ? ['#EF444426', '#EF444426']
                    : ['#00B4FF', '#00D4FF']
                }
                style={[styles.pshskylinetwrrsprimarybutton]}>
                <Image
                  source={
                    pshskylinetwrrssaved
                      ? require('../../assets/i/pshskylinetwrrstssaveddet.png')
                      : require('../../assets/i/pshskylinetwrrstsavdet.png')
                  }
                />
                <Text
                  style={[
                    styles.pshskylinetwrrsprimarybuttontext,
                    pshskylinetwrrssaved && {color: '#FCA5A5'},
                  ]}>
                  {pshskylinetwrrssaved ? 'Saved' : 'Save'}
                </Text>
              </LinearGradient>
            </Pressable>
          </View>
        </View>
      </View>
    </Pshskylinetwrrsclay>
  );
};

export default Pshskylinetwrrsfacddtl;

const styles = StyleSheet.create({
  pshskylinetwrrstitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 6,
  },

  pshskylinetwrrslocation: {
    color: '#A9B2C7',
    fontSize: 13,
  },

  pshskylinetwrrscontainer: {
    flex: 1,
    backgroundColor: '#060B1A',
  },
  pshskylinetwrrshero: {
    height: 300,
    width: '100%',
  },
  pshskylinetwrrsherotoprow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    zIndex: 1,
  },
  pshskylinetwrrsheroright: {
    flexDirection: 'row',
    gap: 10,
  },
  pshskylinetwrrsherobutton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#060B1A99',
    borderWidth: 1,
    borderColor: '#FFFFFF26',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pshskylinetwrrsherobuttontext: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  pshskylinetwrrscontent: {
    marginTop: 20,
    paddingHorizontal: 18,
  },

  pshskylinetwrrscategorypill: {
    borderRadius: 14,
    marginBottom: 12,
    position: 'absolute',
    bottom: 10,
    left: 20,
    zIndex: 1,
  },
  pshskylinetwrrscategorypilltext: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },

  pshskylinetwrrsstatsrow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 14,
  },
  pshskylinetwrrsstatcard: {
    flex: 1,
    backgroundColor: '#0B1224',
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pshskylinetwrrsstatvalue: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 4,
  },
  pshskylinetwrrsstatlabel: {
    color: '#FFFFFF66',
    fontSize: 10,
    fontWeight: '400',
  },
  pshskylinetwrrssectiontitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 8,
    marginTop: 8,
  },
  pshskylinetwrrsbody: {
    color: '#FFFFFFA6',
    fontSize: 14,
    lineHeight: 22,
  },
  pshskylinetwrrsfactslist: {
    gap: 10,
    marginTop: 8,
  },
  pshskylinetwrrsfactrow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    backgroundColor: '#FFFFFF0A',
    borderWidth: 1,
    borderColor: '#FFFFFF0F',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },

  pshskylinetwrrsfactbadge: {
    width: 26,
    height: 26,
    borderRadius: 10,
    backgroundColor: '#0E6BFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pshskylinetwrrsfactbadgetext: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
  },
  pshskylinetwrrsfacttext: {
    flex: 1,
    color: '#C6CEE3',
    fontSize: 13,
    lineHeight: 18,
  },
  pshskylinetwrrsbottomrow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 18,
  },
  pshskylinetwrrssecondarybutton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#FFFFFF1A',
    borderRadius: 14,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF12',
    flexDirection: 'row',
    gap: 10,
  },

  pshskylinetwrrssecondarybuttontext: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  pshskylinetwrrsprimarybuttonwrap: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
  },
  pshskylinetwrrsprimarybutton: {
    height: 50,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pshskylinetwrrsprimarybuttontext: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});
