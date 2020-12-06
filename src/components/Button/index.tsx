import React from 'react';
import {useTheme} from '@react-navigation/native';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  SafeAreaView,
  Text,
} from 'react-native';

export interface Props {
  title: string;
  onPress: () => void;
}

const Btn: React.FC<Props> = (props) => {
  const {colors, dark} = useTheme();
  const bgcolor = dark ? 'white' : 'grey';
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: 300,
          borderWidth: 1,
          borderColor: bgcolor,
          borderRadius: 15,
          height: 58,
          backgroundColor: bgcolor,
        }}>
        <TouchableHighlight
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: bgcolor,
            borderRadius: 15,
          }}
          onPress={props.onPress}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: colors.primary, fontSize: 25}}>
              {props.title}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 16,
  },
});

export default Btn;
