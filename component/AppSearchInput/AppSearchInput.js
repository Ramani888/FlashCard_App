import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import SearchIcon from '../../Assets/VersesScreen/SearchIcon';

const AppSearchInput = () => {
  return (
    <View style={styles.container}>
        <View style={styles.SearchButton}>
            <SearchIcon />
        </View>
        <TextInput
            style={styles.input}
            placeholder="Search Hashtags"
            placeholderTextColor="#aaa"
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    input: {
        height: verticalScale(52),
        borderRadius: scale(12),
        borderWidth: scale(1.5),
        borderColor: '#9F9F9F33',
        paddingLeft: scale(50),
        backgroundColor: '#9F9F9F33',
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: scale(16),
        color: '#FFFFFF66'
    },
    SearchButton: {
        top: scale(10),
        left: scale(10),
        width: scale(33.33),
        height: verticalScale(33.33),
        backgroundColor: '#9F9F9F66',
        borderRadius: scale(12),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    }
});

export default AppSearchInput;
