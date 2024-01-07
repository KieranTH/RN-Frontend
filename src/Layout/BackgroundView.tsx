import { View } from "react-native"
import { classMerger } from "../utils"

type BackgroundViewProps = {
    children: React.ReactNode
    cN?: string
}
const BackgroundView = ({children, cN}: BackgroundViewProps) => {

    const d = "bg-background h-full flex-1 relative p-4"

    const className = classMerger(d, cN)
    
    return (
        <View className={className}>
            {children}
        </View>
    )
}

export default BackgroundView