import { StyleSheet, Text, View, Button, Modal as NewModal } from 'react-native';
import React from 'react';

const Modal = ({isVisible, actionDeleteItem, itemSelected, onDismissModal,}) => {
  return (
    <NewModal animationType="fade" transparent={true} visible={isVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalStyle}>
            <Text style={styles.modalTextStyle}>{itemSelected}</Text>
            <Button title="Delete" onPress={() => actionDeleteItem()}/>
            <Button title="Dismiss" onPress={() => onDismissModal(false)}/>
          </View>
        </View>
      </NewModal>
  )
}

export default Modal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },

    modalStyle: {
      marginBottom: 190,
        backgroundColor: "red",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        margin: 20,
        shadowColor:"#000",
        shadowOpacity: 0.3,
        shadowOffset:{width: 0, height: 2},
        shadowRadius: 4,
        elevation: 5,
        width: "80%",
      },
    
      modalTextStyle: {
        fontSize: 30,
        color: "white"
      },
})