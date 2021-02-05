import React from 'react'
import PropTypes from 'prop-types';

const Box = props => {
    return (
        <div className={`box ${props.className}`}>{props.children}</div>
    )
}

Box.propTypes = {
    className: PropTypes.string
}

export default Box
