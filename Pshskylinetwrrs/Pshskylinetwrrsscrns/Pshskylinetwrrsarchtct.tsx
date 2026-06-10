import {pshskylinetwrrsarticles} from '../Pshskylinetwrrsdata/pshskylinetwrrsarchdata';

import {useNavigation} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Pshskylinetwrrsclay from '../Pshskylinetwrrscpnts/Pshskylinetwrrsclay';

const Pshskylinetwrrsarchtct = () => {
  const pshskylinetwrrsnavigation = useNavigation();
  const pshskylinetwrrsinsets = useSafeAreaInsets();

  const pshskylinetwrrstrending = useMemo(
    () => pshskylinetwrrsarticles.filter(a => a.pshskylinetwrrstrending),
    [],
  );

  const pshskylinetwrrsopen = (pshskylinetwrrsid: string) => {
    const pshskylinetwrrsrootNav =
      (pshskylinetwrrsnavigation as any).getParent?.()?.getParent?.() ??
      (pshskylinetwrrsnavigation as any).getParent?.() ??
      pshskylinetwrrsnavigation;
    pshskylinetwrrsrootNav.navigate('Pshskylinetwrrsarchtdtl', {
      pshskylinetwrrsid,
    });
  };

  return (
    <Pshskylinetwrrsclay>
      <View
        style={[
          styles.pshskylinetwrrscontainer,
          {paddingTop: pshskylinetwrrsinsets.top + 14},
        ]}>
        <Text style={styles.pshskylinetwrrstitle}>Architecture Blog</Text>
        <Text style={styles.pshskylinetwrrssubtitle}>
          Stories, history & design
        </Text>

        <View style={styles.pshskylinetwrrsrowheader}>
          <Image source={require('../../assets/i/pshskylinetren.png')} />
          <Text style={styles.pshskylinetwrrsrowheadertitle}>Trending</Text>
        </View>

        <View style={styles.pshskylinetwrrstrendingrow}>
          {pshskylinetwrrstrending.slice(0, 2).map(pshskylinetwrrsitem => (
            <Pressable
              key={pshskylinetwrrsitem.pshskylinetwrrsid}
              onPress={() =>
                pshskylinetwrrsopen(pshskylinetwrrsitem.pshskylinetwrrsid)
              }
              style={styles.pshskylinetwrrstrendingcard}>
              <View style={styles.pshskylinetwrrstrendingcardinner}>
                <Text
                  style={styles.pshskylinetwrrsarticlecardtitle}
                  numberOfLines={2}>
                  {pshskylinetwrrsitem.pshskylinetwrrstitle}
                </Text>
                <Text
                  style={styles.pshskylinetwrrsarticlecardsubtitle}
                  numberOfLines={2}>
                  {pshskylinetwrrsitem.pshskylinetwrrssubtitle}
                </Text>

                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                  <Image
                    source={require('../../assets/i/pshskylinetwtim.png')}
                  />
                  <Text style={styles.pshskylinetwrrsarticlecardmeta}>
                    {pshskylinetwrrsitem.pshskylinetwrrsreadingtime}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>

        <View
          style={[
            styles.pshskylinetwrrsrowheader,
            {justifyContent: 'space-between'},
          ]}>
          <Text style={styles.pshskylinetwrrsrowheadertitle}>All Articles</Text>
          <Text style={styles.pshskylinetwrrsrowheadercount}>
            {pshskylinetwrrsarticles.length} stories
          </Text>
        </View>

        <View style={styles.pshskylinetwrrslist}>
          {pshskylinetwrrsarticles.map(pshskylinetwrrsitem => (
            <Pressable
              key={pshskylinetwrrsitem.pshskylinetwrrsid}
              onPress={() =>
                pshskylinetwrrsopen(pshskylinetwrrsitem.pshskylinetwrrsid)
              }
              style={styles.pshskylinetwrrslistcard}>
              <View style={styles.pshskylinetwrrslistcardinner}>
                <View style={styles.pshskylinetwrrslistcardtext}>
                  <Text
                    style={styles.pshskylinetwrrslisttitle}
                    numberOfLines={2}>
                    {pshskylinetwrrsitem.pshskylinetwrrstitle}
                  </Text>
                  <Text
                    style={styles.pshskylinetwrrslistsubtitle}
                    numberOfLines={2}>
                    {pshskylinetwrrsitem.pshskylinetwrrssubtitle}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 4,
                    }}>
                    <Image
                      source={require('../../assets/i/pshskylinetwtim.png')}
                    />
                    <Text style={styles.pshskylinetwrrslistmeta}>
                      {pshskylinetwrrsitem.pshskylinetwrrsreadingtime}
                    </Text>
                  </View>
                </View>
                <Image source={require('../../assets/i/pshskylinetnex.png')} />
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </Pshskylinetwrrsclay>
  );
};

export default Pshskylinetwrrsarchtct;

const styles = StyleSheet.create({
  pshskylinetwrrsrowheadertitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  pshskylinetwrrsrowheadercount: {
    color: '#FFFFFF66',
    fontSize: 12,
  },

  pshskylinetwrrstrendingrow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },

  pshskylinetwrrstrendingcard: {
    flex: 1,
    borderRadius: 18,
    overflow: 'hidden',
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
    marginBottom: 18,
  },
  pshskylinetwrrsrowheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 12,
    marginBottom: 12,
    marginTop: 6,
  },

  pshskylinetwrrstrendingcardinner: {
    padding: 14,
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    borderRadius: 18,
    minHeight: 96,
    backgroundColor: '#FFFFFF0A',
  },
  pshskylinetwrrsarticlecardtitle: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 8,
  },
  pshskylinetwrrsarticlecardsubtitle: {
    color: '#FFFFFF80',
    fontSize: 11,
    marginBottom: 10,
  },
  pshskylinetwrrsarticlecardmeta: {
    color: '#FFFFFF66',
    fontSize: 11,
  },
  pshskylinetwrrslist: {
    gap: 12,
    marginTop: 6,
  },
  pshskylinetwrrslistcard: {
    borderRadius: 18,
    overflow: 'hidden',
  },
  pshskylinetwrrslistcardinner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    borderRadius: 18,
    minHeight: 100,

    backgroundColor: '#FFFFFF0A',
  },
  pshskylinetwrrslistcardtext: {
    flex: 1,
    paddingRight: 10,
  },
  pshskylinetwrrslisttitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  pshskylinetwrrslistsubtitle: {
    color: '#FFFFFF80',
    fontSize: 11,
    marginBottom: 10,
  },
  pshskylinetwrrslistmeta: {
    color: '#FFFFFF66',
    fontSize: 11,
  },
  pshskylinetwrrslistchev: {
    color: '#FFFFFF66',
    fontSize: 16,
    fontWeight: '900',
  },
});
