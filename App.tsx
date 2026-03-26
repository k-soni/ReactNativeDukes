import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View >
          <Text style={styles.title} >Open up App.tsx to working on your app!</Text>
           <Text>Open up App.tsx to working on your app!</Text>
            <Text>Open up App.tsx to working on your app!
               <Text>Open up App.tsx to working on your app!</Text>
              </Text>
             <Text>Open up App.tsx to working on your app!</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bc3737',
  },
  title: {
    fontSize: 40
  }


});
