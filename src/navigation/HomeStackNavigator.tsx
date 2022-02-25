import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { createStackNavigator, CardStyleInterpolators, } from '@react-navigation/stack';
import { HomeLanding } from '../screens/Home/HomeLanding';
import { LandLoadLanding } from '../screens/Home/LandLoadLanding';
import { AddPost } from '../screens/Posts/AddPost';
import LocalStorge from '../services/LocalStorge';

const HomeStack = createStackNavigator();
const LandLordStack = createStackNavigator();

export const HomeStackNavigator = () => {

    const [loginUser, setLoginUser]: any = useState([]);
    const [isLoginDetailsCalled, setIsLoginDetailsCalled] = useState(false);

    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = async () => {
        const user = await LocalStorge.getValue('signInUser').then((userData) => {
            if (userData) {
                return userData
            }
        });
        if (user) {
            setLoginUser(JSON.parse(user));
            setIsLoginDetailsCalled(true);
            console.log('======>>>>', JSON.parse(user));
        } else {
            setIsLoginDetailsCalled(true);
        }
    }


    const getLandLordScreens = () => {
        return (
            <LandLordStack.Navigator
                initialRouteName="LandLoadLanding"
            // screenOptions={{
            //     cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            // }}
            >
                <LandLordStack.Screen
                    name="LandLoadLanding"
                    options={{
                        headerTitle: "LandLoadLanding",
                        headerShown: false,
                    }}
                    children={(props: any) => <LandLoadLanding {...props} />}
                />
                <LandLordStack.Screen
                    name="AddPost"
                    options={{
                        headerTitle: "AddPost",
                        headerShown: false,
                    }}
                    children={(props: any) => <AddPost {...props} />}
                />
            </LandLordStack.Navigator>
        )
    }

    const getTenantScreens = () => {
        return (
            <HomeStack.Navigator
                initialRouteName="HomeLanding"
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
            >
                <HomeStack.Screen
                    name="HomeLanding"
                    options={{
                        headerTitle: "HomeLanding",
                        headerShown: false,
                    }}
                    children={(props: any) => <HomeLanding {...props} />}
                />
            </HomeStack.Navigator>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {
                isLoginDetailsCalled && loginUser.userType == "Landlord" ? getLandLordScreens() : getTenantScreens()
            }
        </View>
    );
}
