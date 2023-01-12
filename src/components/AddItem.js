import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React from 'react'

const AddItem = ({onChange, textValue, onAddItem}) => {
  return (
    <View style={styles.titleContainer}>
        <TextInput 
        placeholder="Escriba aqui" 
        style={styles.addItemInput} 
        onChangeText={onChange}
        value ={textValue}/>
        <Button title="Agregar" onPress={onAddItem}/>
      </View>
  )
}

export default AddItem

const styles = StyleSheet.create({
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
})