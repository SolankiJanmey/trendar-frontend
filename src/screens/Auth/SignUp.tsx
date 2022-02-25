import React from "react";
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

export const SignUp = ({ navigation }: any) => {

  const continueWithEmail = () => {
    navigation.navigate("AddEmail");
  };

  const usePhoneNumber = () => {
    navigation.navigate("AddNumber");
  };

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: hp(1),
          }}
        >
          <Image
            source={require("../../../assets/images/SignUp/AppSignUpLogo.png")}
          />
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View>
            <PrimaryText>Sign up to continue</PrimaryText>
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
              onPress={() => { continueWithEmail() }}
            >
              Continue with email
            </PrimaryButton>
            <PrimaryButton
              buttonStyle={{
                marginTop: hp(4),
                backgroundColor: "#fff",
                height: hp(8),
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: wp(10),
                borderRadius: 15,
                borderWidth: 2,
                borderColor: "#F3F3F3",
              }}
              buttonTextStyle={{
                color: "#E94057",
                fontFamily: "acme",
                fontSize: 16,
              }}
              onPress={() => {
                usePhoneNumber();
              }}
            >
              Use phone number
            </PrimaryButton>
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
                or sign up with
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
});
