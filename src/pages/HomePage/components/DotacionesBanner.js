import React from 'react'
import Banner from '../../../components/Banner'

import lana from '../../../../public/assets/lana.jpg';
import { StylesFullBanner } from './styles';

export default function DotacionesBanner() {
    return (
        <StylesFullBanner>
            <Banner bgImage={lana}>
                <h2>Dotaciones</h2>
            </Banner>
        </StylesFullBanner>
    )
}
