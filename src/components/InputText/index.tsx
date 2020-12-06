import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
export interface Props {
  name: string;
  onChangeText?: any;
  value?: string;
  keyboardType?: string;
  secureTextEntry?: boolean;
}
const {width} = Dimensions.get('screen');
const InputText: React.FC<Props> = (props) => {
  const {colors} = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: colors.text}}>{props.name}:</Text>
      <TextInput
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        style={{
          height: 40,
          width: width - 20,
          borderColor: colors.border,
          borderWidth: 1,
          paddingLeft: 3,
          color: colors.text,
        }}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </SafeAreaView>
  );
};

InputText.defaultProps = {
  keyboardType: 'email-address',
  secureTextEntry: false,
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default InputText;
