import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { CREATE_FOLDER_BUTTON_TITLE, CREATE_SET_BUTTON_TITLE, FOLDER_BUTTON_TITLE, SET_BUTTON_TITLE, VERSES_SCREEN_TITLE } from '../utils/consts/Verses';
import BackIcon from '../Assets/VersesScreen/BackIcon';
import SearchIcon from '../Assets/VersesScreen/SearchIcon';
import AppSearchInput from '../component/AppSearchInput/AppSearchInput';
import AppButton from '../component/AppButton/AppButton';

const VersesScreen = () => {
    const [versesType, setVersesType] = useState('SET')
    const [isSearch, setIsSearch] = useState(false);

    const handleClick = (data) => {
        setVersesType(data)
    }

    console.log('versesType', versesType)
    return (
        <View style={styles?.VersesScreenContainer}>
            <StatusBar backgroundColor={'#00394D'} />
            <View style={styles.VersesScreenHeaderContainer}>
                <View style={styles.VersesScreenHeaderWrapper}>
                    <TouchableOpacity>
                        <BackIcon />
                    </TouchableOpacity>
                    <Text style={styles.HeaderTitle}>{VERSES_SCREEN_TITLE}</Text>
                    <TouchableOpacity style={styles.SearchButton} onPress={() => setIsSearch(!isSearch)}>
                        <SearchIcon />
                    </TouchableOpacity>
                </View>
                {isSearch && <AppSearchInput />}
                <View style={styles.ButtonContainer}>
                    <AppButton title={SET_BUTTON_TITLE} backgroundColor={versesType === 'SET' ? '#FFFFFF' : '#146D8B'} color={versesType === 'SET' ? '#040415' : '#FFFFFF'} handleClick={() => handleClick('SET')}/>
                    <AppButton title={FOLDER_BUTTON_TITLE} backgroundColor={versesType === 'FOLDER' ? '#FFFFFF' : '#146D8B'} color={versesType === 'FOLDER' ? '#040415' : '#FFFFFF'} handleClick={() => handleClick('FOLDER')}/>
                </View>
            </View>
            {versesType === 'SET' ? (
                <>
                    <View style={styles.VersesScreenBodyContainer}>
                    </View>
                    <View style={styles.VersesScreenFooterContainer}>
                        <AppButton title={CREATE_SET_BUTTON_TITLE} handleClick={() => {}}/>
                    </View>
                </>
            ) : (
                <>
                    <View style={styles.VersesScreenBodyContainer}></View>
                    <View style={styles.VersesScreenFooterContainer}>
                        <AppButton title={CREATE_FOLDER_BUTTON_TITLE} handleClick={() => {}}/>
                    </View>
                </>
            )}
        </View>
    )
}

export default VersesScreen

const styles = StyleSheet.create({
    VersesScreenContainer: {
        flex: 1
    },
    VersesScreenHeaderContainer: {
        backgroundColor: '#00394D',
        padding: scale(20),
        display: 'flex',
        flexDirection: 'column',
        gap: scale(20)
    },
    VersesScreenHeaderWrapper: {
        height: verticalScale(32),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    HeaderTitle: {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: scale(24),
        color: '#FFFFFF'
    },
    SearchButton: {
        width: scale(43.33),
        height: verticalScale(43.33),
        backgroundColor: '#9F9F9F66',
        borderRadius: scale(12),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ButtonContainer: {
        width: '48%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(10)
    },
    VersesScreenBodyContainer: {
        flex: 1,
    },
    VersesScreenFooterContainer: {
        padding: scale(20)
    }
});