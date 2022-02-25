import React, { useState, useRef } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { PrimaryText } from "../../components/PrimaryText";
import { PrimaryButton } from "../../components/PrimaryButton";
import { PrimaryTextInput } from "../../components/PrimaryTextInput";
import { BackButtonIcon } from "../../../assets/icons/BackButtonIcon";

export const EnterCode = ({ navigation }: any) => {
  const [firstLetter, setFirstLetter] = useState("");
  const [secondLetter, setSecondLetter] = useState("");
  const [thirdLetter, setThirdLetter] = useState("");
  const [fourthLetter, setFourthLetter] = useState("");

  let firstLetterRef: any = useRef();
  let secondLetterRef: any = useRef();
  let thirdLetterRef: any = useRef();
  let fourthLetterRef: any = useRef();

  const sendAgain = () => {
    navigation.navigate("NotificationScreen");
  };

  const backButtonClickHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ height: hp(15) }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              marginLeft: wp(5),
            }}
          >
            <TouchableOpacity
              onPress={() => {
                backButtonClickHandler();
              }}
              style={{
                width: wp(12),
                height: hp(7),
                borderWidth: 1,
                borderColor: "#E8E6EA",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BackButtonIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginHorizontal: wp(10), flex: 1 }}>
          <View style={{ }}>
            <PrimaryText
              textStyle={{
                color: "#000",
                textAlign: "center",
                fontSize: 34,
                lineHeight: 40,
                fontFamily: "acme",
              }}
            >
              00:42
            </PrimaryText>
          </View>
          <View style={{ marginTop: hp(2) }}>
            <PrimaryText
              textStyle={{
                fontSize: 18,
                alignSelf: "center",
                color: "rgba(0, 0, 0, 0.7)",
                textAlign: "center",
                fontFamily: "acme",
              }}
            >
              Type the verification code
              {"\n"}
              we’ve sent you
            </PrimaryText>
          </View>
          <View
            style={{
              marginTop: hp(8),
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <PrimaryTextInput
              ref={firstLetterRef}
              value={firstLetter}
              onChangeText={(val: any) => {
                setFirstLetter(val);
              }}
              inputStyle={styles.textInput}
              keyboardType={"number-pad"}
              maxLength={1}
              onSubmitEditing={() => {
                secondLetterRef.focus();
              }}
            />
            <PrimaryTextInput
              ref={secondLetterRef}
              value={secondLetter}
              onChangeText={(val: any) => {
                setSecondLetter(val);
              }}
              inputStyle={styles.textInput}
              keyboardType={"number-pad"}
              maxLength={1}
              onSubmitEditing={() => { }}
            />
            <PrimaryTextInput
              ref={thirdLetterRef}
              value={thirdLetter}
              onChangeText={(val: any) => {
                setThirdLetter(val);
              }}
              inputStyle={styles.textInput}
              keyboardType={"number-pad"}
              maxLength={1}
              onSubmitEditing={() => { }}
            />
            <PrimaryTextInput
              ref={fourthLetterRef}
              value={fourthLetter}
              onChangeText={(val: any) => {
                setFourthLetter(val);
              }}
              inputStyle={styles.textInput}
              keyboardType={"number-pad"}
              maxLength={1}
              onSubmitEditing={() => { }}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            sendAgain();
          }}
          style={{ justifyContent: "flex-end", marginVertical: hp(5) }}
        >
          <PrimaryText
            textStyle={{
              fontSize: 16,
              alignSelf: "center",
              color: "#E94057",
              textAlign: "center",
              fontFamily: "acme",
            }}
          >
            Send again
          </PrimaryText>
        </TouchableOpacity>
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
    width: wp(15),
    height: hp(10),
    textAlign: "center",
    borderRadius: 15,
    backgroundColor: "#E94057",
    color: "#fff",
    fontSize: 34,
  },
});
