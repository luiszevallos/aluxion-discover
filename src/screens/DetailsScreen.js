import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import HeaderPrimary from '../components/headers/HeaderPrimary';

const height = Dimensions.get('window').height;

export default function DetailsScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const item = route.params.item;

  const goToProfile = () => navigation.navigate('profile', {user: item.user});

  return (
    <ImageBackground source={{uri: item.urls.regular}} style={styles.container}>
      <HeaderPrimary close={true} white={true} />
      <View style={styles.details}>
        <Text style={styles.description} numberOfLines={3}>
          {item.description}
        </Text>
        <Text style={styles.likes}>{`${item.likes} likes`}</Text>
        <View style={styles.user}>
          <Image
            source={{uri: item.user.profile_image.medium}}
            style={styles.userImage}
          />
          <View>
            <Text style={styles.name}>{item.user.name}</Text>
            <TouchableOpacity style={styles.btnProfile} onPress={goToProfile}>
              <Text style={styles.btnProfileText}>View Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    height,
  },
  details: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 20,
    paddingVertical: 20,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  description: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '500',
    paddingVertical: 10,
    paddingBottom: 5,
  },
  likes: {
    color: '#ffffff',
    fontSize: 15,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  user: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 20,
    resizeMode: 'contain',
  },
  name: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 15,
  },
  btnProfile: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    marginTop: 5,
  },
  btnProfileText: {
    color: '#ffffff',
    fontSize: 15,
  },
});
