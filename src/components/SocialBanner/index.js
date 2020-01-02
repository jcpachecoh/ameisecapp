import React from 'react'
import { StyledSocialBanner } from './styles'
import facebook from '../../../public/assets/facebook.png';
import twitter from '../../../public/assets/twitter.png';
import instagram from '../../../public/assets/instagram.png';
import Icon from '../Icon';

function SocialBanner() {
    const handleSocial = (evt) => {
        console.log(evt);
    }

    return (
        <StyledSocialBanner>
            <Icon image={facebook} size={'medium'} onClick={handleSocial} />
            <Icon image={twitter} size={'medium'} onClick={handleSocial} />
            <Icon image={instagram} size={'medium'} onClick={handleSocial} />
        </StyledSocialBanner>
    )
}

export default SocialBanner
