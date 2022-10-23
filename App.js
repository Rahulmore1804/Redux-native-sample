import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cal from './Cal'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import redcers from './reducers/index'


export default function App() {

  const  store = createStore(redcers,{})
  
  return (
    <Provider store={ store}>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Cal/>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
