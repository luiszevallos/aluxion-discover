import React from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';
import {useRoute} from '@react-navigation/native';

import HeaderPrimary from '../components/headers/HeaderPrimary';
import Collections from '../components/common/Collections';

const width = Dimensions.get('window').width;

export default function ProfileScreen() {
  const route = useRoute();
  const user = route.params.user;
  console.log(user);

  return (
    <View style={styles.container}>
      <HeaderPrimary close={true} />
      <View style={styles.user}>
        <Image
          source={{uri: user.profile_image.medium}}
          style={styles.userImage}
        />
        <View style={styles.description}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.bio}>{user.bio}</Text>
        </View>
      </View>
      <Collections title="My Photos" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  description: {
    width: width - 115,
  },
  bio: {
    fontSize: 13,
  },
  name: {
    fontWeight: '500',
    fontSize: 15,
    paddingBottom: 5,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 20,
    resizeMode: 'contain',
  },
});
