import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import BrandSVG from '../../assets/brand.svg';
import LogoSVG from '../../assets/logo.svg';

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
    Extrapolate,
    runOnJS
} from 'react-native-reanimated';


import {
    Container
} from './styles';

export function Splash() {
    const splashAnimation = useSharedValue(0);

    const navigation = useNavigation<any>();

    const brandStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                splashAnimation.value,
                [0, 10, 20],
                [0, 1, 0],
                Extrapolate.CLAMP
            )
        }
    })

    const logoStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                splashAnimation.value,
                [25, 40, 50],
                [0, 1, 0],
                Extrapolate.CLAMP
            )
        }
    })

    useEffect(() => {
        splashAnimation.value = withTiming(
            50,
            { duration: 5000 },
            () => {
                'worklet'
                runOnJS(startApp)();
            }
        )
    }, []);

    function startApp() {
        navigation.navigate('SignIn');
    }

    return (
        <Container>

            <Animated.View style={[brandStyle, { position: 'absolute' }]}>
                <BrandSVG width={80} height={50} />
            </Animated.View>

            <Animated.View style={[logoStyle, , { position: 'absolute' }]}>
                <LogoSVG width={180} height={20} />
            </Animated.View>

        </Container>
    )
}
