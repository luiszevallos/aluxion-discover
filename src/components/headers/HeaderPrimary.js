import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function HeaderPrimary(props) {
  const {title, close, white} = props;

  const navigation = useNavigation();

  const goToBack = () => navigation.goBack();

  const onOpenMenu = () => console.log('open or close');

  const handleOpPress = () => (close ? goToBack() : onOpenMenu());

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOpPress} style={styles.button}>
        {close ? (
          <AntDesign
            name="closecircleo"
            size={30}
            style={styles.close}
            color={white ? '#ffffff' : '#000000'}
          />
        ) : (
          <Image
            source={require('../../assets/Union.png')}
            style={styles.left}
          />
        )}
      </TouchableOpacity>
      {title ? (
        <View style={styles.containTitle}>
          <Text style={styles.title}>{title}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  button: {
    left: 0,
    paddingHorizontal: 5,
    marginLeft: 5,
    position: 'absolute',
    resizeMode: 'contain',
  },
  left: {
    height: 35,
    left: 5,
    resizeMode: 'contain',
  },
  close: {
    left: 10,
  },
  containTitle: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Museo Sans',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
    fontWeight: '500',
    color: '#000000',
  },
});
