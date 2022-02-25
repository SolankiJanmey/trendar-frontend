import React, { useState, useRef } from 'react'
import { StyleSheet, View, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import RBSheet from "react-native-raw-bottom-sheet";
import { PrimaryText } from '../../components/PrimaryText';
import { PrimaryButton } from '../../components/PrimaryButton';
import { PrimaryTextInput } from '../../components/PrimaryTextInput';
import { CheckIcon } from '../../../assets/icons/CheckIcon';
import { BackButtonIcon } from '../../../assets/icons/BackButtonIcon';
import { FilterIcon } from '../../../assets/icons/FilterIcon';
import { ChatDetails } from './ChatDetails';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchIcon } from '../../../assets/icons/SearchIcon';

export const LandLoadChat = ({ navigation }: any) => {

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    let refRBSheet: any = useRef();
    const indicator = require("../../../assets/indicator.png");

    const nextButtonClickHandler = () => {
        navigation.navigate('ProfilePassion');
    }

    const [activityList, setActivityList] = useState([
        { id: 1, name: 'AMD', image: "" },
        { id: 2, name: 'Surat', image: "" },
        { id: 3, name: "BOM", image: "" }
    ])

    const [userMessageList, setUserMessageList] = useState([
        { id: 1, messengerName: "Emelie", lastMessage: "Sticker 😍", lastMessageTime: "23 min", unReadCount: 1 },
        { id: 2, messengerName: "Abigail", lastMessage: "Typing..", lastMessageTime: "27 min", unReadCount: 2 },
    ]);

    const renderActivity = ({ item }: any) => {
        return (
            <>
                <TouchableOpacity style={{ marginHorizontal: wp(3), alignItems: 'center' }}>
                    <View style={{ width: 66, height: 66, backgroundColor: 'red', borderRadius: 33 }}>

                    </View>
                    <View style={{ marginTop: hp(1) }}>
                        <PrimaryText textStyle={{ fontSize: 14, alignSelf: 'flex-start', color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                            {item?.name}
                        </PrimaryText>
                    </View>
                </TouchableOpacity>
            </>
        )
    }

    const renderItem = ({ item }: any) => {
        return (
            <>
                <TouchableOpacity onPress={() => { refRBSheet.current.open(), setIsFilterOpen(true) }} style={{ flexDirection: 'row', flex: 1, marginTop: hp(2), alignItems: 'center', justifyContent: 'center', }}>
                    <View style={{ width: 48, height: 48, backgroundColor: 'red', borderRadius: 24 }}>

                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, borderBottomWidth: 1, borderBottomColor: '#E8E6EA', marginHorizontal: wp(3), paddingBottom: hp(1) }}>
                        <View style={{ flex: 1, }}>
                            <PrimaryText textStyle={{ fontSize: 14, alignSelf: 'flex-start', color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                                {item?.messengerName}
                            </PrimaryText>
                            <PrimaryText textStyle={{ fontSize: 14, alignSelf: 'flex-start', color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                                {item?.lastMessage}
                            </PrimaryText>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <PrimaryText textStyle={{ fontSize: 14, alignSelf: 'flex-start', color: '#ADAFBB', fontWeight: '400', fontFamily: 'acme' }}>
                                {item?.lastMessageTime}
                            </PrimaryText>
                            <View style={{ width: wp(6), height: hp(3.2), borderRadius: 100, backgroundColor: '#E94057', justifyContent: 'center', alignItems: 'center' }}>
                                <PrimaryText textStyle={{ fontSize: 14, alignSelf: 'center', color: '#fff', fontWeight: '400', fontFamily: 'acme' }}>
                                    {item?.unReadCount}
                                </PrimaryText>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={isFilterOpen ? styles.highlightedView : styles.container}>
                <View style={{ marginHorizontal: wp(10), flex: 1 }}>
                    <View style={{ height: hp(10) }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, }}>
                                <PrimaryText textStyle={{ fontSize: 24, alignSelf: 'flex-start', color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                                    Messages
                                </PrimaryText>
                            </View>
                            <TouchableOpacity style={{ width: wp(12), height: hp(7), borderWidth: 1, borderColor: '#E8E6EA', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <FilterIcon />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View>
                            <PrimaryTextInput
                                value={''}
                                placeholder="Search"
                                onChangeText={(val: any) => { }}
                                inputStyle={styles.textInput}
                                onSubmitEditing={() => { }}
                            />
                            <View style={{ marginTop: hp(-5), marginLeft: wp(5) }}>
                                <SearchIcon />
                            </View>
                        </View>
                        <View style={{ marginTop: hp(5) }}>
                            <View>
                                <PrimaryText textStyle={{ fontSize: 18, alignSelf: 'flex-start', color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                                    Activities
                                </PrimaryText>
                            </View>
                            <View style={{ marginTop: hp(3) }}>
                                <FlatList
                                    data={activityList}
                                    renderItem={renderActivity}
                                    keyExtractor={(item: any) => item.id}
                                    horizontal={true}
                                />
                            </View>
                        </View>
                        <View style={{ marginTop: hp(2) }}>
                            <View>
                                <PrimaryText textStyle={{ fontSize: 18, alignSelf: 'flex-start', color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                                    Messages -AMD
                                </PrimaryText>
                            </View>
                            <View style={{ marginTop: hp(2) }}>
                                <FlatList
                                    data={userMessageList}
                                    renderItem={renderItem}
                                    keyExtractor={(item: any) => item.id}
                                />
                            </View>
                        </View>
                    </View>
                </View >
                <RBSheet
                    onClose={() => { setIsFilterOpen(false) }}
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={false}
                    customStyles={{
                        wrapper: {
                            backgroundColor: "transparent",
                        },
                        container: {
                            height: hp(90),
                            borderTopLeftRadius: 50,
                            borderTopRightRadius: 50,
                        },
                        draggableIcon: {
                            borderRadius: 100,
                            flex: 0,
                            marginTop: hp(-2),
                        },
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <View
                            style={{
                                width: wp(12),
                                height: hp(2),
                                backgroundColor: "#000",
                                alignSelf: "center",
                                borderBottomLeftRadius: 50,
                                borderBottomRightRadius: 50,
                            }}
                        >
                            <ImageBackground
                                source={indicator}
                                style={{
                                    height: hp(5),
                                    width: wp(15),
                                    alignContent: "center",
                                    alignSelf: "center",
                                }}
                            ></ImageBackground>
                        </View>
                        <ChatDetails />
                    </View>
                </RBSheet>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    highlightedView: {
        flex: 1,
        backgroundColor: "#E5E5E5",
    },
    textInput: {
        height: hp(7),
        width: wp(80),
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#E8E6EA',
        paddingLeft: wp(12),
        borderRadius: 15,
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