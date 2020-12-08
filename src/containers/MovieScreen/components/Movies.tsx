import React from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import Movie from './Movie';
const renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: '86%',
        backgroundColor: '#CED0CE',
        marginLeft: '14%',
      }}
    />
  );
};
export default function Movies({items, reachedTheEnd}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        removeClippedSubviews={true}
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        keyExtractor={(item, index) => String(item.id)}
        data={items}
        onEndReached={({distanceFromEnd}) => {
          if (distanceFromEnd < 0) {
            reachedTheEnd(distanceFromEnd);
          }
        }}
        onEndReachedThreshold={0.1}
        renderItem={({item, index, separators}) => <Movie item={item} />}
      />
    </SafeAreaView>
  );
}
