import React from 'react';
import { StyleSheet, View, Modal, TextInput } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { CustomText } from './common/common';

export default CreateTodoModal = props => (
  <View style={styles.modalContainer}>
    <Modal
      animationType="slide"
      transparent
      onRequestClose={() => console.log('modal closed')}
      visible={props.createModalVisible}
    >
      <View style={styles.ModalContentContainer}>
        <View>
          <CustomText style={styles.heading}>Add new Todo</CustomText>
          <TextInput
            autoFocus
            style={styles.input}
            onSubmitEditing={props.createTodo}
            onChangeText={text => props.handleTodoChange(text)}
            value={props.newTodo}
          />
          { <CustomText style={{ color: 'red' }}>{props.errorMessage}</CustomText> }
          <View style={styles.buttonList}>

            <Button
              onPress={props.createTodo}
              title="Add todo"
              fontFamily="Kalam"
              fontWeight="700"
              buttonStyle={[styles.buttonStyle, { backgroundColor: '#3498db' }]}
              containerStyle={{ paddingTop: 5, paddingBottom: 5 }}
            />
            <Button
              onPress={() => props.toggleModal(!props.createModalVisible)}
              title="Cancel"
              fontFamily="Kalam"
              fontWeight="700"
              buttonStyle={[styles.buttonStyle, { backgroundColor: '#e74c3c' }]}
              containerStyle={{ paddingTop: 5, paddingBottom: 5 }}
            />
          </View>
        </View>
      </View>
    </Modal>
    <Icon
      raised
      name="plus"
      size={19}
      type="font-awesome"
      color="#3498db"
      onPress={() => props.toggleModal(true)}
    />

  </View>
);

const styles = StyleSheet.create({
  ModalContentContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 30,
    paddingLeft: 10,
    backgroundColor: '#ecf0f1',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonStyle: {
    width: 150,
    height: 45,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 0,
  },
  buttonList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  heading: {
    fontSize: 18,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderColor: '#95a5a650',
    borderWidth: 1,
    fontFamily: 'Kalam',
  },
});
