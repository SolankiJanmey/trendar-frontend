import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const PrimaryButton = ({
  onPress,
  children,
  buttonStyle,
  buttonTextStyle,
}: any) => {
  return (
    <TouchableOpacity
      style={buttonStyle || styles.defaultStyle}
      onPress={onPress}
    >
      <Text style={[styles.buttonTextDefault, buttonTextStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: "#E94057",
    height: hp(8),
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: wp(5),
    borderRadius: 15,
  },
  buttonTextDefault: {
    color: "#fff",
    fontFamily: "acme",
  },
});
