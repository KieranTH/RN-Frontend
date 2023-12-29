import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native"
import { RootStackParamList } from "../../App";
import { BackgroundView } from "../Layout";
import { StyledButton } from "../Components/Styled";

export type SettingsRouteProps = {
    source?: string
}

interface Props extends NativeStackScreenProps<RootStackParamList, 'Settings'> {}

const Settings = ({navigation, route}: Props) => {
    const params = route.params;
    return (
        <BackgroundView>
            <Text className="font-bold text-lg">
                You came from {params.source}
            </Text>
            <StyledButton
                title="Go to Home"
                onPress={() =>
                    navigation.navigate('Home')
                }
            />
            <StyledButton
                title="Go Back"
                onPress={() =>
                    navigation.goBack()
                }
            />
        </BackgroundView>
    )
}

export default Settings