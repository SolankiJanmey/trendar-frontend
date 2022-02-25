import React, { useState, useRef, useMemo, useContext } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import RBSheet from "react-native-raw-bottom-sheet";
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import TinderCard from "react-tinder-card";
import { PrimaryText } from "../../components/PrimaryText";
import { PrimaryButton } from "../../components/PrimaryButton";
import { PrimaryTextInput } from "../../components/PrimaryTextInput";
import { CheckIcon } from "../../../assets/icons/CheckIcon";
import { BackButtonIcon } from "../../../assets/icons/BackButtonIcon";
import { FilterIcon } from "../../../assets/icons/FilterIcon";
import { DisLikeIcon } from "../../../assets/icons/DisLikeIcon";
import { LikeHeartIcon } from "../../../assets/icons/LikeHeartIcon";
import { StarFavoriteIcon } from "../../../assets/icons/StarFavoriteIcon";
import { FilterHome } from "./FilterHome";
import { SafeAreaView } from "react-native-safe-area-context";
import { LocationIcon } from "../../../assets/icons/LocationIcon";
import { ProfilesContext } from "../../context/ProfilesContext";
import { AddIcon } from "../../../assets/icons/AddIcon";

export const LandLoadLanding = ({ navigation }: any) => {
  const listImage1 = require("../../../assets/images/OnBoarding/OnBordingScreen1.png");
  const listImage2 = require("../../../assets/images/OnBoarding/OnBordingScreen2.png");
  const listImage3 = require("../../../assets/images/OnBoarding/OnBordingScreen3.png");
  const indicator = require("../../../assets/indicator.png");

  const profilesContext = useContext(ProfilesContext);
  const { signUpUserDetails, setSignUpUserDetails }: any = profilesContext;

  console.log('+++++++++++++++', signUpUserDetails);

  const [listItems, setListItems]: any = useState([
    {
      id: 1,
      name: "Condo - 1 bed 1 bath",
      city: "Toronto, ON",
      price: "$1,500",
      distance: "1 Km",
      image: listImage1,
    },
    {
      id: 2,
      name: "Condo - 2 bed 2 bath",
      city: "Toronto, ON",
      price: "$2,500",
      distance: "2 Km",
      image: listImage2,
    },
    {
      id: 3,
      name: "Condo - 3 bed 3 bath",
      city: "Toronto, ON",
      price: "$3,500",
      distance: "3 Km",
      image: listImage3,
    },
  ]);

  const [lastDirection, setLastDirection] = useState();
  const [filterOptionsOpen, setFilterOptionsOpen] = useState(false);

  const addPostButtonCLickHandler = () => {
    navigation.navigate('AddPost');
  }

  const childRefs: any = useMemo(
    () =>
      Array(listItems.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );


  let charactersState = listItems;
  const alreadyRemoved: any = [];

  const swiped = (direction: any, nameToDelete: any) => {
    console.log("removing: " + nameToDelete + " to the " + direction);
    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
  };

  const outOfFrame = (name: any) => {
    console.log(name + " left the screen!");
    charactersState = charactersState.filter(
      (character: any) => character.name !== name
    );
    setListItems(charactersState);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={filterOptionsOpen ? styles.highlightedView : styles.container}>
        <View style={{ marginHorizontal: wp(10), flex: 1 }}>
          <View style={{ height: hp(10) }}>
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
              <View style={{ flex: 1, }}>
                <PrimaryText
                  textStyle={{
                    fontSize: 24,
                    alignSelf: "center",
                    color: "#000",
                    fontWeight: "400",
                    fontFamily: "acme",
                  }}
                >
                  Properties
                </PrimaryText>
                <PrimaryText
                  textStyle={{
                    fontSize: 12,
                    alignSelf: "center",
                    color: "#000",
                    fontWeight: "400",
                    fontFamily: "acme",
                  }}
                >
                  Ontario
                </PrimaryText>
              </View>
            </View>
          </View>

          <View style={{ flex: 1, marginTop: hp(5) }}>
            {listItems.map((item: any, index: number) => (
              <View
                style={{
                  width: wp(10),
                  height: hp(1),
                  borderRadius: 20,
                }}
              >
                <TinderCard
                  ref={childRefs[index]}
                  onSwipe={(dir) => swiped(dir, listItems.name)}
                  onCardLeftScreen={() => outOfFrame(listItems.name)}
                >
                  <View
                    style={{
                      width: wp(80),
                      marginTop: hp(-5),
                      borderRadius: 20,
                    }}
                  >
                    <ImageBackground
                      source={item.image}
                      style={styles.sidlerImage}
                    >
                      <View style={{ width: wp(15), height: hp(5), backgroundColor: 'transparent', top: 10, left: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 15, elevation: 1 }}>
                        <View>
                          <LocationIcon />
                        </View>
                        <View style={{ marginLeft: wp(1) }}>
                          <PrimaryText
                            textStyle={{
                              fontSize: 12,
                              alignSelf: "flex-start",
                              color: "#fff",
                              fontWeight: "400",
                              fontFamily: "acme",
                            }}
                          >
                            {item.distance}
                          </PrimaryText>
                        </View>
                      </View>
                    </ImageBackground>
                    <View
                      style={{
                        backgroundColor: "#000",
                        opacity: 0.8,
                        paddingVertical: hp(2),
                        paddingLeft: wp(2),
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                      }}
                    >
                      <View>
                        <PrimaryText
                          textStyle={{
                            fontSize: 24,
                            alignSelf: "flex-start",
                            color: "#fff",
                            fontWeight: "400",
                            fontFamily: "acme",
                          }}
                        >
                          {item.name}
                        </PrimaryText>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1 }}>
                          <PrimaryText
                            textStyle={{
                              fontSize: 14,
                              alignSelf: "flex-start",
                              color: "#fff",
                              fontWeight: "400",
                              fontFamily: "acme",
                            }}
                          >
                            {item.city}
                          </PrimaryText>
                        </View>
                        <View
                          style={{
                            justifyContent: "flex-end",
                            marginRight: wp(2),
                          }}
                        >
                          <PrimaryText
                            textStyle={{
                              fontSize: 14,
                              alignSelf: "flex-start",
                              color: "#fff",
                              fontWeight: "400",
                              fontFamily: "acme",
                            }}
                          >
                            {item.price}
                          </PrimaryText>
                        </View>
                      </View>
                    </View>
                  </View>
                </TinderCard>
              </View>
            ))}
          </View>
          <View style={{ justifyContent: "flex-end", marginVertical: hp(2) }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => { addPostButtonCLickHandler() }}
                style={{
                  width: 78,
                  height: 78,
                  borderRadius: 100,
                  backgroundColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 12 },
                  shadowOpacity: 0.5,
                  shadowRadius: 20,
                  elevation: 5,
                }}
              >
                <AddIcon />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 99,
                  height: 99,
                  borderRadius: 100,
                  backgroundColor: "#E94057",
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "#E94057",
                  shadowOffset: { width: 0, height: 12 },
                  shadowOpacity: 0.5,
                  shadowRadius: 20,
                  elevation: 5,
                }}
              >
                <EvilIcons name="pencil" size={60} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={{
                width: 78,
                height: 78,
                borderRadius: 100,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 20,
                elevation: 5,
              }}>
                <Ionicons name="eye" size={30} color="#000" />
              </TouchableOpacity>
            </View>
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
  highlightedView: {
    flex: 1,
    backgroundColor: "#E5E5E5",
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
  mainImageView: {
    position: "absolute",
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  sidlerImage: {
    width: wp(80),
    height: hp(45),
    zIndex: 1,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
});
