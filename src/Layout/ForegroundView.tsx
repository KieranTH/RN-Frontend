import clsx from "clsx"
import { View } from "react-native"

type ForegroundViewProps = {
    children: React.ReactNode
    className?: string
}
const ForegroundView = ({children, className: cN}: ForegroundViewProps) => {

    const d = "bg-foreground flex items-center flex-col gap-5 p-10 h-full"

    const className = clsx(
        d,
        cN
    )
    return (
        <View className={className}>
            {children}
        </View>
    )
}

export default ForegroundView