import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { createStackNavigator, CardStyleInterpolators, } from '@react-navigation/stack';
import { useIsFocused } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { UserLanding } from '../screens/UserTab/UserLanding';
import { LandLoardLanding } from '../screens/UserTab/LandLoardLanding';
import LocalStorge from '../services/LocalStorge';

const UserProfileStackNavigatorStack = createStackNavigator();
const LandLordStack = createStackNavigator();

export const UserProfileStackNavigator = ({ navigation, route }: any) => {

    const [loginUser, setLoginUser]: any = useState([]);
    const [isLoginDetailsCalled, setIsLoginDetailsCalled] = useState(false);

    useEffect(() => {
        getUserDetails();
    }, []);

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
                    children={(props: any) => <LandLoardLanding {...props} />}
                />
            </LandLordStack.Navigator>
        )
    }

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

    const isFocused = useIsFocused();

    React.useEffect(() => {
        navigation.setOptions({ tabBarVisible: false })
    }, [navigation, route, isFocused]);

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {
                isLoginDetailsCalled && loginUser.userType == "Landlord" ? getLandLordScreens()  : (
                    <UserProfileStackNavigatorStack.Navigator
                    initialRouteName="UserLanding"
                    screenOptions={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                >
                    <UserProfileStackNavigatorStack.Screen
                        name="UserLanding"
                        options={{
                            headerTitle: "UserLanding",
                            headerShown: false,
                        }}
                        children={(props: any) => <UserLanding {...props} />}
                    />
                </UserProfileStackNavigatorStack.Navigator>
                )
            } 
           
        </View>
    );
}
