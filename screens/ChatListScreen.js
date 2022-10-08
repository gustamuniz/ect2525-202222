import react, { useEffect, useState } from "react";
import { Image, StyleSheet, View, Text, StatusBar, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function ChatListScreen({ navigation }) {
    const [chatList, setChatList] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://mobile.ect.ufrn.br:3000/chatlist')
            const chatList = await response.json();
            setChatList(chatList);
        }
        getData();
    }, []);

    function renderItem({item}) {
        return <TouchableOpacity style={styles.chat} onPress={() => navigation.navigate('ChatScreen', { id: item.id }) }>
            <Image style={styles.image} source={{ uri: item.imgPerfilUri }}/>
            <View style={styles.textBox}>
                <Text style={styles.nome}>{item.nomeUsuario}</Text>
                <Text>{item.ultimaMensagem}</Text>
            </View>
        </TouchableOpacity>
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <FlatList
                data={chatList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    chat: {
        height: 60,
        flexDirection: 'row'
    },
    image: {
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25
    },
    textBox: {
        justifyContent: 'center',

    },
    nome: {
        fontWeight: 'bold'
    }
});