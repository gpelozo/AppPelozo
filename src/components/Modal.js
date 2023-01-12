import { StyleSheet, Text, View, Button, Modal as NewModal } from 'react-native';
import React from 'react';

const Modal = ({isVisible, actionDeleteItem, itemSelected, onDismissModal}) => {
  return (
    <NewModal animationType="fade" transparent={true} visible={isVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalStyle}>
          <Text style={styles.modalTextStyle}>{itemSelected}</Text>
          <Button title="Delete" onPress={() => actionDeleteItem()}/>
          <Button title="Dismiss" onPress={() => onDismissModal()}/>
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
        height: 60,
        flexDirection: "row",
        marginTop: 500,
        backgroundColor: "red",
        borderRadius: 10,
        padding: 40,
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        shadowColor:"black",
        shadowOpacity: 0.3,
        shadowOffset:{width: 0, height: 1},
        shadowRadius: 2,
        elevation: 3,
      },
    
      modalTextStyle: {
        fontSize: 30,
      },
})