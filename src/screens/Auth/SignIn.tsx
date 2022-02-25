import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import { PrimaryText } from "../../components/PrimaryText";
import { PrimaryButton } from "../../components/PrimaryButton";
import { FaceBookIcon } from "../../../assets/icons/FaceBookIcon";
import { GoogleIcon } from "../../../assets/icons/GoogleIcon";
import { AppleIcon } from "../../../assets/icons/AppleIcon";
import { PrimaryTextInput } from "../../components/PrimaryTextInput";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import LocalStorge from "../../services/LocalStorge";

export const SignIn = ({ navigation }: any) => {

  const { usersignIn } = React.useContext(AuthContext);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const googleSignInClickHandler = async () => {
    debugger;
    try {
      const result = await Google.logInAsync({
        androidClientId: '809865201014-g4f8ck8ekva3teo6ndk0i8mh00rv5hhs.apps.googleusercontent.com',
        // iosClientId: '809865201014-ggsqo209hlsn7bo5ojeib0q4qpl7144u.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      console.log('+++++++++++++++++++', result);
      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  const logInWithFaceBook = async () => {
    try {
      await Facebook.initializeAsync("292491646160239");
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      }: any = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  const nextButtonClickHandler = () => {
    let data: any = {}
    let phoneNumberREGX = /^(\d+-?)+\d+$/;
    let emailREGX = /^\w+[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*@\w+([\.-]?\w+)*(\.\w{2,3})$/
    let validUser = false;
    if (emailREGX.test(userName) == true) {
      data.email = userName;
      validUser = true;
    } else if (phoneNumberREGX.test(userName) == true) {
      data.phone = userName;
      validUser = true;
    }
    data.password = password;
    debugger;
    if (password.length > 0 && userName.length > 0 && validUser) {
      axios.post('http://trendar.herokuapp.com/api/auth/login', data)
        .then(function (response) {
          console.log('======', response);
          if (response?.data?.statusCode == 200) {
            usersignIn(response?.data?.accessToken)
            LocalStorge.setValue('signInUser', JSON.stringify(response?.data?.data));
          }
          else {
            alert('Something went Swrong');
          }
        })
        .catch(function (error) {
          debugger;
          console.log(error);
          alert('Something went wrong');
        });
    } else {
      alert('Please enter valid Details');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flex: 1, marginBottom: hp(1), marginHorizontal: wp(10), paddingTop: hp(10) }}>
          <View>
            <PrimaryText textStyle={{ fontSize: 34, lineHeight: 50, alignSelf: 'flex-start', color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
              Sign-in
            </PrimaryText>
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
                    Email/Phone
                  </PrimaryText>
                </View>
              </View>
              <View style={{ flex: 0.7, marginLeft: wp(3), }}>
                <PrimaryTextInput
                  value={userName}
                  numberOfLines={1}
                  onChangeText={(val: any) => { setUserName(val) }}
                  inputStyle={styles.textInput}
                  onSubmitEditing={() => { }}
                />
              </View>
            </View>
            <View style={{ marginTop: hp(3), borderWidth: 1, borderColor: '#E8E6EA', height: hp(8), borderRadius: 15, flexDirection: 'row', alignItems: 'center', paddingHorizontal: wp(5) }}>
              <View style={{ flex: 0.3, flexDirection: 'row', borderRightWidth: 1, borderRightColor: "#E8E6EA", alignItems: 'center', justifyContent: 'space-between' }}>
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

          </View>
        </View>


        {/* Center View */}
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View>
            <PrimaryButton
              buttonStyle={{
                marginTop: hp(4),
                backgroundColor: "#E94057",
                height: hp(8),
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: wp(10),
                borderRadius: 15,
              }}
              buttonTextStyle={{ fontSize: 16 }}
              onPress={() => { nextButtonClickHandler() }}
            >
              Continue
            </PrimaryButton>
          </View>
          <View style={{ marginTop: hp(2) }}>
            <PrimaryText>
              Need an account? {" "}
              <PrimaryText
                textStyle={{ color: "#E94057" }}
                onPress={() => {
                  navigation.navigate('SignUp')
                }}
              >
                Sign Up
              </PrimaryText>
            </PrimaryText>
          </View>
          <View></View>
        </View>
        <View style={{ flex: 1, marginTop: hp(5) }}>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: wp(10),
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                borderTopWidth: 1,
                borderTopColor: "rgba(0, 0, 0, 0.4)",
              }}
            ></View>
            <View style={{ flex: 1, marginHorizontal: wp(2) }}>
              <PrimaryText
                textStyle={{
                  fontSize: 12,
                  color: "#000",
                  alignSelf: "center",
                  fontFamily: "acme",
                }}
              >
                or sign in with
              </PrimaryText>
            </View>
            <View
              style={{
                flex: 1,
                borderTopWidth: 1,
                borderTopColor: "rgba(0, 0, 0, 0.4)",
              }}
            ></View>
          </View>


          {/* End View */}
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: wp(10),
              marginTop: hp(2.5),
              justifyContent: 'space-around'
            }}
          >
            <TouchableOpacity
              onPress={() => { logInWithFaceBook() }}
              style={{
                width: wp(18),
                height: hp(8.5),
                marginHorizontal: wp(6),
                borderWidth: 1,
                borderColor: "#E8E6EA",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <FaceBookIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { googleSignInClickHandler() }}
              style={{
                width: wp(18),
                height: hp(8.5),
                borderWidth: 1,
                borderColor: "#E8E6EA",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
              }}
            >
              <GoogleIcon />
            </TouchableOpacity>
            {
              Platform.OS == "ios" ? (
                <TouchableOpacity
                  style={{
                    width: wp(18),
                    height: hp(8.5),
                    marginHorizontal: wp(6),
                    borderWidth: 1,
                    borderColor: "#E8E6EA",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 15,
                  }}
                >
                  <AppleIcon />
                </TouchableOpacity>
              ) : null
            }
          </View>
          <View
            style={{
              marginTop: hp(8),
              flexDirection: "row",
              marginHorizontal: wp(18),
              justifyContent: "space-evenly",
            }}
          >
            <PrimaryText
              textStyle={{
                fontSize: 14,
                color: "#E94057",
                alignSelf: "center",
                fontFamily: "acme",
              }}
            >
              Terms of use
            </PrimaryText>
            <PrimaryText
              textStyle={{
                fontSize: 14,
                color: "#E94057",
                alignSelf: "center",
                fontFamily: "acme",
              }}
            >
              Privacy Policy
            </PrimaryText>
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
    flex: 1,
    height: hp(5),
    textAlign: "left",
    alignSelf: 'flex-start',
    borderRadius: 15,
    color: "#000",
    fontSize: 14,
  },
});
