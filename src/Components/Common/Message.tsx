import { View } from "react-native"
import { StyledCompsProps } from "../../type"
import { twMerge } from "tailwind-merge"
import clsx from "clsx"

type MessageProps = StyledCompsProps & {
    variant?: "danger" | "warning" | "neutral" | "success"
    children: React.ReactNode
}
const Message = ({cN, variant = "neutral", children}: MessageProps) => {

    const d = clsx("flex items-center justify-center flex-col web:gap-5 py-2 px-4 rounded-lg",
        {
            'bg-success': variant === 'success',
            'bg-error': variant === 'danger',
            'bg-warning': variant === 'warning',
            'bg-slate-200': variant === 'neutral'
        }
    )

    const className = twMerge(
        d,
        clsx(cN)
    )

    return (
        <View className={className} style={{gap: 5}}>
            {children}
        </View>
    )
}

export default Message