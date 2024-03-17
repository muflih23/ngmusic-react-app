export function FlexCol ({
    children,
    className,
}) {
    return <div
        className={
            `flex flex-col ${className}`
        }
    >
        {children}
    </div>
}

export function FlexRow ({
    children,
    className,
}) {
    return <div
        className={
            `flex flex-row ${className}`
        }
    >
        {children}
    </div>
}

export function Flex ({
    children,
    className,
}) {
    return <div
        className={
            `flex ${className}`
        }
    >
        {children}
    </div>
}

export function CenteredFlex ({
    children,
    className,
}) {
    return <div
        className={
            `flex justify-center items-center ${className}`
        }
    >
        {children}
    </div>
}