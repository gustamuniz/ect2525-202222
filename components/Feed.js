import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Feed() {

    const feed = [
        {
            id: 1,
            nome: 'santosfc',
            perfilImg: require('../assets/images/santos.jpg'),
            img: require('../assets/images/santosvence.jpeg'),
            aspectRatio: 1.5
        },
        {
            id: 2,
            nome: 'Ângelo',
            perfilImg: require('../assets/images/angelo.jpg'),
            img: require('../assets/images/angelo-post.jpg'),
            aspectRatio: 0.8
        },
        {
            id: 3,
            nome: 'M. Leonardo',
            perfilImg: require('../assets/images/mleonardo.jpg'),
            img: require('../assets/images/mleonardo-post.jpg'),
            aspectRatio: 0.75
        },
    ]
    
    function renderItem({item}) {
        return <View style={styles.post}>
            <View style={styles.postHeader}>
                <View style={styles.postHeaderLeft}>
                    <Image style={styles.postHeaderImage} source={item.perfilImg}/>
                    <Text>{item.nome}</Text>
                </View>
            <FontAwesome5 name="ellipsis-h" size={16} color="black"/>
            </View>
        
            <Image style={styles.postImage} aspectRatio={item.aspectRatio} source={item.img}/>
        
            <View style={styles.footer}>
                <View style={styles.footerLeft}>
                    <FontAwesome5 style={styles.footerIcon} name="heart" size={24} color="black"/>
                    <FontAwesome5 style={styles.footerIcon} name="comment" size={24} color="black"/>
                    <FontAwesome5 style={styles.footerIcon} name="paper-plane" size={24} color="black"/>
                </View>
                <FontAwesome5 style={styles.footerIcon} name="bookmark" size={24} color="black"/>
            </View>
        </View>
    }

    return (
        <View style={styles.feed}>
            <FlatList
                data={feed}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    feed: {
        flex: 1,
        backgroundColor: 'white'
    },
    post: {
        backgroundColor: 'white'
    },
    postHeader: {
        height: 60,
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    postHeaderImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 5
    },
    postHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    postImage: {
        width: '100%',
        height: undefined
    },
    footer: {
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    footerIcon: {
        margin: 5
    },
    footerLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
});