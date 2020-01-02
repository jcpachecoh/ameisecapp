import React from 'react'
import Banner from '../../../components/Banner'

import man1 from '../../../../public/assets/photos/man1.jpg';
import MainBanner from './MainBanner';
import HamburgerMenu from '../../../components/HamburgerMenu';
import { StylesFullBanner } from './styles';

export default function PrincipalBanner() {
    return (
        <StylesFullBanner>
            <Banner bgImage={man1}>
                <HamburgerMenu />
                <MainBanner />
            </Banner>
        </StylesFullBanner>
    )
}
