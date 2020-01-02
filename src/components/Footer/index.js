import React, { Fragment } from 'react'
import EmailPromotion from '../EmailPromotion'
import SocialBanner from '../SocialBanner'

export default function Footer() {
    return (
        <Fragment>
            <EmailPromotion />
            <SocialBanner />
        </Fragment>
    )
}
