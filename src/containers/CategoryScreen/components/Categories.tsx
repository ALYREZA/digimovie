import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Category from './Category';
export default function Categories({items}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}>
        {items.map(({name, id}) => {
          return <Category key={String(id)} title={name} id={id} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 0,
  },
});
