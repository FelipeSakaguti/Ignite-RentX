import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import GasolineSvg from '../../assets/gasoline.svg'
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcons';

import {
    About,
    Brand,
    Container,
    Details,
    Name,
    Period,
    Price,
    Rent,
    Type,
    CarImage
} from './styles';

interface Props extends TouchableOpacityProps {
    data: CarDTO;
}

export function Car({ data, ...rest }: Props) {
    const MotorIcon = getAccessoryIcon(data.fuel_type);

    return (
        <Container {...rest} >
            <Details>
                <Brand>{data.brand}</Brand>
                <Name>{data.name}</Name>

                <About>
                    <Rent>
                        <Period>{data.period}</Period>
                        <Price>{`R$ ${data.price}`}</Price>
                    </Rent>

                    <Type>
                        <MotorIcon />
                    </Type>
                </About>
            </Details>

            <CarImage source={{ uri: data.thumbnail }} />
        </Container >
    )
}
