import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import uuid from 'uuid';
import TodoList from './components/TodoList';
import CreateTodoModal from './components/CreateTodoModal';
import storageService from './services/storage';
import { CustomText } from './components/common/common';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      createModalVisible: false,
      newTodo: '',
      errorMessage: '',
      loading: true,
    };
  }

  componentWillMount() {
    storageService.get('todos').then((value) => {
      if (value) {
        console.log(value);
        this.setState({ todos: JSON.parse(value), loading: false });
      } else {
        this.setState({ loading: false });
      }
    });
  }

  toggleModal = (visible) => {
    this.setState({ createModalVisible: visible, errorMessage: '', newTodo: '' });
  }


  toggleDone = (key) => {
    const todoArray = this.state.todos;
    todoArray.map((item) => {
      if (item.key === key) {
        item.done = !item.done;
      }
    });
    this.setState({ todos: todoArray, createModalVisible: false });
    storageService.set('todos', JSON.stringify(todoArray));
  }

  handleTodoChange = (text) => {
    this.setState({ newTodo: text });
  }

  createTodo = () => {
    if (this.state.newTodo.length > 0) {
      const todoArray = this.state.todos;
      const todo = {
        key: uuid(),
        todo: this.state.newTodo,
        done: false,
      };
      todoArray.push(todo);
      this.setState({
        todos: todoArray,
        createModalVisible: false,
        newTodo: '',
        errorMessage: '',
      });
      storageService.set('todos', JSON.stringify(todoArray));
    } else {
      this.setState({ errorMessage: 'Your task is empty!' });
    }
  }

  deleteTodo = (key) => {
    let todoArray = this.state.todos;
    todoArray = todoArray.filter(item => item.key !== key);
    this.setState({ todos: todoArray, createModalVisible: false });
    storageService.set('todos', JSON.stringify(todoArray));
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#e67e22" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <CustomText style={styles.heading}>Todos</CustomText>
        <TodoList
          toggleDone={this.toggleDone}
          deleteTodo={this.deleteTodo}
          rootState={this.state}
          todos={this.state.todos}
        />
        <CreateTodoModal
          errorMessage={this.state.errorMessage}
          createModalVisible={this.state.createModalVisible}
          toggleModal={isVisible => this.toggleModal(isVisible)}
          handleTodoChange={todo => this.handleTodoChange(todo)}
          createTodo={this.createTodo}
          newTodo={this.state.newTodo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 10,
    backgroundColor: '#ecf0f1',

  },
  heading: {
    fontSize: 26,
    paddingBottom: 10,
    alignSelf: 'center',
  },
  noTasksText: {
    alignSelf: 'center',
    paddingTop: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
});
