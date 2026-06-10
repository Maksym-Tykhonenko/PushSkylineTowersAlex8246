import {
  pshskylinetwrrsarticles,
  type pshskylinetwrrsArticle,
} from '../Pshskylinetwrrsdata/pshskylinetwrrsarchdata';

import {useNavigation, useRoute} from '@react-navigation/native';

import React, {useMemo} from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Pshskylinetwrrsclay from '../Pshskylinetwrrscpnts/Pshskylinetwrrsclay';

const Pshskylinetwrrsarchtdtl = () => {
  const pshskylinetwrrsnavigation = useNavigation();
  const pshskylinetwrrsinsets = useSafeAreaInsets();
  const pshskylinetwrrsroute = useRoute() as any;
  const pshskylinetwrrsid = (pshskylinetwrrsroute?.params?.pshskylinetwrrsid ??
    null) as string | null;

  const pshskylinetwrrsarticle = useMemo<pshskylinetwrrsArticle | null>(() => {
    if (!pshskylinetwrrsid) {
      return null;
    }
    return (
      pshskylinetwrrsarticles.find(
        a => a.pshskylinetwrrsid === pshskylinetwrrsid,
      ) ?? null
    );
  }, [pshskylinetwrrsid]);

  const pshskylinetwrrsshare = async () => {
    if (!pshskylinetwrrsarticle) {
      return;
    }
    try {
      await Share.share({
        message: `${pshskylinetwrrsarticle.pshskylinetwrrstitle}\n\n${pshskylinetwrrsarticle.pshskylinetwrrsstory}`,
      });
    } catch {
      console.log('Error');
    }
  };

  return (
    <Pshskylinetwrrsclay>
      <View
        style={[
          styles.pshskylinetwrrscontainer,
          {paddingTop: pshskylinetwrrsinsets.top + 14},
        ]}>
        <View style={styles.pshskylinetwrrsnavrow}>
          <Pressable
            onPress={() => (pshskylinetwrrsnavigation as any).goBack?.()}
            style={styles.pshskylinetwrrsiconbtn}>
            <Image
              source={require('../../assets/i/pshskylinetwrrstsback.png')}
            />
          </Pressable>
          <Pressable
            onPress={pshskylinetwrrsshare}
            style={styles.pshskylinetwrrsiconbtn}>
            <Image
              source={require('../../assets/i/pshskylinetwrrstsshr.png')}
            />
          </Pressable>
        </View>

        <Text style={styles.pshskylinetwrrstitle}>
          {pshskylinetwrrsarticle?.pshskylinetwrrstitle ?? 'Article'}
        </Text>
        <Text style={styles.pshskylinetwrrssubtitle}>
          {pshskylinetwrrsarticle?.pshskylinetwrrssubtitle ?? ''}
        </Text>

        <Text style={styles.pshskylinetwrrsbody}>
          {pshskylinetwrrsarticle?.pshskylinetwrrsstory ?? ''}
        </Text>
      </View>
    </Pshskylinetwrrsclay>
  );
};

export default Pshskylinetwrrsarchtdtl;

const styles = StyleSheet.create({
  pshskylinetwrrsiconbtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#060B1A99',
    borderWidth: 1,
    borderColor: '#FFFFFF1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pshskylinetwrrstitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 10,
  },

  pshskylinetwrrscontainer: {
    paddingHorizontal: 18,
    paddingBottom: 110,
  },
  pshskylinetwrrsnavrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  pshskylinetwrrssubtitle: {
    color: '#FFFFFF80',
    fontSize: 14,
    marginBottom: 18,
  },
  pshskylinetwrrsbody: {
    color: '#FFFFFFB8',
    fontSize: 14,
    lineHeight: 22,
  },
});
