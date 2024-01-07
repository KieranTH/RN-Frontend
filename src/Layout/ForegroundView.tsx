import clsx from "clsx"
import { View } from "react-native"
import { StyledCompsProps } from "../type"
import { classMerger } from "../utils"

type ForegroundViewProps = StyledCompsProps & {
    children: React.ReactNode
}
const ForegroundView = ({cN, children, style}: ForegroundViewProps) => {

    const d = "bg-foreground relative py-3 px-5"

    const className = classMerger(d, cN)

    return (
        <View className={className} style={style}>
            {children}
        </View>
    )
}

export default ForegroundView