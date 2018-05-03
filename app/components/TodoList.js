import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { CustomText } from './common/common';
import TodoItem from './TodoItem';


export default TodoList = props => (
  <View style={styles.listContainer}>
    { props.todos.length === 0 &&
    <CustomText style={styles.noTasksText}>You have no tasks!</CustomText>
    }
    <FlatList
      data={props.todos}
      extraData={props.rootState}
      renderItem={({ item }) => (
        <TodoItem
          key={item.key}
          todo={item.todo}
          done={item.done}
          doneHandler={() => props.toggleDone(item.key)}
          deleteHandler={() => props.deleteTodo(item.key)}
        />
      )}
    />
  </View>
);


const styles = StyleSheet.create({
  listContainer: {
    flex: 5,
    borderTopWidth: 1,
    borderColor: '#95a5a650',
  },
  noTasksText: {
    alignSelf: 'center',
    paddingTop: 10,
  },
});
