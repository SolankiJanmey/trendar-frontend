import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { View } from "react-native";
import { HomeStackNavigator } from './HomeStackNavigator';
import { LikedStackNavigator } from './LikedStackNavigator';
import { MessageStackNavigator } from './MessageStackNavigator';
import { UserProfileStackNavigator } from './UserProfileStackNavigator';
import { HomeTabIcon } from '../../assets/icons/HomeTabIcon';
import { LikedTabIcon } from '../../assets/icons/LikedTabIcon';
import { MessageTabIcon } from '../../assets/icons/MessageTabIcon';
import { UserProfileTabIcon } from '../../assets/icons/UserProfileTabIcon';
import { widthPercentageToDP } from "react-native-responsive-screen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "HomeTab";

type BottomTabNavigatorProps = {
    navigation: any;
    route: any;
};

export function BottomTabNavigator(props: BottomTabNavigatorProps) {
    return (
        <BottomTab.Navigator
            initialRouteName={INITIAL_ROUTE_NAME}
            tabBarOptions={{
                activeTintColor: '#fff',
                keyboardHidesTabBar: true,
                // inactiveTintColor: Colors.darkblue45818e,
                style: {
                    backgroundColor: '#F3F3F3',
                    width: "100%",
                    height: '8%',
                },
            }}
        >
            <BottomTab.Screen
                name="HomeTab"
                component={HomeStackNavigator}
                options={({ navigation }) => {
                    return {
                        tabBarLabel: () => { return null },
                        tabBarIcon: ({ focused, color, }) => {
                            return focused ? (
                                <>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', paddingBottom: hp(2) }}>
                                        <View style={{ borderTopWidth: 2, borderTopColor: '#E94057', }}>
                                            <HomeTabIcon color={"#E94057"} />
                                        </View>
                                    </View>
                                </>
                            ) : (
                                <>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', paddingBottom: hp(2) }}>
                                        <View style={{}}>
                                            <HomeTabIcon />
                                        </View>
                                    </View>
                                </>
                            );
                        },
                    };
                }}
                listeners={({ navigation }) => ({
                    tabPress: e => {
                        navigation.navigate('HomeTab', { screen: 'HomeScreen' });
                    },
                })}
            />

            <BottomTab.Screen
                name="LikedTab"
                component={MessageStackNavigator}
                options={({ navigation }) => {
                    return {
                        tabBarLabel: () => { return null },
                        tabBarIcon: ({ focused, color, }) => {
                            return focused ? (
                                <>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', paddingBottom: hp(2) }}>
                                        <View style={{ borderTopWidth: 2, borderTopColor: '#E94057', }}>
                                            <LikedTabIcon color={"#E94057"} />
                                        </View>
                                    </View>
                                </>
                            ) : (
                                <>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', paddingBottom: hp(2) }}>
                                        <View style={{}}>
                                            <LikedTabIcon />
                                        </View>
                                    </View>
                                </>
                            );
                        },
                    };
                }}
                listeners={({ navigation }) => ({
                    tabPress: e => {
                        navigation.navigate('LikedTab', { screen: 'BusinessHome' });
                    },
                })}
            />

            <BottomTab.Screen
                name="MessageTab"
                component={MessageStackNavigator}
                options={({ navigation }) => {
                    return {
                        tabBarLabel: () => { return null },
                        tabBarIcon: ({ focused, color, }) => {
                            return focused ? (
                                <>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', paddingBottom: hp(2) }}>
                                        <View style={{ borderTopWidth: 2, borderTopColor: '#E94057', }}>
                                            <MessageTabIcon color={"#E94057"} />
                                        </View>
                                    </View>
                                </>
                            ) : (
                                <>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', paddingBottom: hp(2) }}>
                                        <View style={{}}>
                                            <MessageTabIcon />
                                        </View>
                                    </View>
                                </>
                            );
                        },
                    };
                }}
                listeners={({ navigation }) => ({
                    tabPress: e => {
                        navigation.navigate('MessageTab', { screen: 'SocialGroupsHome' });
                    },
                })}
            />

            <BottomTab.Screen
                name="UserProfileTab"
                component={UserProfileStackNavigator}
                options={({ navigation }) => {
                    return {
                        tabBarLabel: () => { return null },
                        tabBarIcon: ({ focused, color, }) => {
                            return focused ? (
                                <>
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', paddingBottom: hp(2) }}>
                                        <View style={{ borderTopWidth: 2, borderTopColor: '#E94057', }}>
                                            <UserProfileTabIcon />
                                        </View>
                                    </View>

                                </>
                            ) : (
                                <>
                                     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', paddingBottom: hp(2) }}>
                                            <UserProfileTabIcon />
                                    </View>
                                </>
                            );
                        },
                    };

                }}
                listeners={({ navigation }) => ({
                    tabPress: e => {
                        navigation.navigate('UserProfileTab', { screen: 'ChatHome' });
                    },
                })}
            />

        </BottomTab.Navigator >
    );
}



