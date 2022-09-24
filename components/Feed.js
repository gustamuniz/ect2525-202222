import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Feed() {
    const [feed, setFeed] = useState();

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://mobile.ect.ufrn.br:3000/feed');
            const feed = await response.json();
            setFeed(feed)
        }
        getData();
    }, []);
    
    function renderItem({item}) {
        return <View style={styles.post}>
            <View style={styles.postHeader}>
                <View style={styles.postHeaderLeft}>
                    <Image style={styles.postHeaderImage} source={{ uri: item.imgPerfilUri }}/>
                    <Text>{item.nomeUsuario}</Text>
                </View>
            <FontAwesome5 name="ellipsis-h" size={16} color="black"/>
            </View>
        
            <Image style={styles.postImage} aspectRatio={item.aspectRatio} source={{ uri: item.imgPostUri }}/>
        
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