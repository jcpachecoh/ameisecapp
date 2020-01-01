import React from 'react'
import Banner from '../../../components/Banner'

import background from '../../../../public/assets/background.png';
import { StylesFullBanner } from './styles';

export default function ContactUsBanner() {
    return (
        <StylesFullBanner>
            <Banner bgImage={background}>
                <h2>Fifth dsd</h2>
            </Banner>
        </StylesFullBanner>
    )
}
