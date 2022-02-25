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

export const AddNumber = ({ navigation }: any) => {

  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const profilesContext = useContext(ProfilesContext);
  const { signUpUserDetails, setSignUpUserDetails }: any = profilesContext;

  const nextStepClickHandler = () => {
    let phoneNumberREGX = /^(\d+-?)+\d+$/;
    if (number.length > 0 && password.length > 0 && phoneNumberREGX.test(number)) {
      let userData = {
        mobile: number,
        password: password,
        register_type: 'mobile',
      }
      setSignUpUserDetails({ signUpUserDetails, ...userData });
      navigation.navigate("EnterCode");
    } else {
      alert('Please enter valid values');
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
              My mobile
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
              Please enter your valid phone number. We will send you a 4-digit
              code to verify your account.
            </PrimaryText>
          </View>
          <View style={{ marginTop: hp(3), borderWidth: 1, borderColor: '#E8E6EA', height: hp(8), borderRadius: 15, flexDirection: 'row', alignItems: 'center', paddingHorizontal: wp(5) }}>
            <TouchableOpacity style={{ flex: 0.3, flexDirection: 'row', borderRightWidth: 1, borderRightColor: "#E8E6EA", alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', height: hp(5) }}>
                <Image style={{ width: wp(10), height: hp(5) }} source={require('../../../assets/images/SignUp/canada.png')} />
                <PrimaryText
                  textStyle={{
                    fontSize: 14,
                    color: "rgba(0, 0, 0, 0.7)",
                    textAlign: "center",
                    alignSelf: "flex-start",
                    fontFamily: "acme",
                    paddingTop: hp(1),
                    paddingLeft: wp(1)
                  }}
                >
                  (+1)
                </PrimaryText>
              </View>
            </TouchableOpacity>
            <View style={{ flex: 0.7, marginLeft: wp(3) }}>
              <PrimaryTextInput
                value={number}
                onChangeText={(val: any) => { setNumber(val) }}
                inputStyle={styles.textInput}
                onSubmitEditing={() => { }}
                keyboardType={'numeric'}
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
            <View style={{ flex: 0.7, marginLeft: wp(3) }}>
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
