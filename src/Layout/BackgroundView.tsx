import clsx from "clsx"
import { View } from "react-native"

type BackgroundViewProps = {
    children: React.ReactNode
    className?: string
}
const BackgroundView = ({children, className: cN}: BackgroundViewProps) => {

    const d = "bg-background flex items-center flex-col gap-5 p-10 h-full"

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

export default BackgroundView