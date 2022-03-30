import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import { Car } from '../../components/Car';
import { Load } from '../../components/Load';

import {
    Container,
    Header,
    HeaderContent,
    TotalCars,
    CarList
} from './styles';

type Props = NativeStackScreenProps<any, 'Home'>;

export function Home() {
    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation<any>();

    const carData = {
        brand: 'audi',
        name: 'RS 5 Coupé',
        rent: {
            period: 'ao dia',
            price: 120,
        },
        thumbnail: 'https://production.autoforce.com/uploads/version/profile_image/3188/model_main_comprar-tiptronic_87272c1ff1.png',
    }

    function handleCarDetails() {
        navigation.navigate('CarDetails')
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/cars');
                console.log(response.data)
                setCars(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchCars()
    }, []);

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />
                    <TotalCars>
                        Total 12 carros
                    </TotalCars>
                </HeaderContent>
            </Header>

            {loading ?
                <Load />
                :
                <CarList
                    data={cars}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) =>
                        <Car data={item} onPress={handleCarDetails} />
                    }
                />
            }
        </Container>
    )
}