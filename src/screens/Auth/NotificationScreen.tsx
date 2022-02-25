import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { PrimaryText } from "../../components/PrimaryText";
import { PrimaryButton } from "../../components/PrimaryButton";

export const NotificationScreen = ({ navigation }: any) => {
  const nextStepClickHandler = () => {
    navigation.navigate("ProfileDetail");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", marginTop: hp(5) }}>
          <TouchableOpacity
            onPress={() => {
              nextStepClickHandler();
            }}
            style={{
              alignSelf: "flex-end",
              flex: 1,
              marginHorizontal: wp(10),
            }}
          >
            <PrimaryText
              textStyle={{
                fontSize: 16,
                color: "#E94057",
                alignSelf: "flex-end",
                fontFamily: "acme",
              }}
            >
              Skip
            </PrimaryText>
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("../../../assets/images/SignUp/ChatImage.png")}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <View style={{ marginTop: hp(2) }}>
              <PrimaryText
                textStyle={{
                  fontSize: 24,
                  color: "#000",
                  alignSelf: "center",
                  fontFamily: "acme",
                }}
              >
                Enable notification’s
              </PrimaryText>
            </View>
            <View style={{ marginTop: hp(1), marginHorizontal: wp(8) }}>
              <PrimaryText
                textStyle={{
                  fontSize: 14,
                  color: "#000",
                  alignSelf: "center",
                  textAlign: "center",
                  fontFamily: "acme",
                }}
              >
                Get push-notification when you get the match or receive a
                message.
              </PrimaryText>
            </View>
          </View>
          <View style={{ justifyContent: "flex-end", marginVertical: hp(5) }}>
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
              onPress={() => {
                nextStepClickHandler();
              }}
            >
              I want to be notified
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
});
