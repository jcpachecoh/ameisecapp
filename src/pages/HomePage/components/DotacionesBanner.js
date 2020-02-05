import React from 'react';
import { useHistory } from "react-router-dom";

import lana from '../../../../public/assets/lana.jpg';

import Banner from '../../../components/Banner'
import { StylesFullBanner } from './styles';
import Button from '../../../components/Button';

export default function DotacionesBanner() {

    let history = useHistory();

    function handleClick() {
      history.push("/dotaciones");
    }

    return (
        <StylesFullBanner>
            <Banner bgImage={lana}>
                <span>!Dotaciones Para Trabajo en frio!</span>
                <Button onClick={handleClick} value="Saber mas" />
            </Banner>
        </StylesFullBanner>
    )
}
