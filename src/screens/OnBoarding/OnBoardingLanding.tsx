import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Asset } from "expo-asset";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { PrimaryText } from "../../components/PrimaryText";
import { PrimaryButton } from "../../components/PrimaryButton";

export const OnBoardingLanding = ({ navigation }: any) => {
  const [landingScreens, setLandingScreens] = useState([
    {
      id: 1,
      title: "Algorithm",
      image: require("../../../assets/images/OnBoarding/OnBordingScreen1.png"),
      subTitle:
        "Using advance algorithms to match right people with the right place",
    },
    {
      id: 2,
      title: "Matches",
      image: require("../../../assets/images/OnBoarding/OnBordingScreen2.png"),
      subTitle:
        "We match people to the right property that meets all their needs",
    },
    {
      id: 3,
      title: "Premium",
      image: require("../../../assets/images/OnBoarding/OnBordingScreen3.png"),
      subTitle:
        "Sign up today and enjoy premium benefits on us.",
    },
  ]);
  const [activeSlide, setActiveSlide] = useState(0);

  const signInClickHandler = () => {
    navigation.navigate("SignIn");
  };

  const signUpClickHandler = () => {
    navigation.navigate("SignUp");
  };

  const _renderItem = ({ item, index }: any) => {
    return (
      <View style={{ width: wp(100), height: hp(90) }}>
        <View
          style={{
            alignItems: "center",
            flex: 1,
            backgroundColor: "#fff",
            marginTop: hp(5),
          }}
        >
          <Image source={item.image} />
          <View
            style={{
              marginTop: hp(5),
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: wp(10),
              paddingRight: wp(5),
              maxWidth:300
            }}
          >
            <PrimaryText
              textStyle={{
                color: "#E94057",
                fontSize: 24,
                // marginBottom: hp(-1),
              }}
            >
              {item.title}
            </PrimaryText>
            <PrimaryText>{item.subTitle}</PrimaryText>
          </View>
        </View>
      </View>
    );
  };

  const pagination = () => {
    return (
      <Pagination
        dotsLength={landingScreens.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: "#fff" }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: "#E94057",
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          // marginHorizontal: 2,
          backgroundColor: "#000",
          opacity: 0.1,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ flex: 0.8 }}>
          <Carousel
            activeSlideOffset={20}
            hasParallaxImages={true}
            layout={"default"}
            layoutCardOffset={50}
            loop={true}
            data={landingScreens}
            renderItem={_renderItem}
            onSnapToItem={(index) => setActiveSlide(index)}
            sliderWidth={wp(80)}
            itemWidth={wp(80)}
            inactiveSlideOpacity={1}
          />
          {pagination()}
        </View>
        <View style={{ flex: 0.2, marginHorizontal: wp(5) }}>
          <View>
            <PrimaryButton
              onPress={() => {
                signUpClickHandler();
              }}
            >
              Create an account
            </PrimaryButton>
          </View>
          <View style={{ marginTop: hp(2) }}>
            <PrimaryText>
              Already have an account?{" "}
              <PrimaryText
                textStyle={{ color: "#E94057" }}
                onPress={() => {
                  signInClickHandler();
                }}
              >
                Sign In
              </PrimaryText>
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
