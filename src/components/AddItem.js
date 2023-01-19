import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'

const AddItem = ({onChange, textValue, onAddItem}) => {
  return (
    <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Escriba aqui" 
        style={styles.addItemInput} 
        onChangeText={onChange}
        value ={textValue}
        />
        <Button title="Agregar" onPress={onAddItem}/>
      </View>
  )
}

export default AddItem

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "col", 
        justifyContent: "space-between", 
        alignItems: "center",
      },
      addItemInput: {
        borderBottomColor: "orange", 
        borderBottomWidth: 1,
        borderRadius: 15,
        padding: 10,
        width: 200,
        TextColor: "white",
      },
})