import React from 'react';
import { View } from 'react-native';
import { createStackNavigator, CardStyleInterpolators, } from '@react-navigation/stack';
import { OnBoardingLanding } from '../screens/OnBoarding/OnBoardingLanding';

const LikedStack = createStackNavigator();

export const LikedStackNavigator = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <LikedStack.Navigator
                initialRouteName="OnBoardingLanding"
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
            >
                <LikedStack.Screen
                    name="OnBoardingLanding"
                    options={{
                        headerTitle: "OnBoardingLanding",
                        headerShown: false,
                    }}
                    children={(props: any) => <OnBoardingLanding {...props} />}
                />
            </LikedStack.Navigator>
        </View>
    );
}
