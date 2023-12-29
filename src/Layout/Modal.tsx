import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Text, View } from "react-native"
import { RootStackParamList } from "../../App"
import ForegroundView from "./ForegroundView"

export type ModalRouteProps = {

}

interface Props extends NativeStackScreenProps<RootStackParamList, 'Modal'> {}

const Modal = ({}: Props) => {
    return (
        <ForegroundView>
            <Text className="font-bold text-lg">This is a modal</Text>
        </ForegroundView>
    )
}

export default Modal