import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { gradients } from '../gradients';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="light" />
        <ScrollView>
          <View style={{ flex: 1, padding: 10 }}>
            {gradients.map((gradientGroup, index) => (
              <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
                {gradientGroup.map((gradient, gradientIndex) => (
                  <TouchableOpacity key={gradientIndex} style={{ flex: 1, marginVertical: 3, marginHorizontal: 5 }}>
                    <LinearGradient
                      colors={gradient.colors}
                      style={{
                        padding: 0,
                        borderWidth: 1,
                        borderColor: 'red',
                        borderRadius: 7,
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        height: 100,
                      }}
                    >
                      <Text style={{ color: 'white', fontWeight: 'bold'}}>{gradient.name}</Text>
                      <Text style={{ color: 'white', fontWeight: 'bold'}}>{gradient.name}</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});
