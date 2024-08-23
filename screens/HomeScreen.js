import React from 'react'
import { Button, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import GlobalIcon from '../Assets/HomeScreen/GlobalIcon'
import TimeIcon from '../Assets/HomeScreen/TimeIcon'
import ProfileIcon from '../Assets/HomeScreen/ProfileIcon'
import { CARD_GENERAL_TITLE, CARD_QUESTIONS_TITLE, CARD_TYPE_TITLE, CARD_VERSES_TITLE } from '../utils/consts/Home'
import AppButton from '../component/AppButton/AppButton'

const HomeScreen = () => {
    const HeaderMenuData = [
        {
            MenuIcon: <GlobalIcon />
        },
        {
            MenuIcon: <TimeIcon />
        },
        {
            MenuIcon: <ProfileIcon />
        }
    ]
    return (
        <View style={styles.HomeScreenContainer}>
            <StatusBar backgroundColor={'#00394D'} />
            <View style={styles.HomeScreenHeaderContainer}>
                <View style={styles.HeaderMenuContainer}>
                    {HeaderMenuData?.map((item) => {
                        return (
                            <View style={styles.HeaderMenu}>{item?.MenuIcon}</View>
                        )
                    })}
                </View>
            </View>
            <View style={styles.HomeScreenBodyContainer}>
                <View style={styles.CardTypeContainer}>
                    <Text style={styles.CardTypeTitle}>{CARD_TYPE_TITLE}</Text>
                    <View style={styles.CardTypeWrapper}>
                        <AppButton title={CARD_VERSES_TITLE} handleClick={() => {}} />
                        <AppButton title={CARD_QUESTIONS_TITLE} handleClick={() => {}} />
                        <AppButton title={CARD_GENERAL_TITLE} handleClick={() => {}} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    HomeScreenContainer: {
        flex: 1,
    },
    HomeScreenHeaderContainer: {
        height: verticalScale(340),
        backgroundColor: '#00394D',
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    HomeScreenBodyContainer: {
        padding: scale(20),
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    HeaderMenuContainer: {
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    HeaderMenu: {
        width: scale(43.33),
        height: verticalScale(43.33),
        backgroundColor: '#9F9F9F66',
        borderRadius: scale(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    CardTypeContainer: {
        width: '100%',
        marginTop: verticalScale(40),
        height: verticalScale(244),
        display: 'flex',
        flexDirection: 'column',
        gap: scale(20),
    },
    CardTypeTitle: {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: scale(24),
        color: '#000000',
        textAlign: 'center',
    },
    CardTypeWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: scale(10),
    }
})