import { Button } from 'antd'
import React from 'react'

function PrimaryButton({
    transparent,
    action,
    text,
    disabled,
    className,
}) {

    return (
        <Button 
            disabled={disabled}
            className={`flex h-[40px] w-[280px] justify-center items-center ${transparent ? `bg-transparent` : ``} rounded-[20px] border-0 py-[13px] ${className}`}
            onClick={action}
        >
            <span className={`font-semibold text-[14px] lg:text-[16px] text-white`}>{text}</span>        
        </Button>
    )
}

export default PrimaryButton