import React from "react"
import ForegroundView from "./ForegroundView"
import { Header, StyledButton } from "../Components"
import { PressableCompsProps, StyledCompsProps } from "../type"
import Divide from "./Divide"
import { View } from "react-native"
import { classMerger } from "../utils"

type SectionAction = PressableCompsProps & {
    title: string;
}

type SectionProps = StyledCompsProps & {
    title?: string
    children: React.ReactNode
    action?: SectionAction
}
const Section = ({children, title, action, cN}: SectionProps) => {
    const d = "rounded-lg w-full lg:w-2/3 shadow-lg flex web:gap-2"
    const className = classMerger(d, cN)
    return (
        <ForegroundView cN={className} style={{gap: 10}}>
            {title && (
                <>
                    <View className="flex flex-row justify-between items-center" style={{gap: 10}}>
                        <Header cN="flex-1 basis-9/12">
                            {title}
                        </Header>
                        {action && (
                            <StyledButton cN={"flex-1 basis-3/12"} textCn="font-semibold" title={action.title} pressOptions={action.pressOptions} theme="neutral" variant="x-small"/>
                        )}
                    </View>
                    <Divide/>
                </>
            )}
           {children}
        </ForegroundView>
    )
}

export default Section