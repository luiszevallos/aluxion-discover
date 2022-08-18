/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {FlatList, View, ScrollView, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import useUnsplash from '../../hooks/useUnsplash';
import ItemDetails from './ItemDetails';

export default function Collections(props) {
  const {photos, refetch, loading} = useUnsplash();

  useEffect(() => {
    if (!loading && photos.length === 0) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const {title} = props;

  const navigation = useNavigation();

  const renderItem = ({item, index}) => (
    <View
      key={item.id}
      style={[
        styles.image,
        {
          paddingTop: index % 2 ? 30 : 0,
          paddingBottom: index % 2 ? 0 : 30,
        },
      ]}>
      <ItemDetails
        onPress={det => navigation.navigate('details', {item: det})}
        item={item}
        stylesProps={styles.item}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {title ? (
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      ) : null}
      <ScrollView style={styles.list}>
        <FlatList
          data={photos}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatlist}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  title: {
    paddingVertical: 10,
    fontSize: 25,
    color: '#000000',
    paddingLeft: 20,
    fontWeight: '600',
  },
  flatlist: {
    flex: 1,
  },
  image: {
    height: 270,
    width: '50%',
  },
  item: {
    marginHorizontal: 10,
    borderRadius: 15,
  },
});
