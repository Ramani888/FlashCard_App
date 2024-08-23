import React from 'react'
import { StyleSheet, TextInput } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

const AppInput = () => {
  return (
    <TextInput
        style={styles.input}
        placeholder="Create Name"
        placeholderTextColor="#aaa"
    />
  )
}

export default AppInput

const styles = StyleSheet.create({
    input: {
        height: verticalScale(52),
        borderRadius: scale(12),
        borderWidth: scale(1.5),
        borderColor: '#9F9F9F33',
        backgroundColor: '#9F9F9F33',
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: scale(16),
        color: '#FFFFFF66',
        padding: scale(10)
    }
});