import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';
import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Confirmation } from '../screens/Confirmation';
import { MyCars } from '../screens/MyCars';
import { FirstStep as SignUpFirstStep } from '../screens/SignUp/FirstStep';
import { SecondStep as SignUpSecondStep } from '../screens/SignUp/SecondStep';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
    return (
        <Navigator
            initialRouteName='Home'
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
                name="Home"
                component={Home}
                options={{
                    gestureEnabled: false,
                }}
            />
            <Screen
                name="CarDetails"
                component={CarDetails}
            />
            <Screen
                name="Scheduling"
                component={Scheduling}
            />
            <Screen
                name="SchedulingDetails"
                component={SchedulingDetails}
            />
            <Screen
                name="Confirmation"
                component={Confirmation}
            />
            <Screen
                name="MyCars"
                component={MyCars}
            />

        </Navigator>
    )
}