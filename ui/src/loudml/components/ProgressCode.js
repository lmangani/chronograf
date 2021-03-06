import React from 'react'
import {PropTypes} from 'prop-types'

import 'src/loudml/styles/progress.css'

const ProgressCode = ({
    label,
    color,
    max,
    value,
}) => {

    function borderStyle() {
        const percent = Math.floor(value*100/max)

        return `linear-gradient(90deg, ${color} ${percent}%, transparent 0%) 2`
    }

    return (
        <code style={{
            borderBottom: '1px solid',
            borderImage: borderStyle(),
        }}>
            {label}
        </code>
    )
}

ProgressCode.defaultProps = {
    color: '#22ADF6',    
}

ProgressCode.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    max: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

export default ProgressCode
