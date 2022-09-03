import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>É o Tubas🦈😎</Text>
      <Text style={styles.text}>SOTELDO</Text>
      <Text style={styles.text}>10</Text>
      <Image 
        style={styles.image} 
        source={require('./assets/images/soteldo.png')} 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 45,
    color: '#5DADE2',
  },
  image: {
    width: 240,
    height: 440
  }
});
