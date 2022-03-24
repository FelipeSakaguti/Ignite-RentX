import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

import {
    Acessories,
    Brand,
    CarImages,
    Container,
    Content,
    Description,
    Details,
    Footer,
    Header,
    Name,
    Period,
    Price,
    Rent,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal,
    RentalPriceContainer
} from './styles';

export function SchedulingDetails() {
    const theme = useTheme();

    const navigation = useNavigation<any>();

    function handleConfirmRental() {
        navigation.navigate('SchedulingComplete')
    }

    return (
        <Container>
            <Header>
                <BackButton
                    onPress={() => { }}
                />
            </Header>

            <CarImages>
                <ImageSlider
                    imagesUrl={['https://production.autoforce.com/uploads/version/profile_image/3188/model_main_comprar-tiptronic_87272c1ff1.png']}
                />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>

                <Acessories>
                    <Acessory name="380km/h" icon={speedSvg} />
                    <Acessory name="3.2s" icon={AccelerationSvg} />
                    <Acessory name="800 HP" icon={ForceSvg} />
                    <Acessory name="Gasolina" icon={GasolineSvg} />
                    <Acessory name="Auto" icon={ExchangeSvg} />
                    <Acessory name="2 pessoas" icon={PeopleSvg} />
                </Acessories>

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather
                            name="calendar"
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>18/06/2021</DateValue>
                    </DateInfo>

                    <Feather
                        name="chevron-right"
                        size={RFValue(10)}
                        color={theme.colors.text}
                    />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue>18/06/2021</DateValue>
                    </DateInfo>

                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
                        <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>

            </Content>

            <Footer>
                <Button
                    title="Alugar agora"
                    onPress={handleConfirmRental}
                    color={theme.colors.success}
                />
            </Footer>

        </Container>
    )
}