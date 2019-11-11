import React, { useState } from 'react'
import { View } from 'react-native'
import {
  Provider,
  Appbar,
  TextInput,
  Button,
  List
} from 'react-native-paper'


export default function App() {

  [state, setState] = useState({
    todos: [
      {
        title: 'Makan Siang',
        is_done: false
      }
    ],
    title: ''
  })

  function addTodos() {
    const todo = {
      title: state.title,
      is_done: true
    }
    setState({
      todos: [...state.todos, todo],
      title: ''
    })
  }

  function onChangeText(text) {
    setState({
      ...state,
      title: text
    })
  }


  return (
    <Provider>
      <Appbar >
        <Appbar.Content title="Todo App" />
      </Appbar>
      <View style={styles.container}>
        <TextInput
          label="Type your task.."
          value={state.title}
          onChangeText={text => onChangeText(text)}
        />
        <Button mode='contained' onPress={() => addTodos()}>Tambah</Button>
      </View>

      {
        state.todos && state.todos.map((todo, index) => {
          return (
            <List.Item
              key={index}
              title={todo.title}
              right={props => <List.Icon {...props} icon="star" color={todo.is_done ? 'blue' : 'black' } />}
            />
          )
        })
      }

    </Provider>
  )
}

const styles = {
  container: {
    padding: 10
  }
}