//map screen
import Pshskylinetwrrsclay from '../Pshskylinetwrrscpnts/Pshskylinetwrrsclay';
import {pshskylinetwrrsallfacades} from '../Pshskylinetwrrsdata/pshskylinetwrrsfacdata';

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE, type Region} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Pshskylinetwrrsmap = () => {
  const pshskylinetwrrsnavigation = useNavigation();
  const pshskylinetwrrsroute = useRoute();
  const pshskylinetwrrsinsets = useSafeAreaInsets();
  const [pshskylinetwrrsselectedid, pshskylinetwrrssetselectedid] = useState<
    string | null
  >(null);
  const pshskylinetwrrsmarkertapref = useRef(false);
  const pshskylinetwrrsmapref = useRef<MapView | null>(null);

  const pshskylinetwrrsselected = useMemo(() => {
    if (!pshskylinetwrrsselectedid) {
      return null;
    }
    return (
      pshskylinetwrrsallfacades.find(
        i => i.pshskylinetwrrsid === pshskylinetwrrsselectedid,
      ) ?? null
    );
  }, [pshskylinetwrrsselectedid]);

  const pshskylinetwrrsinitialregion: Region = useMemo(
    () => ({
      latitude: 35,
      longitude: 15,
      latitudeDelta: 110,
      longitudeDelta: 110,
    }),
    [],
  );

  const pshskylinetwrrsrouteparamsref = useRef(pshskylinetwrrsroute.params);
  pshskylinetwrrsrouteparamsref.current = pshskylinetwrrsroute.params;

  useFocusEffect(
    useCallback(() => {
      const pshskylinetwrrsfocusid = (pshskylinetwrrsrouteparamsref.current as any)
        ?.pshskylinetwrrsfocusid as string | undefined;
      if (pshskylinetwrrsfocusid) {
        pshskylinetwrrssetselectedid(pshskylinetwrrsfocusid);
        const pshskylinetwrrsitem = pshskylinetwrrsallfacades.find(
          i => i.pshskylinetwrrsid === pshskylinetwrrsfocusid,
        );
        if (pshskylinetwrrsitem) {
          requestAnimationFrame(() => {
            pshskylinetwrrsmapref.current?.animateToRegion(
              {
                latitude:
                  pshskylinetwrrsitem.pshskylinetwrrscoordinates
                    .pshskylinetwrrslat,
                longitude:
                  pshskylinetwrrsitem.pshskylinetwrrscoordinates
                    .pshskylinetwrrslng,
                latitudeDelta: 1.2,
                longitudeDelta: 1.2,
              },
              450,
            );
          });
        }
        requestAnimationFrame(() => {
          (pshskylinetwrrsnavigation as any).setParams?.({
            pshskylinetwrrsfocusid: undefined,
          });
        });
      }
      return () => {
        pshskylinetwrrssetselectedid(null);
      };
    }, [pshskylinetwrrsnavigation]),
  );

  const pshskylinetwrrsopendetails = () => {
    if (!pshskylinetwrrsselected) {
      return;
    }
    pshskylinetwrrssetselectedid(null);
    const pshskylinetwrrsrootNav =
      (pshskylinetwrrsnavigation as any).getParent?.()?.getParent?.() ??
      (pshskylinetwrrsnavigation as any).getParent?.() ??
      pshskylinetwrrsnavigation;
    pshskylinetwrrsrootNav.navigate('Pshskylinetwrrsfacddtl', {
      pshskylinetwrrsitem: pshskylinetwrrsselected,
    });
  };

  return (
    <Pshskylinetwrrsclay biigctsandbyonndlayScroll={false} bounce={false}>
      <View style={styles.pshskylinetwrrscontainer}>
        <View
          style={[
            styles.pshskylinetwrrsheader,
            {paddingTop: pshskylinetwrrsinsets.top + 14},
          ]}>
          <Text style={styles.pshskylinetwrrsheadertitle}>World Map</Text>
        </View>

        <MapView
          ref={pshskylinetwrrsmapref}
          provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
          userInterfaceStyle="dark"
          style={styles.pshskylinetwrrsmap}
          initialRegion={pshskylinetwrrsinitialregion}
          customMapStyle={pshskylinetwrrsmapstyle}
          onPress={() => {
            if (pshskylinetwrrsmarkertapref.current) {
              pshskylinetwrrsmarkertapref.current = false;
              return;
            }
            pshskylinetwrrssetselectedid(null);
          }}>
          {pshskylinetwrrsallfacades.map(pshskylinetwrrsitem => {
            const pshskylinetwrrsactive =
              pshskylinetwrrsitem.pshskylinetwrrsid ===
              pshskylinetwrrsselectedid;
            return (
              <Marker
                key={pshskylinetwrrsitem.pshskylinetwrrsid}
                coordinate={{
                  latitude:
                    pshskylinetwrrsitem.pshskylinetwrrscoordinates
                      .pshskylinetwrrslat,
                  longitude:
                    pshskylinetwrrsitem.pshskylinetwrrscoordinates
                      .pshskylinetwrrslng,
                }}
                onPress={() => {
                  pshskylinetwrrsmarkertapref.current = true;
                  pshskylinetwrrssetselectedid(
                    pshskylinetwrrsitem.pshskylinetwrrsid,
                  );
                }}>
                {Platform.OS === 'android' ? null : (
                  <Image
                    source={require('../../assets/i/pshskylinetwrrmark.png')}
                  />
                )}
              </Marker>
            );
          })}
        </MapView>

        {pshskylinetwrrsselected ? (
          <View
            style={[
              styles.pshskylinetwrrsbottomsheet,
              {paddingBottom: Math.max(20, pshskylinetwrrsinsets.bottom + 12)},
            ]}>
            <View style={styles.pshskylinetwrrsbottomhandle} />
            <Pressable
              onPress={() => pshskylinetwrrssetselectedid(null)}
              style={styles.pshskylinetwrrsclose}>
              <Image source={require('../../assets/i/pshskylinetwrrcls.png')} />
            </Pressable>

            <View style={styles.pshskylinetwrrsbottomrow}>
              <Image
                source={pshskylinetwrrsselected.pshskylinetwrrsimage}
                style={styles.pshskylinetwrrsthumb}
              />
              <View style={styles.pshskylinetwrrsbottomcontent}>
                <View style={styles.pshskylinetwrrscategorypill}>
                  <Text style={styles.pshskylinetwrrscategorypilltext}>
                    {pshskylinetwrrsselected.pshskylinetwrrscategory}
                  </Text>
                </View>
                <Text style={styles.pshskylinetwrrsname}>
                  {pshskylinetwrrsselected.pshskylinetwrrsname}
                </Text>
                <Text style={styles.pshskylinetwrrslocation}>
                  {pshskylinetwrrsselected.pshskylinetwrrscity},{' '}
                  {pshskylinetwrrsselected.pshskylinetwrrscountry}
                </Text>
                <Text style={styles.pshskylinetwrrsmeta}>
                  <Text style={styles.pshskylinetwrrsmetastar}> ★</Text>{' '}
                  {pshskylinetwrrsselected.pshskylinetwrrsrating.toFixed(1)} ·{' '}
                  {pshskylinetwrrsselected.pshskylinetwrrsbuilt}
                </Text>
              </View>
            </View>

            <Pressable
              onPress={pshskylinetwrrsopendetails}
              style={styles.pshskylinetwrrsprimarywrap}>
              <LinearGradient
                colors={['#2563EB', '#06B6D4']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.pshskylinetwrrsprimary}>
                <Text style={styles.pshskylinetwrrsprimarytext}>
                  View Details
                </Text>
                <Image
                  source={require('../../assets/i/pshskylinetwrrstnexar.png')}
                />
              </LinearGradient>
            </Pressable>
          </View>
        ) : null}
      </View>
    </Pshskylinetwrrsclay>
  );
};

export default Pshskylinetwrrsmap;

const styles = StyleSheet.create({
  pshskylinetwrrsbottomsheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 78,
    backgroundColor: '#0B1224',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    paddingHorizontal: 16,
    paddingTop: 10,
    zIndex: 3,
    minHeight: 260,
  },

  pshskylinetwrrsbottomhandle: {
    alignSelf: 'center',
    width: 56,
    height: 4,
    borderRadius: 99,
    marginBottom: 10,
  },

  pshskylinetwrrscontainer: {
    flex: 1,
    backgroundColor: '#060B1A',
  },
  pshskylinetwrrsheader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    paddingHorizontal: 18,
  },
  pshskylinetwrrsheadertitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
  },
  pshskylinetwrrsmap: {
    flex: 1,
  },
  pshskylinetwrrsmarkerouter: {
    width: 14,
    height: 14,
    borderRadius: 10,
    backgroundColor: '#2563EB55',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pshskylinetwrrsmarkerouteractive: {
    width: 18,
    height: 18,
    backgroundColor: '#00D4FF55',
  },
  pshskylinetwrrsmarkerinner: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#60A5FA',
  },
  pshskylinetwrrsmarkerinneractive: {
    backgroundColor: '#00D4FF',
  },
  pshskylinetwrrsmarkerimage: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
  },
  pshskylinetwrrsmarkerimageactive: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },

  pshskylinetwrrsclose: {
    position: 'absolute',
    top: 10,
    right: 12,
    width: 32,
    height: 32,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pshskylinetwrrsclosetext: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    marginTop: -1,
  },
  pshskylinetwrrsbottomrow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    paddingTop: 6,
    paddingBottom: 14,
  },
  pshskylinetwrrsthumb: {
    width: 70,
    height: 70,
    borderRadius: 14,
  },
  pshskylinetwrrsbottomcontent: {
    flex: 1,
  },
  pshskylinetwrrscategorypill: {
    alignSelf: 'flex-start',
    backgroundColor: '#2563EB4D',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    marginBottom: 6,
  },
  pshskylinetwrrscategorypilltext: {
    color: '#93C5FD',
    fontSize: 10,
    fontWeight: '600',
  },
  pshskylinetwrrsname: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 2,
  },
  pshskylinetwrrslocation: {
    color: '#FFFFFF80',
    fontSize: 12,
    marginBottom: 4,
  },
  pshskylinetwrrsmeta: {
    color: '#FFFFFF80',
    fontSize: 12,
  },
  pshskylinetwrrsmetastar: {
    color: '#FBBF24',
  },
  pshskylinetwrrsprimarywrap: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 6,
    marginTop: 8,
  },
  pshskylinetwrrsprimary: {
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  pshskylinetwrrsprimarytext: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },
});

const pshskylinetwrrsmapstyle = [
  {elementType: 'geometry', stylers: [{color: '#0B1224'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#6B7280'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#0B1224'}]},
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{color: '#111827'}],
  },
  {featureType: 'poi', stylers: [{visibility: 'off'}]},
  {featureType: 'road', stylers: [{visibility: 'off'}]},
  {featureType: 'transit', stylers: [{visibility: 'off'}]},
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#020810'}],
  },
];
