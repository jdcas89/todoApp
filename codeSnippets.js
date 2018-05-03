import React from 'react'

/**
 * React Node creation
 */
var reactNode = React.createElement('p', null, 'Creating a React Node')


/**
 * Without JSX
 */


var liElement0 = React.createElement('li', { id: 'li0' }, 'zero');
var liElement1 = React.createElement('li', { id: 'li1' }, 'one');
var ul = React.createElement('ul', { id: 'ul' }, liElement0, liElement1);
ReactDOM.render(ul, document.getElementById('container'));

// TODO : 

/**
 * With JSX
 * 
 */


const JSX = function () {
    return (
        <ul>
            <li>zero</li>
            <li>one</li>
        </ul>
    )
}

ReactDOM.render(<JSX />, document.getElementById('container'));


const ReactComponent = () => {
    <div className="container-fluid">
        <h1 className="heading">Styled React Component</h1>
        <p className="lead">Paragraphs with style</p>
    </div>
}

/**
 * Minimal React Application
 */


import React from 'react';
import { render } from 'react-dom';
const library = 'React';
const jsxElement = () => {
    <div>
        <h1>React Nodes in action</h1>
        <p>This is JSX. Made with {library}</p>
    </div>
}
render(<jsxElement />, document.getElementById('root'))

/**
*  Example 1: Stateless component
*  Usage : <StatelessComponent />
*/

const StatelessComponent = () => (
    <div>
        <p>Component without any state </p>
    </div>
);

/**
*  Example 2: Stateless component with props
*  Usage : 
*/

const StatelessComponentWithProps = (props) => (
    <div>
        <p>Component without any state, but with props {props.value} </p>
    </div>
);

<StatelessComponentWithProps value="this is a value in a prop" />

/**
*  Example 3: React class component with state
*  Usage : <ReactClassComponent />
*/

class ReactClassComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            stateValue: "test"
        };
    }

    render() {
        return (
            <div>
                <p> React Class component with state</p>
                <p>
                    <strong>State value = </strong>
                    {this.state.stateValue}
                </p>
            </div>
        );
    }
}






import React from 'react';

class LightBulb extends React.Component {
    constructor() {
        super();
        this.state = {
            on: false
        }
    }

    switch(boolean) {
        this.setState({ on: !this.state.on })
    }

    render() {
        return (
            <div>
                <p>{this.state.on ? 'Light bulb is on' : 'Light bulb is off'}</p>
                <button onClick={() => this.switch()}>Switch</button>
            </div>
        )
    }
}


import React from 'react';
import { View, Text, Button } from 'react-native';
import CreateTodoModal from './app/components/CreateTodoModal';




class LightBulb extends React.Component {
    constructor() {
        super();
        this.state = {
            on: false
        }
    }

    switch(boolean) {
        this.setState({ on: !this.state.on })
    }

    render() {
        return (
            <View>
                <Text>{this.state.on ? 'Light bulb is on' : 'Light bulb is off'}</Text>
                <Button title="switch" onPress={() => this.switch()} />
            </View>
        )
    }
}






export default class App extends component {
    render(){
        return(
            <View>
                <Text>Todos</Text>
                <TodoList />
                <CreateTodoModal />
            </View>
        )
    }
}



// -> Modal component 
toggleModal = () => { }
createTodo = (todoText) => { }

//  -> TodoList -> TodoItem component
deleteTodo = (key) => { }
toggleDone = (key) => { }



