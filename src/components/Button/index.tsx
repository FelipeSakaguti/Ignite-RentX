import React from 'react';
import { ActivityIndicator } from 'react-native';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

import {
    Container, Title
} from './styles';

interface Props extends TouchableOpacityProps {
    title: string;
    color?: string;
    disabled?: boolean;
    loading?: boolean;
}

export function Button({
    title,
    color,
    disabled = false,
    loading = false,
    ...rest
}: Props) {

    const theme = useTheme();

    return (
        <Container
            disabled={disabled}
            color={color}
            style={{ opacity: (disabled === true || loading === true) ? 0.5 : 1 }}
            {...rest}
        >
            {loading
                ? <ActivityIndicator
                    color={theme.colors.shape}
                />
                : <Title>{title}</Title>
            }
        </Container>
    )
}