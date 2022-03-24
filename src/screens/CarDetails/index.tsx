import React from 'react';
import { useNavigation } from '@react-navigation/native';

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
    About,
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
    Rent
} from './styles';

export function CarDetails() {
    const navigation = useNavigation<any>();

    function handleSchedulingPage() {
        navigation.navigate('Scheduling')
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

                <About>
                    Este é automóvel desportivo. Surgiu do lendário touro de lide indultado
                    na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </About>

            </Content>

            <Footer>
                <Button
                    title="Escolher período de aluguel"
                    onPress={handleSchedulingPage}
                />
            </Footer>

        </Container>
    )
}