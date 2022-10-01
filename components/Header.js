import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header({ navigation }) {
    return (
        <View style={styles.header}>
            <Image style={styles.sfc} source={require('../assets/images/santos_logo.png')}/>
            <FontAwesome5 name="paper-plane" size={24} color="black" onPress={() => navigation.navigate('ChatListScreen') }/>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    sfc: {
        height: 30,
        width: 110
    },
});