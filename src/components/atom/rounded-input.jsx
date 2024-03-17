import { Input } from 'antd'
import React from 'react'

function RoundedInput(props) {

    return (
        <Input 
            placeholder={props.placeholder}
            className={`${props.className} rounded-[20px] centeredValue coloredInput h-[40px] text-[12px] lg:text-[14px] font-semibold text-blueGray`}
            onChange={(e) => props.onChange(e)}
            value={props.value}
        />
    )
}

export default RoundedInput