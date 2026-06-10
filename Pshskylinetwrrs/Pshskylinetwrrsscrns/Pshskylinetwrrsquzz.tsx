import {
  pshskylinetwrrsallquizquestions,
  pshskylinetwrrsquizlength,
  pshskylinetwrrsquizseconds,
  pshskylinetwrrsQuizQuestion,
} from '../Pshskylinetwrrsdata/pshskylinetwrrsquzdata';

import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  Share,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Pshskylinetwrrsclay from '../Pshskylinetwrrscpnts/Pshskylinetwrrsclay';
import {pshskylinetwrrsallfacades} from '../Pshskylinetwrrsdata/pshskylinetwrrsfacdata';

import {useFocusEffect} from '@react-navigation/native';

type pshskylinetwrrsPhase = 'intro' | 'quiz' | 'result';

const pshskylinetwrrsgradprimary = ['#2563EB', '#06B6D4'] as const;

const pshskylinetwrrsshuffle = <T,>(pshskylinetwrrsarr: T[]): T[] => {
  const pshskylinetwrrsout = [...pshskylinetwrrsarr];
  for (
    let pshskylinetwrrsi = pshskylinetwrrsout.length - 1;
    pshskylinetwrrsi > 0;
    pshskylinetwrrsi -= 1
  ) {
    const pshskylinetwrrsj = Math.floor(Math.random() * (pshskylinetwrrsi + 1));
    const pshskylinetwrrst = pshskylinetwrrsout[pshskylinetwrrsj];
    pshskylinetwrrsout[pshskylinetwrrsj] = pshskylinetwrrsout[pshskylinetwrrsi];
    pshskylinetwrrsout[pshskylinetwrrsi] = pshskylinetwrrst;
  }
  return pshskylinetwrrsout;
};

const pshskylinetwrrsimagefor = (
  pshskylinetwrrsfacadeid: string,
): ImageSourcePropType | null => {
  const pshskylinetwrrsitem = pshskylinetwrrsallfacades.find(
    f => f.pshskylinetwrrsid === pshskylinetwrrsfacadeid,
  );
  return pshskylinetwrrsitem?.pshskylinetwrrsimage ?? null;
};

const pshskylinetwrrsrankcopy = (pshskylinetwrrspct: number) => {
  if (pshskylinetwrrspct >= 100) {
    return {
      pshskylinetwrrstitle: 'Perfect!',
      pshskylinetwrrssub: 'Architecture Master',
    };
  }
  if (pshskylinetwrrspct >= 80) {
    return {
      pshskylinetwrrstitle: 'Excellent!',
      pshskylinetwrrssub: 'Architecture Expert',
    };
  }
  if (pshskylinetwrrspct >= 60) {
    return {
      pshskylinetwrrstitle: 'Well done!',
      pshskylinetwrrssub: 'Rising Architect',
    };
  }
  if (pshskylinetwrrspct >= 40) {
    return {
      pshskylinetwrrstitle: 'Keep Trying! 💪',
      pshskylinetwrrssub: 'Architecture Student',
    };
  }
  return {
    pshskylinetwrrstitle: 'Nice effort',
    pshskylinetwrrssub: 'Keep exploring facades',
  };
};

const Pshskylinetwrrsquzz = () => {
  const pshskylinetwrrsinsets = useSafeAreaInsets();
  const [pshskylinetwrrsphase, pshskylinetwrrssetphase] =
    useState<pshskylinetwrrsPhase>('intro');
  const [pshskylinetwrrsround, pshskylinetwrrssetround] = useState<
    pshskylinetwrrsQuizQuestion[]
  >([]);
  const [pshskylinetwrrsqi, pshskylinetwrrssetqi] = useState(0);
  const [pshskylinetwrrsselected, pshskylinetwrrssetselected] = useState<
    number | null
  >(null);
  const [pshskylinetwrrsrevealed, pshskylinetwrrssetrevealed] = useState(false);
  const [pshskylinetwrrstimeleft, pshskylinetwrrssettimeleft] = useState(
    pshskylinetwrrsquizseconds,
  );
  const [pshskylinetwrrsscore, pshskylinetwrrssetscore] = useState(0);
  const [pshskylinetwrrsbarwidth, pshskylinetwrrssetbarwidth] = useState(
    Dimensions.get('window').width - 18 * 2 - 44 - 52,
  );

  const pshskylinetwrrscurrent =
    pshskylinetwrrsround[pshskylinetwrrsqi] ?? null;
  const pshskylinetwrrsimg = pshskylinetwrrscurrent
    ? pshskylinetwrrsimagefor(
        pshskylinetwrrscurrent.pshskylinetwrrsimagefacadeid,
      )
    : null;

  const pshskylinetwrrsstart = useCallback(() => {
    const pshskylinetwrrspicked = pshskylinetwrrsshuffle(
      pshskylinetwrrsallquizquestions,
    ).slice(0, pshskylinetwrrsquizlength);
    pshskylinetwrrssetround(pshskylinetwrrspicked);
    pshskylinetwrrssetqi(0);
    pshskylinetwrrssetselected(null);
    pshskylinetwrrssetrevealed(false);
    pshskylinetwrrssettimeleft(pshskylinetwrrsquizseconds);
    pshskylinetwrrssetscore(0);
    pshskylinetwrrssetphase('quiz');
  }, []);

  const pshskylinetwrrsquit = useCallback(() => {
    pshskylinetwrrssetphase('intro');
    pshskylinetwrrssetround([]);
  }, []);

  useEffect(() => {
    if (pshskylinetwrrsphase !== 'quiz' || pshskylinetwrrsrevealed) {
      return;
    }
    const pshskylinetwrrsid = setInterval(() => {
      pshskylinetwrrssettimeleft(t => {
        if (t <= 1) {
          pshskylinetwrrssetrevealed(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(pshskylinetwrrsid);
  }, [pshskylinetwrrsphase, pshskylinetwrrsrevealed, pshskylinetwrrsqi]);

  useFocusEffect(
    useCallback(() => {
      pshskylinetwrrssetphase('intro');
      pshskylinetwrrssetround([]);
      pshskylinetwrrssetqi(0);
      pshskylinetwrrssetselected(null);
      pshskylinetwrrssetrevealed(false);
      pshskylinetwrrssettimeleft(pshskylinetwrrsquizseconds);
      pshskylinetwrrssetscore(0);
    }, []),
  );

  const pshskylinetwrrsonpick = (pshskylinetwrrsidx: number) => {
    if (pshskylinetwrrsrevealed || !pshskylinetwrrscurrent) {
      return;
    }
    pshskylinetwrrssetselected(pshskylinetwrrsidx);
    pshskylinetwrrssetrevealed(true);
    if (
      pshskylinetwrrsidx === pshskylinetwrrscurrent.pshskylinetwrrscorrectindex
    ) {
      pshskylinetwrrssetscore(s => s + 1);
    }
  };

  const pshskylinetwrrsnext = () => {
    if (!pshskylinetwrrsrevealed) {
      return;
    }
    if (pshskylinetwrrsqi >= pshskylinetwrrsquizlength - 1) {
      pshskylinetwrrssetphase('result');
      return;
    }
    pshskylinetwrrssetqi(i => i + 1);
    pshskylinetwrrssetselected(null);
    pshskylinetwrrssetrevealed(false);
    pshskylinetwrrssettimeleft(pshskylinetwrrsquizseconds);
  };

  const pshskylinetwrrsshare = async () => {
    const pshskylinetwrrspct = Math.round(
      (pshskylinetwrrsscore / pshskylinetwrrsquizlength) * 100,
    );
    try {
      await Share.share({
        message: `Quiz Result: ${pshskylinetwrrsscore}/${pshskylinetwrrsquizlength} (${pshskylinetwrrspct}%)`,
      });
    } catch {
      console.log('Error');
    }
  };

  const pshskylinetwrrsresultmeta = useMemo(
    () =>
      pshskylinetwrrsrankcopy(
        Math.round((pshskylinetwrrsscore / pshskylinetwrrsquizlength) * 100),
      ),
    [pshskylinetwrrsscore],
  );

  const pshskylinetwrrsfilledw =
    pshskylinetwrrsbarwidth *
    Math.min(1, (pshskylinetwrrsqi + 1) / pshskylinetwrrsquizlength);

  return (
    <Pshskylinetwrrsclay bounce={false}>
      <View style={styles.pshskylinetwrrsroot}>
        {pshskylinetwrrsphase === 'intro' ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              styles.pshskylinetwrrsscroll,
              {
                paddingTop: pshskylinetwrrsinsets.top + 14,
              },
            ]}>
            <Text style={styles.pshskylinetwrrstitle}>Facade Quiz</Text>
            <Text style={styles.pshskylinetwrrssubtitle}>
              Test your architecture knowledge
            </Text>

            <View style={styles.pshskylinetwrrscard}>
              <Text style={styles.pshskylinetwrrscardemoji}>🏛️</Text>
              <View style={styles.pshskylinetwrrscardtxt}>
                <Text style={styles.pshskylinetwrrscardtitle}>5 questions</Text>
                <Text style={styles.pshskylinetwrrscardsub}>
                  Each round picks {pshskylinetwrrsquizlength} random questions
                  from {pshskylinetwrrsallquizquestions.length}
                </Text>
              </View>
            </View>
            <View style={styles.pshskylinetwrrscard}>
              <Text style={styles.pshskylinetwrrscardemoji}>⏱️</Text>
              <View style={styles.pshskylinetwrrscardtxt}>
                <Text style={styles.pshskylinetwrrscardtitle}>Time limit</Text>
                <Text style={styles.pshskylinetwrrscardsub}>
                  {pshskylinetwrrsquizseconds} seconds per question
                </Text>
              </View>
            </View>
            <View style={styles.pshskylinetwrrscard}>
              <Text style={styles.pshskylinetwrrscardemoji}>🏆</Text>
              <View style={styles.pshskylinetwrrscardtxt}>
                <Text style={styles.pshskylinetwrrscardtitle}>Score</Text>
                <Text style={styles.pshskylinetwrrscardsub}>
                  Earn a point for every correct answer
                </Text>
              </View>
            </View>
            <View style={[styles.pshskylinetwrrscard, {marginBottom: 30}]}>
              <Text style={styles.pshskylinetwrrscardemoji}>📤</Text>
              <View style={styles.pshskylinetwrrscardtxt}>
                <Text style={styles.pshskylinetwrrscardtitle}>Share</Text>
                <Text style={styles.pshskylinetwrrscardsub}>
                  Share your result when you finish
                </Text>
              </View>
            </View>
          </ScrollView>
        ) : null}

        {pshskylinetwrrsphase === 'quiz' && pshskylinetwrrscurrent ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={[
              styles.pshskylinetwrrsscroll,
              {
                paddingTop: pshskylinetwrrsinsets.top + 10,
                paddingBottom: pshskylinetwrrsinsets.bottom + 10,
              },
            ]}>
            <View style={styles.pshskylinetwrrsheaderrow}>
              <Pressable
                onPress={pshskylinetwrrsquit}
                style={({pressed}) => [
                  styles.pshskylinetwrrsclose,
                  pressed && styles.pshskylinetwrrsclosepressed,
                ]}>
                <Image
                  source={require('../../assets/i/pshskylinetwrrcls.png')}
                />
              </Pressable>
              <View
                style={styles.pshskylinetwrrstrack}
                onLayout={e =>
                  pshskylinetwrrssetbarwidth(e.nativeEvent.layout.width)
                }>
                {pshskylinetwrrsbarwidth > 0 ? (
                  <View
                    style={[
                      styles.pshskylinetwrrstrackclip,
                      {width: pshskylinetwrrsfilledw},
                    ]}>
                    <LinearGradient
                      colors={[...pshskylinetwrrsgradprimary]}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      style={[
                        styles.pshskylinetwrrsproggradfill,
                        {width: pshskylinetwrrsbarwidth},
                      ]}
                    />
                  </View>
                ) : null}
              </View>
              <Text style={styles.pshskylinetwrrscounter}>
                {pshskylinetwrrsqi + 1} / {pshskylinetwrrsquizlength}
              </Text>
            </View>

            <View style={styles.pshskylinetwrrsbadgesrow}>
              <View style={styles.pshskylinetwrrsbadgeblue}>
                <Image source={require('../../assets/i/pshskylintime.png')} />
                <Text style={styles.pshskylinetwrrsbadgebluetxt}>
                  {pshskylinetwrrstimeleft}s
                </Text>
              </View>
              <View style={styles.pshskylinetwrrsbadgegold}>
                <Text>⭐</Text>
                <Text style={styles.pshskylinetwrrsbadgegoldtxt}>
                  {pshskylinetwrrsscore} pts
                </Text>
              </View>
            </View>

            <View style={styles.pshskylinetwrrsimagewrap}>
              {pshskylinetwrrsimg ? (
                <Image
                  source={pshskylinetwrrsimg}
                  style={styles.pshskylinetwrrsimage}
                  resizeMode="cover"
                />
              ) : (
                <View
                  style={[
                    styles.pshskylinetwrrsimage,
                    styles.pshskylinetwrrsimageph,
                  ]}
                />
              )}
              <View style={styles.pshskylinetwrrsqpill}>
                <Text style={styles.pshskylinetwrrsqpilltxt}>
                  Q{pshskylinetwrrsqi + 1}
                </Text>
              </View>
            </View>

            <Text style={styles.pshskylinetwrrsquestion}>
              {pshskylinetwrrscurrent.pshskylinetwrrsquestion}
            </Text>

            {pshskylinetwrrscurrent.pshskylinetwrrsoptions.map(
              (pshskylinetwrrslabel, pshskylinetwrrsidx) => {
                const pshskylinetwrrsisCorrect =
                  pshskylinetwrrsidx ===
                  pshskylinetwrrscurrent.pshskylinetwrrscorrectindex;
                const pshskylinetwrrsisSel =
                  pshskylinetwrrsselected === pshskylinetwrrsidx;
                let pshskylinetwrrsoptstyle = styles.pshskylinetwrrsoption;
                let pshskylinetwrrsopttxt: StyleProp<TextStyle> =
                  styles.pshskylinetwrrsoptiontxt;
                if (pshskylinetwrrsrevealed) {
                  if (pshskylinetwrrsisCorrect) {
                    pshskylinetwrrsoptstyle = styles.pshskylinetwrrsoptionok;
                    pshskylinetwrrsopttxt = styles.pshskylinetwrrsoptiontxtok;
                  } else if (pshskylinetwrrsisSel) {
                    pshskylinetwrrsoptstyle = styles.pshskylinetwrrsoptionbad;
                    pshskylinetwrrsopttxt = styles.pshskylinetwrrsoptiontxtbad;
                  }
                }
                return (
                  <Pressable
                    key={pshskylinetwrrsidx}
                    onPress={() => pshskylinetwrrsonpick(pshskylinetwrrsidx)}
                    style={({pressed}) => [
                      pshskylinetwrrsoptstyle,
                      pressed &&
                        !pshskylinetwrrsrevealed &&
                        styles.pshskylinetwrrsoptionpressed,
                    ]}>
                    <Text style={pshskylinetwrrsopttxt}>
                      {pshskylinetwrrslabel}
                    </Text>
                    {pshskylinetwrrsrevealed && pshskylinetwrrsisCorrect ? (
                      <Image
                        source={require('../../assets/i/pshskylintoka.png')}
                      />
                    ) : null}
                    {pshskylinetwrrsrevealed &&
                    pshskylinetwrrsisSel &&
                    !pshskylinetwrrsisCorrect ? (
                      <Image
                        source={require('../../assets/i/pshskylinwrng.png')}
                      />
                    ) : null}
                  </Pressable>
                );
              },
            )}
          </ScrollView>
        ) : null}

        {pshskylinetwrrsphase === 'result' ? (
          <View
            style={[
              styles.pshskylinetwrrsresultscroll,
              {
                paddingTop: pshskylinetwrrsinsets.top + 24,
                paddingBottom: pshskylinetwrrsinsets.bottom + 100,
              },
            ]}>
            <Text style={styles.pshskylinetwrrsresultkicker}>
              Quiz Complete!
            </Text>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 49,
                marginTop: 40,
              }}>
              <Text style={styles.pshskylinetwrrsresultscore}>
                {pshskylinetwrrsscore}/{pshskylinetwrrsquizlength}
              </Text>
              <Text style={styles.pshskylinetwrrsresultpct}>
                {Math.round(
                  (pshskylinetwrrsscore / pshskylinetwrrsquizlength) * 100,
                )}
                %
              </Text>
              <Image
                source={require('../../assets/i/pshskylinwnstresfr.png')}
                style={{position: 'absolute'}}
              />
            </View>

            <Text style={styles.pshskylinetwrrsresulttitle}>
              {pshskylinetwrrsresultmeta.pshskylinetwrrstitle}
            </Text>
            <Text style={styles.pshskylinetwrrsresultsub}>
              {pshskylinetwrrsresultmeta.pshskylinetwrrssub}
            </Text>

            <View style={styles.pshskylinetwrrsstarsrow}>
              {Array.from({length: pshskylinetwrrsquizlength}).map(
                (_, pshskylinetwrrsi) => (
                  <View
                    key={pshskylinetwrrsi}
                    style={
                      pshskylinetwrrsi < pshskylinetwrrsscore
                        ? styles.pshskylinetwrrsstarfill
                        : styles.pshskylinetwrrsstaroutline
                    }>
                    {pshskylinetwrrsi < pshskylinetwrrsscore ? (
                      <Image
                        source={require('../../assets/i/pshskylinwnstar.png')}
                        style={styles.pshskylinetwrrsstaricon}
                      />
                    ) : null}
                  </View>
                ),
              )}
            </View>
            <View style={styles.pshskylinetwrrsresbtnrow}>
              <Pressable
                onPress={pshskylinetwrrsstart}
                style={({pressed}) => [
                  styles.pshskylinetwrrsretry,
                  pressed && styles.pshskylinetwrrsretrypress,
                ]}>
                <Image source={require('../../assets/i/pshskylinwnret.png')} />
                <Text style={styles.pshskylinetwrrsretrytxt}>Retry</Text>
              </Pressable>
              <Pressable
                onPress={pshskylinetwrrsshare}
                style={({pressed}) => [
                  styles.pshskylinetwrrssharewrap,
                  pressed && styles.pshskylinetwrrsprimpressed,
                ]}>
                <LinearGradient
                  colors={[...pshskylinetwrrsgradprimary]}
                  style={styles.pshskylinetwrrssharegrad}>
                  <Image
                    source={require('../../assets/i/pshskylinetwrrstsshr.png')}
                  />
                  <Text style={styles.pshskylinetwrrssharetxt}>
                    Share Score
                  </Text>
                </LinearGradient>
              </Pressable>
            </View>
          </View>
        ) : null}

        <View style={[styles.pshskylinetwrrsbottom]}>
          {pshskylinetwrrsphase === 'intro' ? (
            <Pressable
              onPress={pshskylinetwrrsstart}
              style={({pressed}) => [
                styles.pshskylinetwrrsprimwrap,
                pressed && styles.pshskylinetwrrsprimpressed,
              ]}>
              <LinearGradient
                colors={[...pshskylinetwrrsgradprimary]}
                style={styles.pshskylinetwrrsprim}>
                <Text style={styles.pshskylinetwrrsprimtxt}>Start Quiz 🚀</Text>
              </LinearGradient>
            </Pressable>
          ) : null}

          {pshskylinetwrrsphase === 'quiz' ? (
            <Pressable
              onPress={pshskylinetwrrsnext}
              disabled={!pshskylinetwrrsrevealed}
              style={({pressed}) => [
                styles.pshskylinetwrrsprimwrap,
                pressed &&
                  pshskylinetwrrsrevealed &&
                  styles.pshskylinetwrrsprimpressed,
                !pshskylinetwrrsrevealed && styles.pshskylinetwrrsprimdisabled,
              ]}>
              <LinearGradient
                colors={[...pshskylinetwrrsgradprimary]}
                style={styles.pshskylinetwrrsprim}>
                <Text style={styles.pshskylinetwrrsprimtxt}>
                  {pshskylinetwrrsqi >= pshskylinetwrrsquizlength - 1
                    ? 'See results'
                    : 'Next Question'}
                </Text>
                <Image source={require('../../assets/i/pshskylinwnxt.png')} />
              </LinearGradient>
            </Pressable>
          ) : null}
        </View>
      </View>
    </Pshskylinetwrrsclay>
  );
};

export default Pshskylinetwrrsquzz;

const styles = StyleSheet.create({
  pshskylinetwrrsclose: {
    width: 40,
    height: 34,
    borderRadius: 12,
    backgroundColor: '#FFFFFF10',
    borderWidth: 1,
    borderColor: '#FFFFFF18',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pshskylinetwrrsclosepressed: {
    opacity: 0.85,
  },

  pshskylinetwrrsroot: {
    flex: 1,
    backgroundColor: '#060B1A',
    paddingBottom: 100,
  },
  pshskylinetwrrsscroll: {
    paddingHorizontal: 18,

    paddingBottom: 30,
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
  pshskylinetwrrscard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: '#121826',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFFFFF12',
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  pshskylinetwrrscardemoji: {
    fontSize: 28,
  },
  pshskylinetwrrscardtxt: {
    flex: 1,
  },

  pshskylinetwrrscardtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 4,
  },
  pshskylinetwrrscardsub: {
    color: '#FFFFFF80',
    fontSize: 13,
    lineHeight: 18,
  },
  pshskylinetwrrsheaderrow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 14,
  },

  pshskylinetwrrstrack: {
    flex: 1,
    height: 6,
    borderRadius: 99,
    backgroundColor: '#FFFFFF12',
    overflow: 'hidden',
  },

  pshskylinetwrrstrackclip: {
    height: 6,
    borderRadius: 99,
    overflow: 'hidden',
  },
  pshskylinetwrrsproggradfill: {
    height: 6,
    borderRadius: 99,
  },
  pshskylinetwrrscounter: {
    color: '#FFFFFF99',
    fontSize: 13,
    fontWeight: '600',
    minWidth: 42,
    textAlign: 'right',
  },
  pshskylinetwrrsbadgesrow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  pshskylinetwrrsbadgeblue: {
    minWidth: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#2563EB26',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#2563EB4D',
    paddingVertical: 10,
  },
  pshskylinetwrrsbadgebluetxt: {
    color: '#93C5FD',
    fontSize: 14,
    fontWeight: '700',
  },
  pshskylinetwrrsbadgegold: {
    minWidth: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#FACC1526',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FACC154D',
    paddingVertical: 10,
  },
  pshskylinetwrrsbadgegoldtxt: {
    color: '#FACC15',
    fontSize: 14,
    fontWeight: '700',
  },
  pshskylinetwrrsimagewrap: {
    borderRadius: 22,
    overflow: 'hidden',
    marginBottom: 14,
    position: 'relative',
  },
  pshskylinetwrrsimage: {
    width: '100%',
    height: 200,
    borderRadius: 22,
  },
  pshskylinetwrrsimageph: {
    backgroundColor: '#1A1F2B',
  },
  pshskylinetwrrsqpill: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#00000088',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  pshskylinetwrrsqpilltxt: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  pshskylinetwrrsquestion: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 24,
    marginBottom: 19,
  },
  pshskylinetwrrsoption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF0D',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FFFFFF14',
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 10,
    minHeight: 54,
  },
  pshskylinetwrrsoptionpressed: {
    opacity: 0.92,
  },
  pshskylinetwrrsoptionok: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#22C55E26',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#22C55E80',
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 10,
    minHeight: 54,
  },
  pshskylinetwrrsoptionbad: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EF444426',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#EF444480',
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 10,
    minHeight: 54,
  },
  pshskylinetwrrsoptiontxt: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    flex: 1,
    paddingRight: 8,
  },
  pshskylinetwrrsoptiontxtok: {
    color: '#4ADE80',
    fontSize: 15,
    fontWeight: '700',
    flex: 1,
    paddingRight: 8,
  },
  pshskylinetwrrsoptiontxtbad: {
    color: '#FCA5A5',
    fontSize: 15,
    fontWeight: '700',
    flex: 1,
    paddingRight: 8,
  },
  pshskylinetwrrsmarkok: {
    color: '#4ADE80',
    fontSize: 16,
    fontWeight: '800',
  },
  pshskylinetwrrsmarkbad: {
    color: '#FECACA',
    fontSize: 16,
    fontWeight: '800',
  },
  pshskylinetwrrsresultscroll: {
    paddingHorizontal: 18,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  pshskylinetwrrsresultkicker: {
    color: '#FFFFFF66',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 20,
  },
  pshskylinetwrrsringrow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 16,
  },
  pshskylinetwrrsringsegwrap: {
    width: 36,
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  pshskylinetwrrsringseg: {
    flex: 1,
    borderRadius: 5,
  },
  pshskylinetwrrsringsegidle: {
    backgroundColor: '#FFFFFF18',
  },
  pshskylinetwrrsresultscore: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '900',
    top: 10,
  },
  pshskylinetwrrsresultpct: {
    color: '#FFFFFF80',
    fontSize: 15,
    marginTop: 4,
    marginBottom: 22,
    top: 12,
  },
  pshskylinetwrrsresulttitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#6366F1',
    textAlign: 'center',
    marginBottom: 8,
  },
  pshskylinetwrrsresultsub: {
    fontSize: 14,
    color: '#FFFFFF80',
    textAlign: 'center',
    marginBottom: 22,
  },
  pshskylinetwrrsstarsrow: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  pshskylinetwrrsstarfill: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#6366F1',
  },
  pshskylinetwrrsstaroutline: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFFFFF22',
    backgroundColor: '#FFFFFF0D',
  },
  pshskylinetwrrsstaricon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  pshskylinetwrrsbottom: {
    paddingHorizontal: 18,
    paddingTop: 12,
  },
  pshskylinetwrrsprimwrap: {
    borderRadius: 18,
    overflow: 'hidden',
  },
  pshskylinetwrrsprimpressed: {
    opacity: 0.9,
  },
  pshskylinetwrrsprimdisabled: {
    opacity: 0.45,
  },
  pshskylinetwrrsprim: {
    height: 56,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  pshskylinetwrrsprimtxt: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  pshskylinetwrrsresbtnrow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 40,
    width: '97%',
  },
  pshskylinetwrrsretry: {
    width: 114,
    height: 52,
    borderRadius: 14,
    backgroundColor: '#FFFFFF12',
    borderWidth: 1,
    borderColor: '#FFFFFF22',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  pshskylinetwrrsretrypress: {
    opacity: 0.88,
  },
  pshskylinetwrrsretrytxt: {
    color: '#FFFFFFB2',
    fontSize: 14,
    fontWeight: '600',
  },
  pshskylinetwrrssharewrap: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
  },
  pshskylinetwrrssharegrad: {
    height: 52,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  pshskylinetwrrssharetxt: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
});
