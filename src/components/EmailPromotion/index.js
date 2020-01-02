import React, { useState } from 'react'
import { StyledEmailPromotion } from './styles'
import { messages } from '../../constants/messages'
import InputText from '../InputText'
import Button from '../Button';

export default function EmailPromotion() {
    const [email, setemail] = useState('');

    const handleEmail = (evt) => {
        setemail(evt.target.value)
    }

    const handleSubmit = () => {
        console.log('email', email);
    }

    return (
        <StyledEmailPromotion>
            <h2>{messages.emailPromotion}</h2>
            <div>
                <InputText
                    name={'newsletter'}
                    type={'email'}
                    placeholder={messages.email}
                    value={email}
                    onChange={handleEmail}
                />
                <Button onClick={handleSubmit} value={messages.submit} type={'secondary'} />
            </div>
        </StyledEmailPromotion>
    )
}
