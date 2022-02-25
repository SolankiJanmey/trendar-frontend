import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { PrimaryText } from "../../components/PrimaryText";
import { PrimaryButton } from "../../components/PrimaryButton";
import { PrimaryTextInput } from '../../components/PrimaryTextInput';
import { DownArrowIcon } from "../../../assets/icons/DownArrowIcon";
import { ProfilesContext } from "../../context/ProfilesContext";

export const AddEmail = ({ navigation }: any) => {

    const profilesContext = useContext(ProfilesContext);
    console.log('========>>>>', profilesContext);
    const { signUpUserDetails, setSignUpUserDetails }: any = profilesContext;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const nextStepClickHandler = () => {
        let emailREGX = /^\w+[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
        if (emailREGX.test(email) && email.length > 0 && password.length > 0) {
            let userData = {
                email: email,
                password: password,
                register_type: 'email',
            }
            setSignUpUserDetails({ ...userData });
            navigation.navigate("EnterCode");
        } else {
            alert('Enter valid details');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{ flex: 1, marginTop: hp(5), marginHorizontal: wp(10) }}>
                    <View>
                        <PrimaryText
                            textStyle={{
                                paddingTop: hp(10),
                                fontSize: 34,
                                color: "#000",
                                alignSelf: "flex-start",
                                fontFamily: "acme",
                            }}
                        >
                            My Email
                        </PrimaryText>
                    </View>
                    <View style={{ marginTop: hp(1) }}>
                        <PrimaryText
                            textStyle={{
                                fontSize: 14,
                                color: "rgba(0, 0, 0, 0.7)",
                                textAlign: "left",
                                alignSelf: "flex-start",
                                fontFamily: "acme",
                            }}
                        >
                            Please enter your valid email address.
                        </PrimaryText>
                    </View>
                    <View style={{ marginTop: hp(3), borderWidth: 1, borderColor: '#E8E6EA', height: hp(8), borderRadius: 15, flexDirection: 'row', alignItems: 'center', paddingHorizontal: wp(5) }}>
                        <View style={{ flex: 0.3, marginVertical: hp(5), flexDirection: 'row', borderRightWidth: 1, borderRightColor: "#E8E6EA", alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', height: hp(5) }}>
                                <PrimaryText
                                    textStyle={{
                                        fontSize: 14,
                                        fontWeight: '400',
                                        fontFamily: 'acme',
                                        color: "rgba(0, 0, 0, 0.7)",
                                        textAlign: "center",
                                        alignSelf: "flex-start",
                                        paddingTop: hp(1),
                                    }}
                                >
                                    Email
                                </PrimaryText>
                            </View>
                        </View>
                        <View style={{ flex: 0.7, marginLeft: wp(3) }}>
                            <PrimaryTextInput
                                value={email}
                                onChangeText={(val: any) => { setEmail(val) }}
                                inputStyle={styles.textInput}
                                onSubmitEditing={() => { }}
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: hp(3), borderWidth: 1, borderColor: '#E8E6EA', height: hp(8), borderRadius: 15, flexDirection: 'row', alignItems: 'center', paddingHorizontal: wp(5) }}>
                        <View style={{ flex: 0.3, marginVertical: hp(3), flexDirection: 'row', borderRightWidth: 1, borderRightColor: "#E8E6EA", alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', height: hp(5) }}>
                                <PrimaryText
                                    textStyle={{
                                        fontSize: 14,
                                        fontWeight: '400',
                                        fontFamily: 'acme',
                                        color: "rgba(0, 0, 0, 0.7)",
                                        textAlign: "center",
                                        alignSelf: "flex-start",
                                        paddingTop: hp(1),
                                    }}

                                >
                                    Password
                                </PrimaryText>
                            </View>
                        </View>
                        <View style={{ flex: 0.7, marginLeft: wp(3), maxWidth: wp(80) }}>
                            <PrimaryTextInput
                                value={password}
                                onChangeText={(val: any) => { setPassword(val) }}
                                inputStyle={styles.textInput}
                                onSubmitEditing={() => { }}
                                secureTextEntry={true}
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: hp(5) }}>
                        <PrimaryButton
                            buttonStyle={{
                                marginTop: hp(4),
                                backgroundColor: "#E94057",
                                height: hp(8),
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 15,
                                fontFamily: "acme",
                            }}
                            buttonTextStyle={{ fontSize: 16 }}
                            onPress={() => {
                                nextStepClickHandler();
                            }}
                        >
                            Continue
                        </PrimaryButton>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    textInput: {
        width: wp(100),
        maxWidth: '100%',
        height: hp(5),
        textAlign: "left",
        borderRadius: 15,
        color: "#000",
        fontSize: 14,
    },
});
