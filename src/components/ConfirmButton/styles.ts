import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';

export const Container = styled.TouchableOpacity <TouchableOpacityProps>`
    height: 56px;
    width: 80px;

    background-color: ${({ theme }) => theme.colors.shape_dark};

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(15)}px;
`;