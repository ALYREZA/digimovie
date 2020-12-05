import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export interface Props {
  name: string;
}

const InputText: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default InputText;
