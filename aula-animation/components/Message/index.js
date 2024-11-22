import { View, Text } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

export default function Message() {
    return (
        <View style={styles.container}>
            <MaterialIcons name='notifications' color='gold' size={24}/>
            <Text style={styles.title}>Texto da Mensagem</Text>
        </View>
    )
}