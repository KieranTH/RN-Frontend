import { MotiView } from "moti"
import { PressableCompsProps, StyledCompsProps } from "../../type"
import { classMerger } from "../../utils"
import { Pressable } from "react-native"

type BodyProps = StyledCompsProps & {
    children: React.ReactNode
}
const Body = ({children, cN}: BodyProps) => {
    const className = classMerger("w-full h-[80%] border-b-2 border-zinc-200 rounded-t-lg", cN)
    return (
        <MotiView className={className}>
            {children}
        </MotiView>
    )
}

type FooterProps = StyledCompsProps & {
    children: React.ReactNode
}
const Footer = ({children, cN}: FooterProps) => {
    const className = classMerger("w-full h-[20%] bg-slate-100 rounded-b-lg", cN)
    return (
        <MotiView className={className}>
             {children}
        </MotiView>
    )
}

type CardProps = StyledCompsProps & PressableCompsProps & {
    children: React.ReactNode
}
const Card = ({children, cN, pressOptions}: CardProps) => {
    const className = classMerger("rounded-lg bg-slate-200 shadow border-2 border-slate-300 aspect-square", cN)
    return (
        <MotiView className={className}>
            <Pressable {...pressOptions}>
                {children}
            </Pressable>
        </MotiView>
    )
}

Card.Body = Body;
Card.Footer = Footer

export default Card