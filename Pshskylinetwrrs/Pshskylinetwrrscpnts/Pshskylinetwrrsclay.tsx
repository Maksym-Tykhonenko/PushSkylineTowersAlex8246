import React from 'react';

import {ScrollView, StyleSheet, View} from 'react-native';

const Pshskylinetwrrsclay = ({
  children,
  pshskylinetwrrsScroll = true,
  bounce = true,
}: {
  children: React.ReactNode;
  pshskylinetwrrsScroll?: boolean;
  bounce?: boolean;
}) => {
  return (
    <View style={styles.pshskylinetwrrsBackground}>
      {pshskylinetwrrsScroll ? (
        <ScrollView
          bounces={bounce}
          contentContainerStyle={styles.pshskylinetwrrsScrollContent}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        <View style={styles.pshskylinetwrrsFill}>{children}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pshskylinetwrrsScrollContent: {
    flexGrow: 1,
  },
  pshskylinetwrrsFill: {
    flex: 1,
  },
  pshskylinetwrrsBackground: {
    flex: 1,
    backgroundColor: '#060B1A',
  },
});

export default Pshskylinetwrrsclay;
