import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function ItemDetails(props) {
  const {item, stylesProps, onPress} = props;

  const handleOnPress = () => (onPress ? onPress(item) : null);

  return (
    <TouchableOpacity
      style={[styles.container, stylesProps]}
      onPress={handleOnPress}>
      <ImageBackground source={{uri: item.urls.regular}} style={styles.image}>
        <View style={styles.body}>
          <Text style={styles.description} numberOfLines={1}>
            {item.description}
          </Text>
          <Text style={styles.likes}>{`${item.likes} likes`}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    hieght: 200,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    position: 'relative',
  },
  body: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    minHeight: 30,
    paddingVertical: 10,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  description: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '500',
    paddingBottom: 5,
  },
  likes: {
    color: '#ffffff',
    fontSize: 12,
  },
  name: {
    color: '#ffffff',
    fontSize: 13,
  },
});
