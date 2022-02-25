import React from 'react';
import { View } from 'react-native';
import { createStackNavigator, CardStyleInterpolators, } from '@react-navigation/stack';
import { LandLoadChat } from '../screens/Chat/LandLoadChat';

const MessageStack = createStackNavigator();

export const MessageStackNavigator = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <MessageStack.Navigator
                initialRouteName="LandLoadChat"
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
            >
                <MessageStack.Screen
                    name="LandLoadChat"
                    options={{
                        headerTitle: "LandLoadChat",
                        headerShown: false,
                    }}
                    children={(props: any) => <LandLoadChat {...props} />}
                />
            </MessageStack.Navigator>
        </View>
    );
}
