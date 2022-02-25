import React, { useState, useRef, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
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
import { ProfilesContext } from "../../context/ProfilesContext";
import axios from "axios";
import { Camera } from 'expo-camera';

export const ProfilePassion = ({ navigation }: any) => {

  const profilesContext = useContext(ProfilesContext);
  const { signUpUserDetails, setSignUpUserDetails }: any = profilesContext;

  const [passionList, setPassionList] = useState([
    { id: 1, name: "Area" },
    { id: 2, name: "Price" },
    { id: 3, name: "Amenities" },
    { id: 4, name: "House type" },
    { id: 5, name: "Grocery" },
    { id: 6, name: "Discount" },
    { id: 7, name: "Park" },
    { id: 8, name: "Virtual Tour" },
    { id: 9, name: "School" },
    { id: 10, name: "xyz" },
    { id: 11, name: "Prayer place" },
    { id: 12, name: "abx" },
    { id: 13, name: "Walk score" },
    { id: 14, name: "ghj" },
  ]);

  const [selectedPassionList, setSelectedPassionList]: any = useState([]);

  const passionClickHandler = (passion: any) => {
    let list: any = selectedPassionList;
    if (list.includes(passion)) {
      const index = list.indexOf(passion);
      if (index > -1) {
        list.splice(index, 1);
        setSelectedPassionList([...list]);
      }
    } else {
      list.push(passion);
      setSelectedPassionList([...list]);
    }
  };

  const nextButtonClickHandler = () => {
    let userData = signUpUserDetails;
    userData.filters = selectedPassionList;
    setSignUpUserDetails({ ...userData });
    let data: any = {}
    data.firstName = userData?.firstName;
    data.lastName = userData?.lastName;
    data.userType = userData?.userType;
    if (userData?.email) {
      data.email = userData?.email
    }
    if (userData?.phone) {
      data.phone = userData?.phone
    }
    data.password = userData?.password;
    data.birthDate = "2022-01-20T18:59:20.487Z";
    // let fileData = userData?.userProfile;
    // delete userData?.userProfile;
    let formData: any = new FormData();

    // formData.append('body', userData);
    // formData.append('file', fileData);
    formData.append('firstName', userData?.firstName);
    formData.append('lastName', userData?.lastName);
    formData.append('userType', userData?.userType);
    formData.append('file', userData?.userProfile);
    formData.append('password', userData?.password);
    formData.append('email', userData?.email);
    formData.append('phone', userData?.mobile);
    formData.append('birthDate', "2022-01-20T18:59:20.487Z");
    console.log('======>>>', formData);
    axios.post('https://trendar.herokuapp.com/api/user/register', formData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
      }
    })
      .then(function (response) {
        console.log('=====>>>', response);
        if (response?.data?.statusCode == 200) {
          navigation.navigate("SignIn");
        }
        if (response?.data?.statusCode == 409) {
          alert(response?.data?.message);
        }
      })
      .catch(function (error) {
        console.log(error);
        alert('Something went wrong');
      });
  };

  const backButtonClickHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ marginHorizontal: wp(8), flex: 1, marginTop: hp(2) }}>
          <View style={{ height: hp(10) }}>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <TouchableOpacity
                onPress={() => {
                  backButtonClickHandler();
                }}
                style={{
                  width: wp(13),
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
                      fontSize: 16,
                      alignSelf: "flex-end",
                      color: "#E94057",
                      fontWeight: "400",
                      fontFamily: "acme",
                    }}
                  >
                    Skip
                  </PrimaryText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ marginTop: hp(2) }}>
            <PrimaryText
              textStyle={{
                fontSize: 34,
                alignSelf: "flex-start",
                paddingTop: hp(2),
                color: "#000",
                fontWeight: "400",
                fontFamily: "acme",
              }}
            >
              Filters
            </PrimaryText>
            <View>
              <PrimaryText
                textStyle={{
                  fontSize: 14,
                  alignSelf: "flex-start",
                  color: "#000",
                  fontWeight: "400",
                  fontFamily: "acme",
                  textAlign: "left",
                }}
              >
                Select a few of your interests and let everyone know what you’re
                passionate about.
              </PrimaryText>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              flex: 1,
              paddingTop: hp(5),
            }}
          >
            {passionList.map((item: any) => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      passionClickHandler(item?.name);
                    }}
                    style={
                      selectedPassionList.includes(item.name)
                        ? {
                          margin: 5,
                          width: wp(38),
                          height: hp(6),
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 15,
                          backgroundColor: "#E94057",
                          shadowColor: "#E94057",
                          shadowOffset: { width: 0, height: 8 },
                          shadowOpacity: 0.3,
                          shadowRadius: 3,
                        }
                        : {
                          margin: 5,
                          width: wp(38),
                          height: hp(6),
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 15,
                          borderWidth: 1,
                          borderColor: "#E8E6EA",
                        }
                    }
                  >
                    <PrimaryText
                      textStyle={
                        selectedPassionList.includes(item.name)
                          ? {
                            fontSize: 14,
                            alignSelf: "center",
                            color: "#fff",
                            fontWeight: "400",
                            fontFamily: "acme",
                          }
                          : {
                            fontSize: 14,
                            alignSelf: "center",
                            color: "#000",
                            fontWeight: "400",
                            fontFamily: "acme",
                          }
                      }
                    >
                      {item.name}
                    </PrimaryText>
                  </TouchableOpacity>
                </>
              );
            })}
          </View>
          <View style={{ justifyContent: "flex-end", marginBottom: hp(1) }}>
            <PrimaryButton
              buttonStyle={{
                marginTop: hp(4),
                backgroundColor: "#E94057",
                height: hp(8),
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 12,
              }}
              buttonTextStyle={{ color: "#fff" }}
              onPress={() => {
                nextButtonClickHandler();
              }}
            >
              <PrimaryText
                textStyle={{
                  fontSize: 16,
                  color: "#fff",
                  fontWeight: "400",
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
