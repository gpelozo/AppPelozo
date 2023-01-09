import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Hola,Coder!</Text>
        <TextInput placeholder="Escriba aqui" style={styles.addItemInput}/>
        <Button title="Iniciar sesion" onPress={() => console.log("Hola, Coder!")}/>
      </View>
      <View style={{flex: 1, backgroundColor: "orange" }}>
        <Text>Created by Gonzalo Ian Pelozo, 2023©.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D3137",
    padding: 50, 
    paddingTop: 80,
  },
  titleContainer: {
    height: 200,
    padding: 50,
    backgroundColor: "#380099",

  },
  inputContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
  },
  addItemInput: {
    borderBottomColor: "orange", 
    borderBottomWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: 200,
    TextColor: "orange",
  },
  titleText: {
    color: "orange",
  },
});
