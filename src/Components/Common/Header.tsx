import { Text } from "react-native"
import { StyledCompsProps } from "../../type"
import { twMerge } from "tailwind-merge"
import clsx from "clsx"

type HeaderProps = StyledCompsProps & {
    children: React.ReactNode
}
const Header = ({children, cN}: HeaderProps) => {
    const d = "font-bold text-lg"

    const className = twMerge(clsx(d), cN)
    return (
        <Text className={className}>
            {children}
        </Text>
    )
}

export default Header