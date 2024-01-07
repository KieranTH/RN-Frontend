import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import clsx from "clsx"
import { Button, ButtonProps, GestureResponderEvent, Pressable, Text } from "react-native"
import StyledIcon from "./Icon"
import resolveConfig from 'tailwindcss/resolveConfig'
import twConfig from "../../../tailwind.config"
import {twMerge} from 'tailwind-merge'
import { PressableCompsProps, StyledCompsProps } from "../../type"
const twFullConfig = resolveConfig(twConfig)

type ButtonStyle = "primary" | "secondary" | "neutral"
type ButtonVariant = "x-small" | "small" | "medium" | "large" | "x-large" | "icon"

type StyledButtonProps = PressableCompsProps & StyledCompsProps & {
    title?: string
    theme?:ButtonStyle
    icon?: IconDefinition
    variant?: ButtonVariant
    textCn?: string
}

const StyledButton = ({title, theme = "primary", icon, cN, variant = "medium", pressOptions, textCn}: StyledButtonProps) => {

    const d = "flex justify-center flex-row items-center rounded-lg transition-colors web:gap-2"
    const className = twMerge(
        clsx(
            d,
            {
                // Styles
                'bg-primary' : theme === 'primary',
                'bg-secondary': theme === 'secondary',
                'hover:bg-primary-dark': theme === 'primary',
                'hover:bg-secondary-dark': theme === 'secondary',
                'bg-slate-200': theme === 'neutral',

                // Variants
                'w-[13vw] h-[4vh]': variant === 'x-small',
                'w-[17vw] h-[8vh]': variant === "icon",
                'w-[25vw] h-[5vh]': variant === "small",
                'w-[40vw] h-[7vh]': variant === "medium",
                'w-[50vw] h-[10vh]': variant === "large",
                'w-[60vw] h-[12vh]': variant === "x-large",
            }
        ),
        clsx(cN)
    )

    const textClassName = twMerge(clsx(
        "leading-none",
        {
        'text-primary-content': theme === 'primary',
        'text-secondary-content': theme === 'secondary',

            // Text Sizes
            'text-xs': variant === 'x-small',
            'text-sm': variant === "small",
            'text-lg': variant === "medium",
            'text-xl': variant === "large",
            'text-2xl': variant === "x-large"
        }
    ),
    clsx(textCn))

    const iconColors = theme === 'primary' ? twFullConfig.theme.colors['primary-content'].toString() : twFullConfig.theme.colors['secondary-content'].toString()
    return (
        <Pressable className={className} {...pressOptions} style={{gap: 8}}>
            {icon && (<StyledIcon icon={icon} className={textClassName} color={iconColors} size={30}/>)}
            {title && (<Text className={textClassName}>{title}</Text>)}
        </Pressable>
    )
}

export default StyledButton