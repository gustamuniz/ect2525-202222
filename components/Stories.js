import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function Stories() {
    const stories = [
        {
            id: 1,
            nome: 'Soteldo',
            src: require('../assets/images/soteldo.png')
        },
        {
            id: 2,
            nome: 'M. Leonardo',
            src: require('../assets/images/mleonardo.jpg')
        },
        {
            id: 3,
            nome: 'Ângelo',
            src: require('../assets/images/angelo.jpg')
        },
        {
            id: 4,
            nome: 'João Paulo',
            src: require('../assets/images/jpaulo.jpg')
        },
        {
            id: 5,
            nome: 'Lucas Braga',
            src: require('../assets/images/braga.jpg')
        },
        {
            id: 6,
            nome: 'Rodri Fernandez',
            src: require('../assets/images/rodrigo.jpg')
        },
    ]

    function renderItem({item}) {
        return <View style={styles.story}>
            <Image style={styles.storyImage} source={item.src}/>
            <Text>{item.nome}</Text>
        </View>
    }
    
    return (
        <View style={styles.stories}>
            <FlatList
                data={stories}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    stories: {
        height: 90,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    story: {
        height: 90,
        width: 90,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
        storyImage: {
        height: 70,
        width: 70,
        borderRadius: 35
    },
});