import React, { useState } from 'react';
import { TextInputProps, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import {
    Container,
    IconContainer,
    InputText,
} from './styles';

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
};

export function PasswordInput({
    iconName,
    value,
    ...rest
}: InputProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const theme = useTheme();

    function handleInputFocused() {
        setIsFocused(true);
    }


    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!value);
    }

    function handlePasswordVisibilityChange() {
        setIsPasswordVisible(oldState => !oldState)
    }

    return (
        <Container>
            <IconContainer
                style={{ marginRight: 2 }}
                isFocused={isFocused}
            >
                <Feather
                    name={iconName}
                    size={24}
                    color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail}
                />
            </IconContainer >

            <InputText
                isFocused={isFocused}
                secureTextEntry={!isPasswordVisible}
                onFocus={handleInputFocused}
                onBlur={handleInputBlur}
                autoCorrect={false}

                {...rest}
            />

            <TouchableOpacity
                onPress={handlePasswordVisibilityChange}
            >
                <IconContainer isFocused={isFocused}>
                    <Feather
                        name={isPasswordVisible ? 'eye' : 'eye-off'}
                        size={24}
                        color={theme.colors.text_detail}
                    />
                </IconContainer >
            </TouchableOpacity>


        </Container>
    )
}