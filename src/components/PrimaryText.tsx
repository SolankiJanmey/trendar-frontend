import React from "react";
import { StyleSheet, Text } from "react-native";

export const PrimaryText = ({ textStyle, children, onPress, numberOfLines }: any) => {
  return (
    <Text onPress={onPress} style={[styles.defaultStyle, textStyle]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    color: "#000",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "acme",
  },
});
