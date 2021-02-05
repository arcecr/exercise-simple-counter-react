import React from 'react'
import PropTypes from 'prop-types';

import { toSeconds, toMinutes, toHours, getDigits } from './utils'

import Box from './Box';
import Icon from './Icon';

const SecondsCounter = props => {
    return (
        <div className="secondsCounter">
            <div className="timeContainer">
                <Box className="clockIconBox"><Icon name="clock" /></Box>
                <Box>{toHours(props.seconds)}</Box>
                <Box className="limiter">:</Box>
                <Box>{toMinutes(props.seconds)}</Box>
                <Box className="limiter">:</Box>
                <Box>{toSeconds(props.seconds)}</Box>
            </div>
            {props.children}
        </div>
    )
}

SecondsCounter.propTypes = {
    seconds: PropTypes.number
}

export default SecondsCounter
