import React, { useState, useRef, useContext } from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryText } from '../../components/PrimaryText';
import { PrimaryButton } from '../../components/PrimaryButton';
import { PrimaryTextInput } from '../../components/PrimaryTextInput';
import { CameraIcon } from '../../../assets/icons/CameraIcon';
import { ProfilesContext } from '../../context/ProfilesContext';

export const ProfileDetail = ({ navigation }: any) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneDetails, setPhoneDetails] = useState('');
    const [emailDetails, setEmailDetails] = useState('');
    const [image, setImage] = useState(null);

    const profilesContext = useContext(ProfilesContext);
    const { signUpUserDetails, setSignUpUserDetails }: any = profilesContext;
    console.log('++++++++++++++++', signUpUserDetails);

    let firstLetterRef: any = useRef();

    const confirmClickHandler = () => {
        let userData: any = {};
        let validForm = false;
        userData.firstName = firstName;
        userData.lastName = lastName;
        userData.userProfile = image || "";
        if (phoneDetails.length > 0) {
            userData.mobile = phoneDetails;
            validForm = true;
        }
        if (emailDetails.length > 0) {
            userData.email = emailDetails;
            validForm = true;
        }
        if (firstName.length > 0 && lastName.length > 0 && validForm) {
            setSignUpUserDetails({ ...signUpUserDetails, ...userData });
            navigation.navigate('ProfileType');
        } else {
            alert('Please enter valid details');
        }
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result: any = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
        });

        if (!result.cancelled) {
            if (result.uri) {
                let base64: any = await FileSystem.readAsStringAsync(result.uri, { encoding: 'base64' });
                setImage(base64);
            }
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{ marginHorizontal: wp(10), flex: 1, marginTop: hp(10) }}>
                    <View>
                        <PrimaryText textStyle={{ fontSize: 34, lineHeight: 50, alignSelf: 'flex-start', color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                            Profile details
                        </PrimaryText>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 0.4, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: hp(2) }}>

                            {
                                image ? (
                                    <Image
                                        style={{ width: 100, height: 100 }}
                                        source={{
                                            uri: `data:image/jpeg;base64,${image}`,
                                        }}
                                    />
                                ) : (
                                    <Image source={require('../../../assets/images/Profile/UserProfile.png')} />
                                )
                            }

                            <TouchableOpacity
                                onPress={() => { pickImage() }}
                                activeOpacity={1}
                                style={{
                                    width: wp(11), height: hp(5.8), borderRadius: 100,
                                    backgroundColor: '#E94057', justifyContent: 'center',
                                    alignItems: 'center', borderWidth: 3,
                                    borderColor: '#fff', marginLeft: wp(20),
                                    marginTop: hp(-3.5)
                                }}
                            >
                                <CameraIcon />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.6, marginTop: hp(5) }}>
                            <View style={{}}>
                                <View style={{ height: hp(10), flexDirection: 'row', borderWidth: 2, borderColor: '#E8E6EA', borderRadius: 15 }}>
                                    <PrimaryText textStyle={styles.labelStyle}>
                                        First name
                                    </PrimaryText>
                                    <PrimaryTextInput
                                        value={firstName}
                                        onChangeText={(val: any) => { setFirstName(val) }}
                                        inputStyle={styles.textInput}
                                        onSubmitEditing={() => { }}
                                    />
                                </View>
                                <View style={{ height: hp(10), marginTop: hp(3), flexDirection: 'row', borderWidth: 2, borderColor: '#E8E6EA', borderRadius: 15 }}>
                                    <PrimaryText textStyle={styles.labelStyle}>
                                        Last name
                                    </PrimaryText>
                                    <PrimaryTextInput
                                        value={lastName}
                                        onChangeText={(val: any) => { setLastName(val) }}
                                        inputStyle={styles.textInput}
                                        onSubmitEditing={() => { }}
                                    />
                                </View>
                                <View style={{ height: hp(10), marginTop: hp(3), flexDirection: 'row', borderWidth: 2, borderColor: '#E8E6EA', borderRadius: 15 }}>
                                    <PrimaryText textStyle={styles.labelStyle}>
                                        {signUpUserDetails.register_type == "mobile" ? "Email" : "Mobile Number"}
                                    </PrimaryText>
                                    {
                                        signUpUserDetails.register_type == "mobile" ? (
                                            <PrimaryTextInput
                                                value={emailDetails}
                                                onChangeText={(val: any) => { setEmailDetails(val) }}
                                                inputStyle={styles.textInput}
                                                onSubmitEditing={() => { }}
                                            />
                                        ) : (
                                            <PrimaryTextInput
                                                value={phoneDetails}
                                                onChangeText={(val: any) => { setPhoneDetails(val) }}
                                                inputStyle={styles.textInput}
                                                onSubmitEditing={() => { }}
                                                keyboardType={"number-pad"}
                                            />
                                        )
                                    }
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'flex-end', marginBottom: hp(5) }}>
                        <PrimaryButton
                            buttonStyle={{
                                marginTop: hp(4),
                                backgroundColor: "#E94057",
                                height: hp(8),
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 12,
                                fontFamily: 'acme'
                            }}
                            buttonTextStyle={{ color: "#fff", }}
                            onPress={() => { confirmClickHandler() }}
                        >
                            <PrimaryText textStyle={{ fontSize: 16, alignSelf: 'center', color: '#fff', fontWeight: '400', fontFamily: 'acme' }}>
                                Confirm
                            </PrimaryText>
                        </PrimaryButton>
                    </View>
                </View>
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
        fontFamily: 'acme'
    }
})