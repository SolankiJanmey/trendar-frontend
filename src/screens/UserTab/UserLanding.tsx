import React, { useState, useRef, useEffect, useContext } from 'react'
import { StyleSheet, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { PrimaryText } from '../../components/PrimaryText';
import { PrimaryButton } from '../../components/PrimaryButton';
import { PrimaryTextInput } from '../../components/PrimaryTextInput';
import { CheckIcon } from '../../../assets/icons/CheckIcon';
import { BackButtonIcon } from '../../../assets/icons/BackButtonIcon';
import { FilterIcon } from '../../../assets/icons/FilterIcon';
import { DisLikeIcon } from '../../../assets/icons/DisLikeIcon';
import { LikeHeartIcon } from '../../../assets/icons/LikeHeartIcon';
import { StarFavoriteIcon } from '../../../assets/icons/StarFavoriteIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DoneAllIcon } from '../../../assets/icons/DoneAllIcon';
import { AuthContext } from '../../context/AuthContext';
import LocalStorge from '../../services/LocalStorge';

export const UserLanding = ({ navigation }: any) => {

    const { usersignOut } = useContext(AuthContext);
    const [interestList, setInterestList] = useState([
        { id: 1, name: "Travelling", isSelected: true },
        { id: 2, name: "Books", isSelected: true },
        { id: 3, name: "Music", isSelected: false },
        { id: 4, name: "Dancing", isSelected: false },
        { id: 5, name: "Modeling", isSelected: false },
    ]);

    const [userDetails, setUserDetails] = useState([]);


    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = async () => {
        const user = await LocalStorge.getValue('signInUser').then((userData) => {
            if (userData) {
                return userData
            }
        });
        if (user) {
            setUserDetails(JSON.parse(user));
        }
    }

    const backButtonClickHandler = () => {
        navigation.goBack();
    }

    const logOutButtonClickHandler = () => {
        usersignOut();
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.5 }}>
                        <ImageBackground source={require('../../../assets/images/Profile/UserTabProfile.png')} resizeMode="cover" style={{ flex: 1 }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', position: 'absolute', marginTop: hp(3), marginLeft: wp(5), backgroundColor: 'transparent' }}>
                                <TouchableOpacity onPress={() => { backButtonClickHandler() }} style={{ width: wp(12), height: hp(7), borderWidth: 1, borderColor: '#E8E6EA', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <BackButtonIcon color="#fff" />
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ flex: 0.5, marginTop: hp(-5), backgroundColor: '#fff', borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp(-5), alignItems: 'center', marginHorizontal: wp(5) }}>
                            <TouchableOpacity style={{
                                width: 78,
                                height: 78,
                                borderRadius: 100,
                                backgroundColor: '#fff',
                                justifyContent: 'center',
                                alignItems: 'center',
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.5,
                                shadowRadius: 20,
                                elevation: 5,
                            }}>
                                <DisLikeIcon />
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                width: 99,
                                height: 99,
                                borderRadius: 100,
                                backgroundColor: '#E94057',
                                justifyContent: 'center',
                                alignItems: 'center',
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.5,
                                shadowRadius: 20,
                                elevation: 5,
                            }}>
                                <LikeHeartIcon />
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                width: 78,
                                height: 78,
                                borderRadius: 100,
                                backgroundColor: '#fff',
                                justifyContent: 'center',
                                alignItems: 'center',
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.5,
                                shadowRadius: 20,
                                elevation: 5,
                            }}>
                                <StarFavoriteIcon />
                            </TouchableOpacity>
                        </View>
                        <ScrollView >
                            <View style={{ marginTop: hp(2), marginHorizontal: wp(8) }}>
                                <View>
                                    <PrimaryText textStyle={{ fontSize: 24, alignSelf: 'flex-start', color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                                        Jim Harper, 29
                                    </PrimaryText>
                                    <PrimaryText textStyle={{ fontSize: 14, alignSelf: 'flex-start', color: 'rgba(0, 0, 0, 0.7)', fontWeight: '400', fontFamily: 'acme' }}>
                                        Senior Paper Salesmen
                                    </PrimaryText>
                                </View>
                                <View style={{ marginTop: hp(2) }}>
                                    <PrimaryText textStyle={{ fontSize: 16, alignSelf: 'flex-start', color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                                        Location
                                    </PrimaryText>
                                    <PrimaryText textStyle={{ fontSize: 14, alignSelf: 'flex-start', color: 'rgba(0, 0, 0, 0.7)', fontWeight: '400', fontFamily: 'acme' }}>
                                        Toronto , ON
                                    </PrimaryText>
                                </View>
                                <View style={{ marginTop: hp(2) }}>
                                    <PrimaryText textStyle={{ fontSize: 16, alignSelf: 'flex-start', color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                                        About
                                    </PrimaryText>
                                    <PrimaryText textStyle={{ fontSize: 14, alignSelf: 'flex-start', color: 'rgba(0, 0, 0, 0.7)', fontWeight: '400', fontFamily: 'acme', textAlign: 'left' }}>
                                        Hi, My name is Jim, i am looking for a condo in core downtown for me and my wife. We are both working at a papercompany and have a a great credit score. ..
                                    </PrimaryText>
                                    <PrimaryText textStyle={{ fontSize: 14, alignSelf: 'flex-start', color: '#E94057', fontWeight: '400', fontFamily: 'acme' }}>
                                        Read more
                                    </PrimaryText>
                                </View>
                                <View style={{ marginVertical: hp(3) }}>
                                    <PrimaryText textStyle={{ fontSize: 16, alignSelf: 'flex-start', color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                                        Interests
                                    </PrimaryText>
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: hp(2), justifyContent: 'space-around' }}>
                                        {
                                            interestList.map((item: any, index: number) => (
                                                <TouchableOpacity style={item.isSelected ? { flexDirection: 'row', borderWidth: 1, borderColor: '#E94057', marginVertical: hp(2), padding: 10, borderRadius: 8 } : { flexDirection: 'row', borderWidth: 1, borderColor: '#E8E6EA', marginVertical: hp(2), padding: 15, borderRadius: 8, alignSelf: 'flex-start' }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <View style={{ marginRight: wp(1.5) }}>
                                                            {
                                                                item.isSelected ? <DoneAllIcon /> : null
                                                            }
                                                        </View>
                                                        <View>
                                                            <PrimaryText textStyle={item.isSelected ? { fontSize: 16, alignSelf: 'flex-start', color: '#E94057', fontWeight: '400', fontFamily: 'acme', } : { fontSize: 16, alignSelf: 'flex-start', color: '#000', fontWeight: '400', fontFamily: 'acme', }}>
                                                                {item.name}
                                                            </PrimaryText>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                            ))
                                        }
                                    </View>
                                </View>
                            </View>
                            <View>
                                <PrimaryButton
                                    buttonStyle={{
                                        marginVertical: hp(4),
                                        backgroundColor: "#E94057",
                                        height: hp(8),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginHorizontal: wp(10),
                                        borderRadius: 15,
                                    }}
                                    buttonTextStyle={{
                                        color: "#fff",
                                        fontFamily: "acme",
                                        fontSize: 16,
                                    }}
                                    onPress={() => {
                                        logOutButtonClickHandler()
                                    }}
                                >
                                    Logout
                                </PrimaryButton>
                            </View>
                        </ScrollView>
                    </View>
                </View >
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    textInput: {
        height: hp(10),
        width: wp(80),
        fontSize: 14,
        marginLeft: wp(8),
        color: '#000'
    },
    labelStyle: {
        fontSize: 12,
        alignSelf: 'flex-start',
        color: 'rgba(0, 0, 0, 0.4)',
        fontWeight: '400',
        position: 'absolute',
        marginTop: hp(-1.3),
        marginLeft: wp(6),
        backgroundColor: '#fff',
        paddingHorizontal: wp(2),
    }
})