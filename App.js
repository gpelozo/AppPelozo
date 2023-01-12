import React, {useState} from "react";
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import Modal from "./src/components/Modal";
import AddItem from "./src/components/AddItem";

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

  const handleModal = item => {
    console.log(item)
  setItemSelected(item)
  setModalVisible(true)
  }

  const onHandleDelete = (item) => {
    console.log(item)
    setList(prevState => prevState.filter(element => element === item))
    setModalVisible(!modalVisible)
  }

  const renderItem = ({item}) => (
    <View style={styles.renderItemStyle}>
      <Text>{item}</Text>
      <Button title="edit" onPress={() => handleModal(item)}/>
      <Button/>
    </View>
  )

  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text>Hola, Coder!</Text>
          <AddItem
          onChange={onHandleChangeItem}
          textValue={textItem}
          onAddItem={addItem}
          />
        </View>
        <View style={{flex: 2, backgroundColor: "white" }}>
          <FlatList
          style={styles.listContainer}
          data={list}
          keyExtractor={(item)=> item.id}
          renderItem={renderItem}
          />
          <Text>Created by Gonzalo Ian Pelozo, 2023©.</Text>
        </View>

      <Modal 
      isVisible={modalVisible}
      itemSelected = {itemSelected} 
      actionDeleteItem={() => onHandleDelete(itemSelected)}
      onDismissModal ={() => setModalVisible(false) }/>
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
});
