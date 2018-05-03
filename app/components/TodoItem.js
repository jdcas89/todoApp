import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Badge } from 'react-native-elements';
import { CustomText } from './common/common';

const checkIcon = <Icon name="check" size={20} color="#2ecc71" />;
const circleIcon = <Icon name="circle-o" size={20} color="#e67e22" />;
const trashIcon = <Icon name="trash" size={20} color="#c0392b" />;

export default TodoItem = props => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <CustomText>{props.todo}</CustomText>
      
    </View>
    <View style={styles.buttonList}>
      <Badge containerStyle={styles.badgetStyle} onPress={() => props.doneHandler()}>
        <CustomText>{props.done ? checkIcon : circleIcon}</CustomText>
      </Badge>

      <Badge containerStyle={styles.badgetStyle} onPress={() => props.deleteHandler()}>
        <CustomText>{trashIcon}</CustomText>
      </Badge>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#95a5a650',
  },
  textContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  badgetStyle: {
    backgroundColor: 'transparent',
  },
});