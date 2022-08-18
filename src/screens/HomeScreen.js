import React from 'react';
import {View, StyleSheet} from 'react-native';
import HeaderPrimary from '../components/headers/HeaderPrimary';
import Collections from '../components/common/Collections';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HeaderPrimary title="Discover" />
      <Collections />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
