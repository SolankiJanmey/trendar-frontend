import React, { useState, useRef } from 'react'
import { StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { PrimaryText } from '../../components/PrimaryText';
import { PrimaryButton } from '../../components/PrimaryButton';
import { PrimaryTextInput } from '../../components/PrimaryTextInput';
import { TripleDotsIcon } from '../../../assets/icons/TripleDotsIcon';
import { BackButtonIcon } from '../../../assets/icons/BackButtonIcon';
import { VoiceIcon } from '../../../assets/icons/VoiceIcon';
import { StickersIcon } from '../../../assets/icons/StickersIcon';
import { DoneAllIcon } from '../../../assets/icons/DoneAllIcon';

export const ChatDetails = ({ navigation }: any) => {

    const [chatMessages, setChatMessages] = useState([
        {
            id: 1,
            message: "Hi Jake, how are you? I saw on the app that we’ve crossed paths several times this week 😄",
            messageSendTime: "2:55 PM",
            isSender: false,
            isMessageRead: false,
        },
        {
            id: 2,
            message: "Haha truly! Nice to meet you Grace! What about a cup of coffee today evening? ☕️",
            messageSendTime: "3:02 PM",
            isSender: true,
            isMessageRead: false,
        },
        {
            id: 3,
            message: "Great I will write later the exact time and place. See you soon!",
            messageSendTime: "3:12 PM",
            isSender: true,
            isMessageRead: false,
        }
    ]);

    const renderItem = ({ item }: any) => {
        return (
            <>
                <View style={item?.isSender ? styles.senderMessageMain : styles.receiverMessageMain}>
                    <View style={{}}>
                        <PrimaryText textStyle={item?.isSender ? styles.senderMessage : styles.receiverMessage}>
                            {item?.message}
                        </PrimaryText>
                    </View>
                    <View style={{ marginLeft: wp(1), marginTop: hp(1) }}>
                        <View style={item?.isSender ? { flexDirection: 'row', alignSelf: 'flex-end' } : null}>
                            <PrimaryText textStyle={item?.isSender ? styles.senderMessageTime : styles.receiverMessageTime}>
                                {item?.messageSendTime}
                            </PrimaryText>
                            <View style={{ marginTop: hp(0.5) }}>
                                {
                                    item?.isSender ? <DoneAllIcon /> : null
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </>
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, marginHorizontal: wp(8), }}>
                <View style={{ height: hp(10), flexDirection: 'row', marginTop: hp(3) }}>
                    <View style={{ width: 56, height: 56, backgroundColor: 'pink', borderRadius: 100 }}>

                    </View>
                    <View style={{ flex: 1, marginLeft: wp(5) }}>
                        <PrimaryText textStyle={{ fontSize: 24, alignSelf: 'flex-start', color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                            Grace
                        </PrimaryText>
                        <PrimaryText textStyle={{ fontSize: 14, alignSelf: 'flex-start', color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                            Online
                        </PrimaryText>
                    </View>
                    <TouchableOpacity style={{
                        width: wp(13),
                        height: hp(6.5), borderWidth: 1, borderColor: '#E8E6EA', borderRadius: 10, justifyContent: 'center', alignItems: 'center'
                    }}>
                        <TripleDotsIcon />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, borderTopWidth: 1, borderTopColor: 'rgba(0, 0, 0, 0.4)' }}>
                        </View>
                        <View style={{ flex: 1, marginHorizontal: wp(0) }}>
                            <PrimaryText
                                textStyle={{ fontSize: 12, color: '#000', alignSelf: 'center', fontFamily: 'acme', fontWeight: '400' }}
                            >
                                Today
                            </PrimaryText>
                        </View>
                        <View style={{ flex: 1, borderTopWidth: 1, borderTopColor: 'rgba(0, 0, 0, 0.4)' }}>
                        </View>
                    </View>
                    <View style={{ flex: 1, marginTop: hp(2) }}>
                        <FlatList
                            data={chatMessages}
                            renderItem={renderItem}
                            keyExtractor={(item: any) => item.id}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
                <View style={{ justifyContent: 'flex-end', marginVertical: hp(4), flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, marginRight: wp(2), flexDirection: 'row', alignItems: 'center' }}>
                        <View>
                            <PrimaryTextInput
                                value={''}
                                placeholder="Your message"
                                onChangeText={(val: any) => { }}
                                inputStyle={styles.textInput}
                                onSubmitEditing={() => { }}
                            />
                        </View>
                        <TouchableOpacity style={{ alignSelf: 'flex-end', marginLeft: wp(-10), paddingBottom: hp(2.5) }}>
                            <StickersIcon />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{
                        marginLeft: wp(5),
                        width: wp(13),
                        height: hp(6.5), borderWidth: 1, borderColor: '#E8E6EA', borderRadius: 10, justifyContent: 'center', alignItems: 'center'
                    }}>
                        <VoiceIcon />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        opacity: 1
    },
    textInput: {
        height: hp(8),
        width: wp(70),
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#E8E6EA',
        paddingLeft: wp(5),
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
    },
    receiverMessageMain: {
        marginTop: hp(2),
        alignSelf: 'flex-start',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    senderMessageMain: {
        marginTop: hp(2),
        alignSelf: 'flex-end'
    },
    receiverMessage: {
        maxWidth: wp(70),
        backgroundColor: '#E94057',
        opacity: 0.7,
        paddingHorizontal: wp(5),
        paddingVertical: hp(2),
        alignSelf: 'flex-start',
        fontFamily: 'acme',
        textAlign: 'left',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    senderMessage: {
        maxWidth: wp(70),
        backgroundColor: '#F3F3F3',
        paddingHorizontal: wp(5),
        paddingVertical: hp(2),
        alignSelf: 'flex-end',
        fontFamily: 'acme',
        textAlign: 'right',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    senderMessageTime: {
        fontSize: 14,
        alignSelf: 'flex-end',
        color: 'rgba(0, 0, 0, 0.4)',
        fontWeight: '400',
        fontFamily: 'acme'
    },
    receiverMessageTime: {
        fontSize: 14,
        alignSelf: 'flex-start',
        color: 'rgba(0, 0, 0, 0.4)',
        fontWeight: '400',
        fontFamily: 'acme'
    }
})