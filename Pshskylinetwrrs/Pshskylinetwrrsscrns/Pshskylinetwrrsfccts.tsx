import Pshskylinetwrrsclay from '../Pshskylinetwrrscpnts/Pshskylinetwrrsclay';

import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const pshskylinetwrrsDailyLimit = 5;
const pshskylinetwrrsFactsKey = 'pshskylinetwrrs_facts_daily_v1';

const pshskylinetwrrsfacts: string[] = [
  'The construction of Cologne Cathedral lasted more than 600 years.',
  'Burj Khalifa is so tall that people on different floors can see the sunset at different times.',
  'The Colosseum once had a retractable roof system made from giant fabric panels.',
  'Machu Picchu was unknown to the outside world until 1911.',
  'Milan Cathedral contains over 3,000 statues on its facade and rooftop.',
  'The Museum of the Future is covered with Arabic calligraphy that glows at night.',
  'The Shard changes appearance depending on weather and sunlight.',
  'Notre-Dame Cathedral inspired Victor Hugo to write “The Hunchback of Notre-Dame.”',
  'Marina Bay Sands has one of the highest infinity pools in the world.',
  'The Forbidden City contains nearly 1,000 historical buildings.',
  'Galaxy SOHO was designed without sharp corners to create flowing movement.',
  'Westminster Abbey has hosted British coronations for almost 1,000 years.',
  'The Parthenon was originally painted in bright colors, not plain white.',
  'Alhambra’s palace walls are covered with detailed Arabic poetry.',
  'Burj Khalifa elevators travel at speeds over 35 km/h.',
  'St. Vitus Cathedral holds the Czech crown jewels inside hidden chambers.',
  'The Colosseum could hold more than 50,000 spectators during Ancient Rome.',
  'Machu Picchu sits more than 2,400 meters above sea level.',
  'The rooftop of Marina Bay Sands is longer than the Eiffel Tower is tall.',
  'Milan Cathedral took nearly six centuries to fully complete.',
  'The Forbidden City was once completely closed to ordinary citizens.',
  'The Shard contains over 11,000 glass panels.',
  'Cologne Cathedral survived World War II bombings while much of the city was destroyed.',
  'The Museum of the Future represents the unknown future through its empty center.',
  'Alhambra combines both military fortress design and peaceful royal gardens.',
  'Notre-Dame Cathedral features famous gargoyle statues used as water drains.',
  'Burj Khalifa’s design was inspired by a desert flower called Hymenocallis.',
  'The Parthenon has survived wars, explosions, and earthquakes for centuries.',
  'Galaxy SOHO was designed by world-famous architect Zaha Hadid.',
  'The Colosseum is nearly 2,000 years old and still stands today.',
];

type pshskylinetwrrsDailyState = {
  pshskylinetwrrsdate: string;
  pshskylinetwrrsused: number;
};

const pshskylinetwrrstoday = () => new Date().toISOString().slice(0, 10);

const pshskylinetwrrsreadState =
  async (): Promise<pshskylinetwrrsDailyState> => {
    const pshskylinetwrrsraw = await AsyncStorage.getItem(
      pshskylinetwrrsFactsKey,
    );
    const pshskylinetwrrsdate = pshskylinetwrrstoday();
    if (!pshskylinetwrrsraw) {
      return {pshskylinetwrrsdate, pshskylinetwrrsused: 0};
    }
    try {
      const pshskylinetwrrsparsed = JSON.parse(
        pshskylinetwrrsraw,
      ) as Partial<pshskylinetwrrsDailyState>;
      if (pshskylinetwrrsparsed.pshskylinetwrrsdate !== pshskylinetwrrsdate) {
        return {pshskylinetwrrsdate, pshskylinetwrrsused: 0};
      }
      return {
        pshskylinetwrrsdate,
        pshskylinetwrrsused: Math.max(
          0,
          Math.min(
            pshskylinetwrrsDailyLimit,
            Number(pshskylinetwrrsparsed.pshskylinetwrrsused ?? 0),
          ),
        ),
      };
    } catch {
      return {pshskylinetwrrsdate, pshskylinetwrrsused: 0};
    }
  };

const pshskylinetwrrswriteState = async (
  pshskylinetwrrsstate: pshskylinetwrrsDailyState,
) => {
  await AsyncStorage.setItem(
    pshskylinetwrrsFactsKey,
    JSON.stringify(pshskylinetwrrsstate),
  );
};

const Pshskylinetwrrsfccts = () => {
  const pshskylinetwrrsinsets = useSafeAreaInsets();
  const [pshskylinetwrrsused, pshskylinetwrrssetused] = useState(0);
  const [pshskylinetwrrscurrentindex, pshskylinetwrrssetcurrentindex] =
    useState<number | null>(null);
  const [pshskylinetwrrsbusy, pshskylinetwrrssetbusy] = useState(false);

  const pshskylinetwrrsleft = Math.max(
    0,
    pshskylinetwrrsDailyLimit - pshskylinetwrrsused,
  );
  const pshskylinetwrrsprogress =
    pshskylinetwrrsused / pshskylinetwrrsDailyLimit;

  useEffect(() => {
    let pshskylinetwrrsalive = true;
    pshskylinetwrrsreadState()
      .then(pshskylinetwrrsstate => {
        if (pshskylinetwrrsalive) {
          pshskylinetwrrssetused(pshskylinetwrrsstate.pshskylinetwrrsused);
        }
      })
      .catch(() => {});
    return () => {
      pshskylinetwrrsalive = false;
    };
  }, []);

  const pshskylinetwrrsgenerate = useCallback(async () => {
    if (pshskylinetwrrsbusy || pshskylinetwrrsleft <= 0) {
      return;
    }
    try {
      pshskylinetwrrssetbusy(true);
      const pshskylinetwrrsnextused = Math.min(
        pshskylinetwrrsDailyLimit,
        pshskylinetwrrsused + 1,
      );
      const pshskylinetwrrsnextindex = Math.floor(
        Math.random() * pshskylinetwrrsfacts.length,
      );
      pshskylinetwrrssetcurrentindex(pshskylinetwrrsnextindex);
      pshskylinetwrrssetused(pshskylinetwrrsnextused);
      await pshskylinetwrrswriteState({
        pshskylinetwrrsdate: pshskylinetwrrstoday(),
        pshskylinetwrrsused: pshskylinetwrrsnextused,
      });
    } finally {
      pshskylinetwrrssetbusy(false);
    }
  }, [pshskylinetwrrsbusy, pshskylinetwrrsleft, pshskylinetwrrsused]);

  const pshskylinetwrrsshare = useCallback(async () => {
    if (pshskylinetwrrscurrentindex === null) {
      return;
    }
    try {
      await Share.share({
        message: pshskylinetwrrsfacts[pshskylinetwrrscurrentindex],
      });
    } catch {
      console.log('Error');
    }
  }, [pshskylinetwrrscurrentindex]);

  const pshskylinetwrrscurrenttext = useMemo(() => {
    if (pshskylinetwrrscurrentindex === null) {
      return null;
    }
    return pshskylinetwrrsfacts[pshskylinetwrrscurrentindex] ?? null;
  }, [pshskylinetwrrscurrentindex]);

  return (
    <Pshskylinetwrrsclay bounce={false}>
      <View style={styles.pshskylinetwrrscontainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.pshskylinetwrrsscrollcontent,
            {paddingTop: pshskylinetwrrsinsets.top + 14},
          ]}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
            <Image source={require('../../assets/i/pshskylinearcf.png')} />
            <Text style={styles.pshskylinetwrrstitle}>Architecture Facts</Text>
          </View>
          <Text style={styles.pshskylinetwrrssubtitle}>
            Discover surprising truths about buildings
          </Text>

          <View style={styles.pshskylinetwrrsprogresscard}>
            <View style={styles.pshskylinetwrrsprogressrow}>
              <Text style={styles.pshskylinetwrrsprogresslabel}>
                Daily generations
              </Text>
              <Text
                style={[
                  styles.pshskylinetwrrsprogressvalue,
                  pshskylinetwrrsleft === 0 &&
                    styles.pshskylinetwrrsprogressvaluered,
                ]}>
                {pshskylinetwrrsleft}/{pshskylinetwrrsDailyLimit} left
              </Text>
            </View>

            <View style={styles.pshskylinetwrrsprogressbartrack}>
              <LinearGradient
                colors={
                  pshskylinetwrrsleft === 0
                    ? ['#DC2626', '#F87171']
                    : ['#2563EB', '#06B6D6']
                }
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={[
                  styles.pshskylinetwrrsprogressbarfill,
                  {
                    width: `${
                      Math.min(1, Math.max(0, pshskylinetwrrsprogress)) * 100
                    }%`,
                  },
                ]}
              />
            </View>

            <View style={styles.pshskylinetwrrsdotsrow}>
              {Array.from({length: pshskylinetwrrsDailyLimit}).map(
                (_, pshskylinetwrrsidx) => (
                  <View
                    key={pshskylinetwrrsidx}
                    style={
                      pshskylinetwrrsidx < pshskylinetwrrsused
                        ? styles.pshskylinetwrrsdotactive
                        : styles.pshskylinetwrrsdotidle
                    }
                  />
                ),
              )}
            </View>
          </View>

          {pshskylinetwrrscurrenttext ? (
            <LinearGradient
              colors={['#2563EB26', '#06B6D41A']}
              style={styles.pshskylinetwrrsfactcard}>
              <View style={{padding: 22}}>
                <View style={styles.pshskylinetwrrsfacttop}>
                  <View style={styles.pshskylinetwrrsfacticonbox}>
                    <Image
                      source={require('../../assets/i/pshskylinesddn.png')}
                    />
                  </View>
                  <View style={styles.pshskylinetwrrsfacttoptext}>
                    <Text style={styles.pshskylinetwrrsfactkicker}>
                      DID YOU KNOW?
                    </Text>
                    <Text style={styles.pshskylinetwrrsfactsubkicker}>
                      Fact #{(pshskylinetwrrscurrentindex ?? 0) + 1} of{' '}
                      {pshskylinetwrrsfacts.length}
                    </Text>
                  </View>
                </View>

                <Text style={styles.pshskylinetwrrsfacttext}>
                  {pshskylinetwrrscurrenttext}
                </Text>

                <Pressable
                  onPress={pshskylinetwrrsshare}
                  style={styles.pshskylinetwrrssharebtn}>
                  <Image
                    source={require('../../assets/i/pshskylinetwrrstsshr.png')}
                  />
                  <Text style={styles.pshskylinetwrrssharebtntxt}>
                    Share this fact
                  </Text>
                </Pressable>
              </View>
            </LinearGradient>
          ) : (
            <View style={styles.pshskylinetwrrsemptycard}>
              <View style={styles.pshskylinetwrrsemptyiconwrap}>
                <Image source={require('../../assets/i/pshskylineaemo.png')} />
              </View>
              <Text style={styles.pshskylinetwrrsemptytext}>
                Press the button below to generate your{'\n'}first architecture
                fact
              </Text>
            </View>
          )}

          {pshskylinetwrrsleft === 0 ? (
            <View style={styles.pshskylinetwrrslimitcard}>
              <Text style={styles.pshskylinetwrrslimittitle}>
                Daily limit reached!
              </Text>
              <Text style={styles.pshskylinetwrrslimitsubtitle}>
                Come back tomorrow for 5 new facts
              </Text>
            </View>
          ) : null}
        </ScrollView>

        <View
          style={[
            styles.pshskylinetwrrsbottombar,
            {paddingBottom: Math.max(18, pshskylinetwrrsinsets.bottom + 90)},
          ]}>
          <Pressable
            disabled={pshskylinetwrrsleft === 0 || pshskylinetwrrsbusy}
            onPress={pshskylinetwrrsgenerate}
            style={({pressed}) => [
              styles.pshskylinetwrrsprimarywrap,
              pressed && styles.pshskylinetwrrsprimarypressed,
              (pshskylinetwrrsleft === 0 || pshskylinetwrrsbusy) &&
                styles.pshskylinetwrrsprimarydisabled,
            ]}>
            <LinearGradient
              colors={['#2563EB', '#06B6D4']}
              style={styles.pshskylinetwrrsprimary}>
              <Image source={require('../../assets/i/pshskylinestrs.png')} />
              <Text style={styles.pshskylinetwrrsprimarytext}>
                Generate Fact
              </Text>
              <View style={styles.pshskylinetwrrsleftpill}>
                <Text style={styles.pshskylinetwrrsleftpilltext}>
                  {pshskylinetwrrsleft} left
                </Text>
              </View>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </Pshskylinetwrrsclay>
  );
};

export default Pshskylinetwrrsfccts;

const styles = StyleSheet.create({
  pshskylinetwrrsfacttop: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    marginBottom: 14,
  },
  pshskylinetwrrsfacticonbox: {
    width: 40,
    height: 40,
    top: 5,

    alignItems: 'center',
    justifyContent: 'center',
  },

  pshskylinetwrrslimitcard: {
    borderRadius: 18,
    paddingVertical: 19,
    paddingHorizontal: 16,
    backgroundColor: '#EF444414',
    borderWidth: 1,
    borderColor: '#EF444433',
    alignItems: 'center',
  },

  pshskylinetwrrslimittitle: {
    color: '#FCA5A5',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
  },

  pshskylinetwrrscontainer: {
    flex: 1,
    backgroundColor: '#060B1A',
  },
  pshskylinetwrrsscrollcontent: {
    paddingHorizontal: 18,
    paddingBottom: 170,
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
  pshskylinetwrrsprogresscard: {
    backgroundColor: '#FFFFFF0D',
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
  },
  pshskylinetwrrsprogressrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  pshskylinetwrrsprogresslabel: {
    color: '#FFFFFF99',
    fontSize: 13,
  },
  pshskylinetwrrsprogressvalue: {
    color: '#22C55E',
    fontSize: 13,
    fontWeight: '700',
  },
  pshskylinetwrrsprogressvaluered: {
    color: '#EF4444',
  },
  pshskylinetwrrsprogressbartrack: {
    height: 6,
    borderRadius: 99,
    backgroundColor: '#FFFFFF12',
    overflow: 'hidden',
    marginBottom: 10,
  },
  pshskylinetwrrsprogressbarfill: {
    height: 6,
    borderRadius: 99,
  },
  pshskylinetwrrsdotsrow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 5,
  },
  pshskylinetwrrsdotidle: {
    width: 10,
    height: 10,
    borderRadius: 8,
    backgroundColor: '#FFFFFF12',
  },
  pshskylinetwrrsdotactive: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#00D4FF',
  },
  pshskylinetwrrsfactcard: {
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#00D4FF33',
    marginBottom: 18,
    marginTop: 20,
  },

  pshskylinetwrrsfacttoptext: {
    flex: 1,
  },
  pshskylinetwrrsfactkicker: {
    color: '#93C5FD',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 2,
  },
  pshskylinetwrrsfactsubkicker: {
    color: '#FFFFFF66',
    fontSize: 11,
  },
  pshskylinetwrrsfacttext: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    marginBottom: 16,
  },
  pshskylinetwrrssharebtn: {
    height: 46,
    borderRadius: 12,
    backgroundColor: '#FFFFFF14',
    borderWidth: 1,
    borderColor: '#FFFFFF1F',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  pshskylinetwrrssharebtntxt: {
    color: '#FFFFFFB3',
    fontSize: 13,
    fontWeight: '700',
  },
  pshskylinetwrrsemptycard: {
    borderRadius: 22,
    padding: 18,
    backgroundColor: '#FFFFFF08',
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    minHeight: 220,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    marginTop: 20,
  },
  pshskylinetwrrsemptyiconwrap: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: '#2563EB1A',
    borderWidth: 1,
    borderColor: '#2563EB33',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  pshskylinetwrrsemptytext: {
    color: '#FFFFFF80',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 18,
  },

  pshskylinetwrrslimitsubtitle: {
    color: '#FFFFFF66',
    fontSize: 12,
    textAlign: 'center',
  },
  pshskylinetwrrsbottombar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 18,
    paddingTop: 12,
  },
  pshskylinetwrrsprimarywrap: {
    borderRadius: 18,
    overflow: 'hidden',
  },
  pshskylinetwrrsprimarypressed: {
    opacity: 0.9,
  },
  pshskylinetwrrsprimarydisabled: {
    opacity: 0.55,
  },
  pshskylinetwrrsprimary: {
    height: 58,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  pshskylinetwrrsprimarytext: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  pshskylinetwrrsleftpill: {
    marginLeft: 6,
    backgroundColor: '#FFFFFF33',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  pshskylinetwrrsleftpilltext: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
});
