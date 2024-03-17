import { Typography } from 'antd'
import React from 'react'

function RegularText({
    className,
    text, 
}) {

    const { Text } = Typography;

    return (
        <Text
            className={`font-roboto ${className}`}
        >
            {text}
        </Text>
    )
}

export default RegularText