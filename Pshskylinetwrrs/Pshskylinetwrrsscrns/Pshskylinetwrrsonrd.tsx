import LinearGradient from 'react-native-linear-gradient';

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
  View,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';

const pshskylinetwrrspages: {
  pshskylinetwrrstitle: string;
  pshskylinetwrrsdescription: string;
  pshskylinetwrrsbackground: ImageSourcePropType;
}[] = [
  {
    pshskylinetwrrstitle: `Explore Iconic ${'\n'}Facades`,
    pshskylinetwrrsdescription:
      'Discover stunning architecture and unique buildings from around the world.',
    pshskylinetwrrsbackground: require('../../assets/i/pshskylinetwrrstonbg1.png'),
  },
  {
    pshskylinetwrrstitle: `Save Your ${'\n'}Favorites`,
    pshskylinetwrrsdescription:
      'Build your personal collection of incredible places and hidden urban gems.',
    pshskylinetwrrsbackground: require('../../assets/i/pshskylinetwrrstonbg2.png'),
  },
  {
    pshskylinetwrrstitle: `Discover On The ${'\n'}Map`,
    pshskylinetwrrsdescription:
      'Explore famous landmarks and architectural wonders with an interactive world map.',
    pshskylinetwrrsbackground: require('../../assets/i/pshskylinetwrrstonbg3.png'),
  },
  {
    pshskylinetwrrstitle: `Learn & ${'\n'}Explore`,
    pshskylinetwrrsdescription:
      'Read fascinating stories, generate facts, and test your knowledge with architecture quizzes.',
    pshskylinetwrrsbackground: require('../../assets/i/pshskylinetwrrstonbg4.png'),
  },
  {
    pshskylinetwrrstitle: `Start Your ${'\n'}Journey`,
    pshskylinetwrrsdescription:
      'Experience cities through architecture and discover iconic facades worldwide.',
    pshskylinetwrrsbackground: require('../../assets/i/pshskylinetwrrstonbg5.png'),
  },
];

const Pshskylinetwrrsonrd = () => {
  const pshskylinetwrrsnavigation = useNavigation();

  const [pshskylinetwrrsstep, pshskylinetwrrssetstep] = useState(0);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
      return () => {
        Orientation.unlockAllOrientations();
      };
    }, []),
  );

  const pshskylinetwrrsgotomain = useCallback(() => {
    pshskylinetwrrsnavigation.navigate('Pshskylinetwrrstaabs' as never);
  }, [pshskylinetwrrsnavigation]);

  const pshskylinetwrrshandlenext = useCallback(() => {
    if (pshskylinetwrrsstep >= pshskylinetwrrspages.length - 1) {
      pshskylinetwrrsgotomain();
      return;
    }
    pshskylinetwrrssetstep(s => s + 1);
  }, [pshskylinetwrrsstep, pshskylinetwrrsgotomain]);

  const pshskylinetwrrscurrent = useMemo(
    () => pshskylinetwrrspages[pshskylinetwrrsstep],
    [pshskylinetwrrsstep],
  );

  return (
    <ImageBackground
      source={pshskylinetwrrscurrent.pshskylinetwrrsbackground}
      style={styles.pshskylinetwrrstopsection}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.pshskylinetwrrsbottomsection]}>
          <Text style={styles.pshskylinetwrrstitle}>
            {pshskylinetwrrscurrent.pshskylinetwrrstitle}
          </Text>
          <Text style={styles.pshskylinetwrrsdescription}>
            {pshskylinetwrrscurrent.pshskylinetwrrsdescription}
          </Text>

          <View style={styles.pshskylinetwrrspaginationrow}>
            {pshskylinetwrrspages.map((_, pshskylinetwrrsindex) => (
              <View
                key={pshskylinetwrrsindex}
                style={
                  pshskylinetwrrsindex === pshskylinetwrrsstep
                    ? styles.pshskylinetwrrspaginationactive
                    : styles.pshskylinetwrrspaginationidle
                }
              />
            ))}
          </View>

          <View style={styles.pshskylinetwrrsbuttonsrow}>
            <Pressable
              onPress={pshskylinetwrrsgotomain}
              style={({pressed}) => [
                styles.pshskylinetwrrsskipbutton,
                pressed && styles.pshskylinetwrrsskipbuttonpressed,
              ]}>
              <Text style={styles.pshskylinetwrrsskipbuttontext}>Skip</Text>
            </Pressable>

            <Pressable
              onPress={pshskylinetwrrshandlenext}
              style={styles.pshskylinetwrrsnextbuttonpressable}>
              <LinearGradient
                colors={['#2563EB', '#06B6D4']}
                style={styles.pshskylinetwrrsnextgradient}>
                <Text style={styles.pshskylinetwrrsnextbuttontext}>Next</Text>
                <Image
                  source={require('../../assets/i/pshskylinetwrrstnexar.png')}
                />
              </LinearGradient>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Pshskylinetwrrsonrd;

const styles = StyleSheet.create({
  pshskylinetwrrscontainer: {
    flex: 1,
  },
  pshskylinetwrrstopsection: {
    flex: 1,
  },

  pshskylinetwrrsbottomsection: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    paddingBottom: 35,
  },
  pshskylinetwrrstitle: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: '800',
    marginBottom: 10,
  },

  pshskylinetwrrsdescription: {
    color: '#FFFFFF99',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 10,
  },

  pshskylinetwrrspaginationrow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  pshskylinetwrrspaginationidle: {
    width: 8,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#2A3142',
  },
  pshskylinetwrrspaginationactive: {
    width: 28,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#2563EB',
  },
  pshskylinetwrrsbuttonsrow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  pshskylinetwrrsskipbutton: {
    width: 106,
    borderWidth: 1,
    borderColor: '#FFFFFF1F',
    borderRadius: 16,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF14',
  },
  pshskylinetwrrsskipbuttonpressed: {
    opacity: 0.85,
  },
  pshskylinetwrrsskipbuttontext: {
    color: '#FFFFFFB2',
    fontSize: 14,
    fontWeight: '600',
  },
  pshskylinetwrrsnextbuttonpressable: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
  },
  pshskylinetwrrsnextgradient: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  pshskylinetwrrsnextbuttontext: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
