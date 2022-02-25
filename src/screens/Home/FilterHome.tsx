import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Slider from "@react-native-community/slider";
import { PrimaryText } from "../../components/PrimaryText";
import { PrimaryButton } from "../../components/PrimaryButton";
import { PrimaryTextInput } from "../../components/PrimaryTextInput";
import { TripleDotsIcon } from "../../../assets/icons/TripleDotsIcon";
import { BackButtonIcon } from "../../../assets/icons/BackButtonIcon";
import { VoiceIcon } from "../../../assets/icons/VoiceIcon";
import { GreaterThanIcon } from "../../../assets/icons/GreaterThanIcon";

export const FilterHome = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: hp(2),
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1, marginLeft: wp(15) }}>
            <PrimaryText
              textStyle={{
                fontSize: 24,
                alignSelf: "center",
                color: "#000",
                fontWeight: "400",
                fontFamily: "acme",
              }}
            >
              Filters
            </PrimaryText>
          </View>
          <TouchableOpacity style={{ marginRight: wp(5) }}>
            <PrimaryText
              textStyle={{
                fontSize: 16,
                alignSelf: "flex-end",
                color: "#E94057",
                fontWeight: "400",
                fontFamily: "acme",
              }}
            >
              Clear
            </PrimaryText>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, marginHorizontal: wp(8), marginTop: hp(5) }}>
          <View>
            <PrimaryText
              textStyle={{
                fontSize: 16,
                alignSelf: "flex-start",
                color: "#000",
                fontWeight: "400",
                fontFamily: "acme",
              }}
            >
              Interested in
            </PrimaryText>
          </View>
          <View
            style={{
              marginTop: hp(1),
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#E8E6EA",
              borderRadius: 15,
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                paddingHorizontal: wp(5),
                paddingVertical: hp(2.5),
                borderRightWidth: 1,
                borderRightColor: "#E8E6EA",
              }}
            >
              <PrimaryText
                textStyle={{
                  fontSize: 16,
                  alignSelf: "center",
                  color: "#000",
                  fontWeight: "400",
                  fontFamily: "acme",
                }}
              >
                House
              </PrimaryText>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingHorizontal: wp(5),
                paddingVertical: hp(2.5),
                borderRightWidth: 1,
                borderRightColor: "#E8E6EA",
              }}
            >
              <PrimaryText
                textStyle={{
                  fontSize: 16,
                  alignSelf: "center",
                  color: "#000",
                  fontWeight: "400",
                  fontFamily: "acme",
                }}
              >
                Condo
              </PrimaryText>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingHorizontal: wp(5),
                paddingVertical: hp(2.5),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PrimaryText
                textStyle={{
                  fontSize: 16,
                  alignSelf: "center",
                  color: "#000",
                  fontWeight: "400",
                  fontFamily: "acme",
                }}
              >
                Townhouse
              </PrimaryText>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: hp(3) }}>
            <View
              style={{
                height: hp(7.5),
                flexDirection: "row",
                borderWidth: 2,
                borderColor: "#E8E6EA",
                borderRadius: 15,
              }}
            >
              <PrimaryText textStyle={styles.labelStyle}>
                Type of Rental
              </PrimaryText>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginHorizontal: wp(5),
                  flex: 1,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <PrimaryText
                      textStyle={{
                        fontSize: 16,
                        alignSelf: "flex-start",
                        color: "#000",
                        fontWeight: "400",
                        fontFamily: "acme",
                      }}
                    >
                      Private Room
                    </PrimaryText>
                  </View>
                  <TouchableOpacity>
                    <GreaterThanIcon />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                height: hp(7.5),
                marginTop: hp(1),
                flexDirection: "row",
                borderWidth: 2,
                borderColor: "#E8E6EA",
                borderRadius: 15,
              }}
            >
              <PrimaryText textStyle={styles.labelStyle}>Location</PrimaryText>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginHorizontal: wp(5),
                  flex: 1,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <PrimaryText
                      textStyle={{
                        fontSize: 16,
                        alignSelf: "flex-start",
                        color: "#000",
                        fontWeight: "400",
                        fontFamily: "acme",
                      }}
                    >
                      Toronto, Ontario
                    </PrimaryText>
                  </View>
                  <TouchableOpacity>
                    <GreaterThanIcon />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: hp(1) }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ flex: 1 }}>
                <PrimaryText
                  textStyle={{
                    fontSize: 16,
                    alignSelf: "flex-start",
                    color: "#000",
                    fontWeight: "400",
                    fontFamily: "acme",
                  }}
                >
                  Area
                </PrimaryText>
              </View>
              <View style={{ justifyContent: "flex-end" }}>
                <PrimaryText
                  textStyle={{
                    fontSize: 14,
                    alignSelf: "flex-start",
                    color: "rgba(0, 0, 0, 0.7)",
                    fontWeight: "400",
                    fontFamily: "acme",
                  }}
                >
                  40km
                </PrimaryText>
              </View>
            </View>
            <View style={{ height: hp(5) }}>
              <Slider
                style={{ width: wp(80), borderWidth: 5, marginTop: hp(1) }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#E94057"
                maximumTrackTintColor="#E8E6EA"
              />
            </View>
          </View>
          <View style={{ marginTop: hp(3) }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ flex: 1 }}>
                <PrimaryText
                  textStyle={{
                    fontSize: 16,
                    alignSelf: "flex-start",
                    color: "#000",
                    fontWeight: "400",
                    fontFamily: "acme",
                  }}
                >
                  Price
                </PrimaryText>
              </View>
              <View style={{ justifyContent: "flex-end" }}>
                <PrimaryText
                  textStyle={{
                    fontSize: 14,
                    alignSelf: "flex-start",
                    color: "rgba(0, 0, 0, 0.7)",
                    fontWeight: "400",
                    fontFamily: "acme",
                  }}
                >
                  $1,000 - $1,400
                </PrimaryText>
              </View>
            </View>
            <View style={{ height: hp(5) }}>
              <Slider
                style={{ width: wp(80), borderWidth: 5, marginTop: hp(1) }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#E94057"
                maximumTrackTintColor="#E8E6EA"
              />
            </View>
          </View>
        </View>
        <View style={{ justifyContent: "flex-end", marginVertical: hp(3) }}>
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
            onPress={() => {}}
          >
            Continue
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textInput: {
    height: hp(8),
    width: wp(70),
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#E8E6EA",
    paddingLeft: wp(5),
    borderRadius: 15,
    color: "#000",
  },
  labelStyle: {
    fontSize: 12,
    alignSelf: "flex-start",
    color: "rgba(0, 0, 0, 0.4)",
    fontWeight: "400",
    position: "absolute",
    marginTop: hp(-1.3),
    marginLeft: wp(6),
    backgroundColor: "#fff",
    paddingHorizontal: wp(2),
  },
  receiverMessageMain: {
    marginTop: hp(2),
    alignSelf: "flex-start",
  },
  senderMessageMain: {
    marginTop: hp(2),
    alignSelf: "flex-end",
  },
  receiverMessage: {
    maxWidth: wp(70),
    backgroundColor: "#E94057",
    opacity: 0.6,
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderRadius: 15,
    alignSelf: "flex-start",
    fontFamily: "acme",
  },
  senderMessage: {
    maxWidth: wp(70),
    backgroundColor: "#F3F3F3",
    opacity: 0.6,
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    borderRadius: 15,
    alignSelf: "flex-end",
    fontFamily: "acme",
  },
  senderMessageTime: {
    fontSize: 14,
    alignSelf: "flex-end",
    color: "rgba(0, 0, 0, 0.4)",
    fontWeight: "400",
    fontFamily: "acme",
  },
  receiverMessageTime: {
    fontSize: 14,
    alignSelf: "flex-start",
    color: "rgba(0, 0, 0, 0.4)",
    fontWeight: "400",
    fontFamily: "acme",
  },
});
