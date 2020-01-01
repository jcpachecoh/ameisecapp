import React from 'react'
import Banner from '../../../components/Banner'

import bg2 from '../../../../public/assets/bg2.jpeg';
import { StylesFullBanner } from './styles';

export default function ContactUsBanner() {
    return (
        <StylesFullBanner>
            <Banner bgImage={bg2}>
                <h2>Us dsd</h2>
            </Banner>
        </StylesFullBanner>
    )
}
