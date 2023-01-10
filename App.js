import React, {useState} from "react"
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Button, FlatList, TouchableOpacity, Modal} from 'react-native';

export default function App() {
  const [textItem, setTextItem ] = useState('')

  const [list, setList ] = useState([])

  const [itemSelected, setItemSelected] = useState("")

  const [modalVisible, setModalVisible] = useState(false)

  const onHandleChangeItem = text => {
    setTextItem(text)
  }

  const addItem = () => {
    setList(prevState => [...prevState, textItem])
    setTextItem("")
  }

  const renderItem = ({item}) => (
    <View style={styles.renderItemStyle}>
      <Text>{item}</Text>
      <Button title="edit" onPress={() => setModalVisible(true)}/>
    </View>
  )

  /* const deleteItem = () => {
    filter.map(item)
  }

      <Button title="Borrar" onPress={deleteItem}/>
  */
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Hola, Coder!</Text>
        <TextInput placeholder="Escriba aqui" 
                  style={styles.addItemInput} 
                  onChangeText={onHandleChangeItem}
                  value ={textItem}/>
        <Button title="Agregar" onPress={addItem}/>
      </View>
      <View style={{flex: 2, backgroundColor: "white" }}>
          {list.map(item => (
           <View>
            <Text>{item}</Text>
          </View>
          ))}
          <Text>Created by Gonzalo Ian Pelozo, 2023©.</Text>
          <FlatList
          style={styles.listContainer}
          data={list}
          keyExtractor={(item)=> item.id}
          renderItem={renderItem}
          />
      </View>
      <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}>
        <View style={styles.modalStyle}>
          <Text>{itemSelected}</Text>
          <Button color="#ffffff" title="Delete" onPress={() => console.log("borrar elemento")}/>
        </View>
      </Modal>
    </View>
  )
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
    TextColor: "white",
  },
  titleText: {
    color: "orange",
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 40,
    padding: 3,
  },
  renderItemStyle: {
    height: 60,
    flexDirection: "row",
    marginBottom: 25,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor:"black",
    shadowOpacity: 0.3,
    shadowOffset:{width: 0, height: 1},
    shadowRadius: 2,
    elevation: 3,
  },
  modalStyle: {
    height: 60,
    flexDirection: "row",
    marginTop: 500,
    backgroundColor: "red",
    borderRadius: 10,
    padding:10,
    justifyContent: "center",
    alignItems: "center",
    margin: 60,
    shadowColor:"black",
    shadowOpacity: 0.3,
    shadowOffset:{width: 0, height: 1},
    shadowRadius: 2,
    elevation: 3,
  },
  button: {
    color: "white",
  },
});
