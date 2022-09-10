import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image style={styles.sfc} source={require('./assets/images/santos_logo.png')}/>
        <FontAwesome5 name="paper-plane" size={24} color="black"/>
      </View>

      <View style={styles.stories}>
        <View style={styles.story}>
          <Image style={styles.storyImage} source={require('./assets/images/soteldo.png')}/>
          <Text>Soteldo</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.storyImage} source={require('./assets/images/mleonardo.jpg')}/>
          <Text>M. Leonardo</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.storyImage} source={require('./assets/images/angelo.jpg')}/>
          <Text>Ângelo</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.storyImage} source={require('./assets/images/jpaulo.jpg')}/>
          <Text>João Paulo</Text>
        </View>
      </View>

      <View style={styles.feed}>
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.postHeaderLeft}>
              <Image style={styles.postHeaderImage} source={require('./assets/images/santos.jpg')}/>
              <Text>santosfc</Text>
            </View>
            <FontAwesome5 name="ellipsis-h" size={16} color="black"/>
          </View>
          
          <Image style={styles.postImage} aspectRatio={1.5} source={require('./assets/images/santosvence.jpeg')}/>
          
          <View style={styles.footer}>
            <View style={styles.footerLeft}>
              <FontAwesome5 style={styles.footerIcon} name="heart" size={24} color="black"/>
              <FontAwesome5 style={styles.footerIcon} name="comment" size={24} color="black"/>
              <FontAwesome5 style={styles.footerIcon} name="paper-plane" size={24} color="black"/>
            </View>
            <FontAwesome5 style={styles.footerIcon} name="bookmark" size={24} color="black"/>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
  text: {
    fontSize: 45,
    color: '#5DADE2',
  },
  image: {
    width: 240,
    height: 440
  },
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
