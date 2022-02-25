import React, { useState, useRef, useContext } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { PrimaryText } from "../../components/PrimaryText";
import { PrimaryButton } from "../../components/PrimaryButton";
import { PrimaryTextInput } from "../../components/PrimaryTextInput";
import { CheckIcon } from "../../../assets/icons/CheckIcon";
import { BackButtonIcon } from "../../../assets/icons/BackButtonIcon";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfilesContext } from "../../context/ProfilesContext";
import { UserTypeEnum } from '../../enums';

export const ProfileType = ({ navigation }: any) => {
  const profilesContext = useContext(ProfilesContext);
  const { signUpUserDetails, setSignUpUserDetails }: any = profilesContext;

  console.log('====>>>', UserTypeEnum.LANDLORD);

  console.log('+++++++++++++++', signUpUserDetails);
  const [selectedUserType, setSelectedUserType] = useState("");

  const nextButtonClickHandler = () => {
    if (selectedUserType.length > 0) {
      let userData = signUpUserDetails;
      userData.userType = selectedUserType
      setSignUpUserDetails({ selectedUserType, ...userData });
      navigation.navigate("ProfilePassion");
    } else {
      alert('Please select any one type');
    }
  };

  const backButtonClickHandler = () => {
    navigation.goBack();
  };

  const selectionType = (userType: string) => {
    setSelectedUserType(userType);
  };

  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ marginHorizontal: wp(10), flex: 1, marginTop: hp(5) }}>
          <View style={{ height: hp(10) }}>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <TouchableOpacity
                onPress={() => {
                  backButtonClickHandler();
                }}
                style={{
                  width: wp(14),
                  height: hp(6.5),
                  borderWidth: 1,
                  borderColor: "#E8E6EA",
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BackButtonIcon />
              </TouchableOpacity>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => {
                    nextButtonClickHandler();
                  }}
                >
                  <PrimaryText
                    textStyle={{
                      alignSelf: "flex-end",
                      color: "#E94057",
                      fontWeight: "400",
                    }}
                  >
                    Skip
                  </PrimaryText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ marginTop: hp(3) }}>
            <PrimaryText
              textStyle={{
                paddingTop: hp(1),
                fontSize: 34,
                alignSelf: "flex-start",
                fontWeight: "400",
              }}
            >
              I am a
            </PrimaryText>
          </View>
          <View style={{ flex: 1, paddingTop: hp(10) }}>
            <TouchableOpacity
              onPress={() => {
                selectionType(UserTypeEnum.LANDLORD);
              }}
              style={
                selectedUserType == UserTypeEnum.LANDLORD
                  ? {
                    height: hp(8),
                    flexDirection: "row",
                    borderWidth: 1,
                    borderColor: "#E8E6EA",
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: wp(5),
                    backgroundColor: "#E94057",
                  }
                  : {
                    height: hp(8),
                    flexDirection: "row",
                    borderWidth: 1,
                    borderColor: "#E8E6EA",
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: wp(5),
                  }
              }
            >
              <View style={{ flex: 1 }}>
                <PrimaryText
                  textStyle={
                    selectedUserType == UserTypeEnum.LANDLORD
                      ? {
                        fontSize: 16,
                        fontFamily: "acme",
                        alignSelf: "flex-start",
                        color: "#fff",
                        fontWeight: "400",
                      }
                      : {
                        fontSize: 16,
                        fontFamily: "acme",
                        alignSelf: "flex-start",
                        color: "#000",
                        fontWeight: "400",
                      }
                  }
                >
                  Landlord
                </PrimaryText>
              </View>
              <View>
                <CheckIcon color={selectedUserType === UserTypeEnum.LANDLORD && "#fff"} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                selectionType(UserTypeEnum.TENANT);
              }}
              style={
                selectedUserType == "Tenant"
                  ? {
                    height: hp(8),
                    flexDirection: "row",
                    borderWidth: 1,
                    borderColor: "#E8E6EA",
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: wp(5),
                    marginTop: hp(3),
                    backgroundColor: "#E94057",
                  }
                  : {
                    height: hp(8),
                    flexDirection: "row",
                    borderWidth: 1,
                    borderColor: "#E8E6EA",
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: wp(5),
                    marginTop: hp(3),
                  }
              }
            >
              <View style={{ flex: 1 }}>
                <PrimaryText
                  textStyle={
                    selectedUserType == UserTypeEnum.TENANT
                      ? {
                        fontSize: 16,
                        fontFamily: "acme",
                        alignSelf: "flex-start",
                        color: "#fff",
                        fontWeight: "400",
                      }
                      : {
                        fontSize: 16,
                        fontFamily: "acme",
                        alignSelf: "flex-start",
                        color: "#000",
                        fontWeight: "400",
                      }
                  }
                >
                  Tenant
                </PrimaryText>
              </View>
              <View>
                <CheckIcon color={selectedUserType === UserTypeEnum.TENANT && "#fff"} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                selectionType(UserTypeEnum.VENDOR);
              }}
              style={
                selectedUserType == UserTypeEnum.VENDOR
                  ? {
                    height: hp(8),
                    flexDirection: "row",
                    borderWidth: 1,
                    borderColor: "#E8E6EA",
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: wp(5),
                    marginTop: hp(3),
                    backgroundColor: "#E94057",
                  }
                  : {
                    height: hp(8),
                    flexDirection: "row",
                    borderWidth: 1,
                    borderColor: "#E8E6EA",
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: wp(5),
                    marginTop: hp(3),
                  }
              }
            >
              <View style={{ flex: 1 }}>
                <PrimaryText
                  textStyle={
                    selectedUserType == UserTypeEnum.VENDOR
                      ? {
                        fontSize: 16,
                        fontFamily: "acme",
                        alignSelf: "flex-start",
                        color: "#fff",
                        fontWeight: "400",
                      }
                      : {
                        fontSize: 16,
                        fontFamily: "acme",
                        alignSelf: "flex-start",
                        color: "#000",
                        fontWeight: "400",
                      }
                  }
                >
                  Vendor
                </PrimaryText>
              </View>
              <View>
                <CheckIcon color={selectedUserType === UserTypeEnum.VENDOR && "#fff"} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "flex-end", marginBottom: hp(5) }}>
            <PrimaryButton
              buttonStyle={{
                marginTop: hp(4),
                backgroundColor: "#E94057",
                height: hp(8),
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 18,
                fontFamily: "acme",
              }}
              buttonTextStyle={{ color: "#fff" }}
              onPress={() => {
                nextButtonClickHandler();
              }}
            >
              <PrimaryText
                textStyle={{
                  fontSize: 16,
                  alignSelf: "center",
                  color: "#fff",
                  fontWeight: "400",
                  fontFamily: "acme",
                }}
              >
                Continue
              </PrimaryText>
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
    height: hp(10),
    width: wp(80),
    fontSize: 14,
    marginLeft: wp(8),
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
});
