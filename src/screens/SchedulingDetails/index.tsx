import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { format } from 'date-fns';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import { CarDTO } from '../../dtos/CarDTO';

import { getAccessoryIcon } from '../../utils/getAccessoryIcons'
import { getPlatformDate } from '../../utils/getPlatformDate';

import { api } from '../../services/api';

import {
    Accessories,
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
} from './styles';

interface RentalPeriod {
    start: string;
    end: string;
}

interface Params {
    car: CarDTO;
    dates: string[];
}

export function SchedulingDetails() {
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);
    const theme = useTheme();
    const navigation = useNavigation<any>();
    const route = useRoute();

    const [loading, setLoading] = useState(false);

    const { car, dates } = route.params as Params;

    const rentTotal = Number(dates.length * car.rent.price);

    async function handleConfirmRental() {
        setLoading(true);
        const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

        const unavailable_dates = [
            ...schedulesByCar.data.unavailable_dates,
            ...dates
        ];

        const schedule_by_user = {
            user_id: 1,
            car,
            startDate: rentalPeriod.start,
            endDate: rentalPeriod.end
        };

        console.log(schedule_by_user);

        await api.post(`/schedules_byuser/`, schedule_by_user);

        api.put(`/schedules_bycars/${car.id}`, {
            id: car.id,
            unavailable_dates
        })
            .then(response => navigation.navigate('SchedulingComplete'))
            .catch(() => {
                setLoading(false);
                Alert.alert("Não foi possível confirmar o agendamento.");
            });

    }

    function handleBack() {
        navigation.goBack();
    }

    useEffect(() => {
        setRentalPeriod({
            start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
            end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
        })
    }, [])

    return (
        <Container>
            <Header>
                <BackButton
                    onPress={handleBack}
                />
            </Header>

            <CarImages>
                <ImageSlider
                    imagesUrl={car.photos}
                />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>

                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>R$ {car.rent.price}</Price>
                    </Rent>
                </Details>

                <Accessories>
                    {
                        car.accessories.map(accessory =>
                            <Accessory
                                key={accessory.type}
                                name={accessory.name}
                                icon={getAccessoryIcon(accessory.type)}
                            />
                        )
                    }
                </Accessories>

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
                        <DateValue>{rentalPeriod.start}</DateValue>
                    </DateInfo>

                    <Feather
                        name="chevron-right"
                        size={RFValue(10)}
                        color={theme.colors.text}
                    />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue>{rentalPeriod.end}</DateValue>
                    </DateInfo>

                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>{`R$ ${car.rent.price} x${dates.length} diárias`}</RentalPriceQuota>
                        <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>

            </Content>

            <Footer>
                <Button
                    title="Alugar agora"
                    onPress={handleConfirmRental}
                    color={theme.colors.success}
                    disabled={loading}
                    loading={loading}
                />
            </Footer>

        </Container>
    )
}