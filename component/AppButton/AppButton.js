import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'

const AppButton = ({ title, handleClick, backgroundColor = '#146D8B', color = '#FFFFFF' }) => {
  return (
    <TouchableOpacity style={{...styles.AppButtonContainer, backgroundColor: backgroundColor}} onPress={() => handleClick()}>
      <Text style={{...styles.AppButtonText, color: color}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
  AppButtonContainer: {
    width: '100%',
    height: verticalScale(52),
    borderRadius: scale(12),
    padding: '12px, 24px, 12px, 24px',
    backgroundColor: '#146D8B',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  AppButtonText: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: scale(18),
    color: '#FFFFFF',
    textAlign: 'center'
  }
});