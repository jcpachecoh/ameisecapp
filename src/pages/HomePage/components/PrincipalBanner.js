import React from 'react'
import Banner from '../../../components/Banner'

import targetcollabs from '../../../../public/assets/targetcollabs.jpg';
import MainBanner from './MainBanner';
import HamburgerMenu from '../../../components/HamburgerMenu';
import { StylesFullBanner } from './styles';

export default function PrincipalBanner() {
    return (
        <StylesFullBanner>
            <Banner bgImage={targetcollabs}>
                <HamburgerMenu />
                <MainBanner />
            </Banner>
        </StylesFullBanner>
    )
}
