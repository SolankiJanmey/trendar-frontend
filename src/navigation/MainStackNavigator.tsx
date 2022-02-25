import React, { useMemo, useState, useEffect } from 'react';
import { View } from 'react-native';
import { createStackNavigator, CardStyleInterpolators, } from '@react-navigation/stack';
import { BottomTabNavigator } from './BottomTabNavigator'
import { OnBoardingLanding } from '../screens/OnBoarding/OnBoardingLanding';
import { SignUp } from '../screens/Auth/SignUp';
import { SignIn } from '../screens/Auth/SignIn';
import { AddEmail } from '../screens/Auth/AddEmail';
import { AddNumber } from '../screens/Auth/AddNumber';
import { EnterCode } from '../screens/Auth/EnterCode';
import { NotificationScreen } from '../screens/Auth/NotificationScreen';
import { ProfileDetail } from '../screens/Profile/ProfileDetail';
import { ProfileType } from '../screens/Profile/ProfileType';
import { ProfilePassion } from '../screens/Profile/ProfilePassion';
import { ProfilesProvider } from '../context/ProfilesContext';
import { AuthContext } from '../context/AuthContext';
import LocalStorge from '../services/LocalStorge';

const MainStack = createStackNavigator();
const AuthStack = createStackNavigator();

export const MainStackNavigator = () => {

    const [userToken, setUserToken] = useState('');
    const [isStackCalled, setIsStackCalled] = useState(false);
    const [loginUser, setLoginUser] = useState([]);

    useEffect(() => {
        getToken();
        // getUserDetails();
    }, []);

    const getToken = async () => {
        const token = await LocalStorge.getValue('token').then((token) => {
            if (token) {
                setUserToken(token);
            } else {
                setUserToken('');
            }
            setIsStackCalled(true);
        });
    }

    const authContext = useMemo(() => {
        return {
            usersignIn: (data: any) => {
                debugger;
                LocalStorge.setValue('token', data);
                setUserToken(data);

            },
            usersignOut: () => {
                alert()
                setUserToken('');
                LocalStorge.setValue('token', '');
            },
        }
    }, []);

    const unAuthScreens = () => {
        return (
            <>
                <MainStack.Navigator
                    screenOptions={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                    initialRouteName="OnBoardingLanding"
                >
                    <MainStack.Screen
                        name="OnBoardingLanding"
                        options={{
                            headerTitle: "OnBoardingLanding",
                            headerShown: false,
                        }}
                        children={(props: any) => <OnBoardingLanding {...props} />}
                    />
                    <MainStack.Screen
                        name="SignUp"
                        options={{
                            headerTitle: "SignUp",
                            headerShown: false,
                        }}
                        children={(props: any) => <SignUp {...props} />}
                    />
                    <MainStack.Screen
                        name="SignIn"
                        options={{
                            headerTitle: "SignIn",
                            headerShown: false,
                        }}
                        children={(props: any) => <SignIn {...props} />}
                    />
                    <MainStack.Screen
                        name="AddEmail"
                        options={{
                            headerTitle: "AddEmail",
                            headerShown: false,
                        }}
                        children={(props: any) => <AddEmail {...props} />}
                    />
                    <MainStack.Screen
                        name="AddNumber"
                        options={{
                            headerTitle: "AddNumber",
                            headerShown: false,
                        }}
                        children={(props: any) => <AddNumber {...props} />}
                    />
                    <MainStack.Screen
                        name="EnterCode"
                        options={{
                            headerTitle: "EnterCode",
                            headerShown: false,
                        }}
                        children={(props: any) => <EnterCode {...props} />}
                    />
                    <MainStack.Screen
                        name="NotificationScreen"
                        options={{
                            headerTitle: "NotificationScreen",
                            headerShown: false,
                        }}
                        children={(props: any) => <NotificationScreen {...props} />}
                    />
                    <MainStack.Screen
                        name="ProfileDetail"
                        options={{
                            headerTitle: "ProfileDetail",
                            headerShown: false,
                        }}
                        children={(props: any) => <ProfileDetail {...props} />}
                    />
                    <MainStack.Screen
                        name="ProfileType"
                        options={{
                            headerTitle: "ProfileType",
                            headerShown: false,
                        }}
                        children={(props: any) => <ProfileType {...props} />}
                    />
                    <MainStack.Screen
                        name="ProfilePassion"
                        options={{
                            headerTitle: "ProfilePassion",
                            headerShown: false,
                        }}
                        children={(props: any) => <ProfilePassion {...props} />}
                    />
                </MainStack.Navigator>
            </>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <AuthContext.Provider value={authContext}>
                <ProfilesProvider>
                    {
                        isStackCalled ? (
                            <MainStack.Navigator
                                initialRouteName="OnBoardingLanding"
                                screenOptions={{
                                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                                }}
                            >
                                {
                                    userToken.length > 0 ? (
                                        <AuthStack.Screen
                                            name="Root"
                                            options={{
                                                headerTitle: "Root",
                                                headerShown: false,
                                            }}
                                            children={(props: any) => <BottomTabNavigator {...props} />}
                                        />
                                    ) : (
                                        <AuthStack.Screen
                                            name="OnBoardingLanding"
                                            options={{ headerShown: false }}
                                            component={unAuthScreens}
                                        />
                                    )
                                }

                            </MainStack.Navigator>
                        ) : null
                    }

                </ProfilesProvider>
            </AuthContext.Provider>
        </View>
    );
}
