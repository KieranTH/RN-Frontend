import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Button, Linking, Pressable, Text, View } from "react-native"
import { RootStackParamList } from "../../App"
import { StyledButton } from "../Components/Styled"
import { BackgroundView } from "../Layout"
import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"

export type HomeRouteProps = {

}

interface Props extends NativeStackScreenProps<RootStackParamList, 'Home'> {

}

const Home = ({navigation}: Props) => {
    return (
        <BackgroundView>
            <Text className="font-bold text-lg">
                Welcome!
            </Text>
            <Text className="flex">
                This is a template app made by <Pressable className="flex flex-row font-bold cursor-pointer underline items-center justify-center gap-1" onPress={() => {Linking.openURL('https://github.com/KieranTH')}}><FontAwesomeIcon icon={faGithub}/>KieranTH</Pressable>
            </Text>
            <StyledButton
                title="Go to Settings"
                onPress={() =>
                    navigation.navigate('Settings', {source: 'Home'})
                }
                
            />

            <StyledButton
                title="Open Modal"
                onPress={() =>
                    navigation.navigate('Modal')
                }
                variant="secondary"
            />
        </BackgroundView>
    )
}

export default Home