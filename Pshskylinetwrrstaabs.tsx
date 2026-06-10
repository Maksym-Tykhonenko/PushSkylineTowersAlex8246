import Pshskylinetwrrsmap from './Pshskylinetwrrs/Pshskylinetwrrsscrns/Pshskylinetwrrsmap';
import Pshskylinetwrrsarchtct from './Pshskylinetwrrs/Pshskylinetwrrsscrns/Pshskylinetwrrsarchtct';
import Pshskylinetwrrsfccts from './Pshskylinetwrrs/Pshskylinetwrrsscrns/Pshskylinetwrrsfccts';

import Pshskylinetwrrsquzz from './Pshskylinetwrrs/Pshskylinetwrrsscrns/Pshskylinetwrrsquzz';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React, {useRef} from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
  type ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Pshskylinetwrrsfacdes from './Pshskylinetwrrs/Pshskylinetwrrsscrns/Pshskylinetwrrsfacdes';
import Pshskylinetwrrscllctn from './Pshskylinetwrrs/Pshskylinetwrrsscrns/Pshskylinetwrrscllctn';

const Tab = createBottomTabNavigator();

const PshskylinetwrrsAnimatedButton = (props: Record<string, unknown>) => {
  const {children, style, onPress, onLongPress, ...rest} = props;
  const pshskylinetwrrsScale = useRef(new Animated.Value(1)).current;

  const pshskylinetwrrsHandlePressIn = () => {
    Animated.spring(pshskylinetwrrsScale, {
      toValue: 0.88,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const av = new Animated.Value(0);
  av.addListener(() => {
    return;
  });

  const pshskylinetwrrsHandlePressOut = () => {
    Animated.spring(pshskylinetwrrsScale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 8,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress as () => void}
      onLongPress={onLongPress as (() => void) | undefined}
      onPressIn={pshskylinetwrrsHandlePressIn}
      onPressOut={pshskylinetwrrsHandlePressOut}
      style={[style as ViewStyle, styles.pshskylinetwrrsButton]}
      {...rest}>
      <Animated.View
        style={[
          styles.pshskylinetwrrsButtonInner,
          {transform: [{scale: pshskylinetwrrsScale}]},
        ]}>
        {children as React.ReactNode}
      </Animated.View>
    </Pressable>
  );
};

const PshskylinetwrrsIcon = ({
  focused,
  source,
  label,
}: {
  focused: boolean;
  source: ImageSourcePropType;
  label: string;
}) => {
  return (
    <View style={styles.pshskylinetwrrsIconWrap}>
      <View style={styles.pshskylinetwrrsIconImageWrap}>
        <Image source={source} tintColor={focused ? '#60A5FA' : '#FFFFFF4D'} />
      </View>

      <Text
        style={[
          styles.pshskylinetwrrsLabel,
          focused
            ? styles.pshskylinetwrrsLabelFocused
            : styles.pshskylinetwrrsLabelIdle,
        ]}>
        {label}
      </Text>
    </View>
  );
};

const pshskylinetwrrsBarBackground = () => (
  <LinearGradient
    pointerEvents="none"
    colors={['#060B1AEB', '#060B1AEB']}
    style={StyleSheet.absoluteFill}
  />
);

const pshskylinetwrrsIconPlaces = ({focused}: {focused: boolean}) => (
  <PshskylinetwrrsIcon
    focused={focused}
    label="Explore"
    source={require('./assets/i/pshskylinetwrrstab1.png')}
  />
);

const pshskylinetwrrsIconSaved = ({focused}: {focused: boolean}) => (
  <PshskylinetwrrsIcon
    focused={focused}
    label="Saved"
    source={require('./assets/i/pshskylinetwrrstab2.png')}
  />
);

const pshskylinetwrrsIconMap = ({focused}: {focused: boolean}) => (
  <PshskylinetwrrsIcon
    focused={focused}
    label="Map"
    source={require('./assets/i/pshskylinetwrrstab3.png')}
  />
);

const pshskylinetwrrsIconBlog = ({focused}: {focused: boolean}) => (
  <PshskylinetwrrsIcon
    focused={focused}
    label="Blog"
    source={require('./assets/i/pshskylinetwrrstab4.png')}
  />
);

const pshskylinetwrrsIconFacts = ({focused}: {focused: boolean}) => (
  <PshskylinetwrrsIcon
    focused={focused}
    label="Facts"
    source={require('./assets/i/pshskylinetwrrstab5.png')}
  />
);

const pshskylinetwrrsIconQuiz = ({focused}: {focused: boolean}) => (
  <PshskylinetwrrsIcon
    focused={focused}
    label="Quiz"
    source={require('./assets/i/pshskylinetwrrstab6.png')}
  />
);

const pshskylinetwrrsButton = (props: Record<string, unknown>) => (
  <PshskylinetwrrsAnimatedButton {...props} />
);

const Pshskylinetwrrstaabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.pshskylinetwrrsBar],
        tabBarActiveTintColor: '#FFFFFF',
        tabBarButton: pshskylinetwrrsButton,
        tabBarBackground: pshskylinetwrrsBarBackground,
      }}>
      <Tab.Screen
        name="Pshskylinetwrrsfacdes"
        component={Pshskylinetwrrsfacdes}
        options={{
          tabBarIcon: pshskylinetwrrsIconPlaces,
        }}
      />
      <Tab.Screen
        name="Pshskylinetwrrscllctn"
        component={Pshskylinetwrrscllctn}
        options={{
          tabBarIcon: pshskylinetwrrsIconSaved,
        }}
      />
      <Tab.Screen
        name="Pshskylinetwrrsmap"
        component={Pshskylinetwrrsmap}
        options={{
          tabBarIcon: pshskylinetwrrsIconMap,
        }}
      />
      <Tab.Screen
        name="Pshskylinetwrrsarchtct"
        component={Pshskylinetwrrsarchtct}
        options={{
          tabBarIcon: pshskylinetwrrsIconBlog,
        }}
      />
      <Tab.Screen
        name="Pshskylinetwrrsfccts"
        component={Pshskylinetwrrsfccts}
        options={{
          tabBarIcon: pshskylinetwrrsIconFacts,
        }}
      />
      <Tab.Screen
        name="Pshskylinetwrrsquzz"
        component={Pshskylinetwrrsquzz}
        options={{
          tabBarIcon: pshskylinetwrrsIconQuiz,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  pshskylinetwrrsIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pshskylinetwrrsIconCircleFocused: {
    borderWidth: 1,
    borderColor: '#00D4FF',
    backgroundColor: '#00D4FF1A',
  },

  pshskylinetwrrsLabelFocused: {
    color: '#60A5FA',
    fontSize: 9,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },

  pshskylinetwrrsBar: {
    elevation: 0,
    paddingTop: 1,
    justifyContent: 'center',
    position: 'absolute',
    paddingHorizontal: 6,
    borderColor: '#FFFFFF14',
    borderTopWidth: 1,
    borderTopColor: '#FFFFFF14',
    backgroundColor: 'transparent',
    height: 80,
    paddingBottom: 24,
    overflow: 'hidden',
  },

  pshskylinetwrrsButton: {
    flex: 1,
  },
  pshskylinetwrrsButtonInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pshskylinetwrrsIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
  },
  pshskylinetwrrsIconImageWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 9,
  },

  pshskylinetwrrsLabel: {
    fontSize: 9,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center',
  },

  pshskylinetwrrsLabelIdle: {
    color: '#FFFFFF59',
  },
});

export default Pshskylinetwrrstaabs;
