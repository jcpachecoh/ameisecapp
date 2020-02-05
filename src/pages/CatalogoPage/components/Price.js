import React from 'react'
import { StyledPrice } from './styles'
import { PropTypes } from 'prop-types'

function Price({value}) {
    return (
        <StyledPrice>
            {value}
        </StyledPrice>
    )
}

Price.propTypes = {
    value: PropTypes.number
}

export default Price
