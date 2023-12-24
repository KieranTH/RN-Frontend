import clsx from "clsx"
import { Button, ButtonProps, GestureResponderEvent, Pressable, Text } from "react-native"

type ButtonVariant = "primary" | "secondary"

type StyledButtonProps = {
    title: string
    onPress?: (event: GestureResponderEvent) => void
    variant?:ButtonVariant
}

const StyledButton = ({title, onPress, variant = "primary"}: StyledButtonProps) => {

    const d = "flex justify-center items-center w-fit p-2 rounded-lg transition-colors"
    const className = clsx(
        d,
        {
            'bg-primary' : variant === 'primary',
            'bg-secondary': variant === 'secondary'
        }
    )

    const textClassName = clsx({
        'text-white': variant === 'primary',
        'text-slate-800': variant === 'secondary'
    })
    return (
        <Pressable className={className} onPress={onPress}>
            <Text className={textClassName}>{title}</Text>
        </Pressable>
    )
}

export default StyledButton