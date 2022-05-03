import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';
import { Splash } from '../screens/Splash';
import { Confirmation } from '../screens/Confirmation';
import { FirstStep as SignUpFirstStep } from '../screens/SignUp/FirstStep';
import { SecondStep as SignUpSecondStep } from '../screens/SignUp/SecondStep';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            initialRouteName='Splash'
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="Splash"
                component={Splash}
            />
            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="SignUpFirstStep"
                component={SignUpFirstStep}
            />
            <Screen
                name="SignUpSecondStep"
                component={SignUpSecondStep}
            />
            <Screen
                name="Confirmation"
                component={Confirmation}
            />
        </Navigator>
    )
}