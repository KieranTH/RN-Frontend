import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Button, Linking, Pressable, Text, View } from "react-native"
import { RootStackParamList } from "../../App"
import { StyledButton } from "../Components/Styled"
import { BackgroundView, Break } from "../Layout"
import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import { Header } from "../Components"

export type HomeRouteProps = {

}

interface Props extends NativeStackScreenProps<RootStackParamList, 'Home'>{}

const Home = ({navigation}: Props) => {
    return (
        <BackgroundView>
            <Header>
                Welcome!
            </Header>
            <Break/>
            <Text className="">
                This is a template app made by <Pressable className="flex flex-row font-bold cursor-pointer underline items-center justify-center gap-1" onPress={() => {Linking.openURL('https://github.com/KieranTH')}}><Text><FontAwesomeIcon icon={faGithub}/>KieranTH</Text></Pressable>
            </Text>
            <Break/>
            <View className="flex flex-row w-full justify-center" style={{gap: 10}}>
                <StyledButton
                    title="Go to Settings"
                    pressOptions={{
                        onPress: () =>navigation.navigate('Settings', {source: 'Home'})
                    }}
                    
                    
                />

                <StyledButton
                    title="Open Modal"
                    pressOptions={{
                        onPress:() =>
                        navigation.navigate('Modal')
                    }}
                    style="secondary"
                />
            </View>
        </BackgroundView>
    )
}

export default Home