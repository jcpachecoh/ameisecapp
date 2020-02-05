import React from 'react'
import Banner from '../../../components/Banner'

import hombre4_1 from '../../../../public/assets/photos/hombre4_1.jpg';
import MainBanner from './MainBanner';
import HamburgerMenu from '../../../components/HamburgerMenu';
import { StylesFullBanner } from './styles';

export default function PrincipalBanner() {
    return (
        <StylesFullBanner>
            <Banner bgImage={hombre4_1}>
                <HamburgerMenu />
                <MainBanner />
            </Banner>
        </StylesFullBanner>
    )
}
