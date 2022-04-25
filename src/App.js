import React, {Component} from 'react';
import './App.css';
import Todo from "./components/Todo";



class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>My Todos</h1>
                <Todo text = "Zrobić apke w reactcie"/>
                <Todo text="zamówić karme kotu"/>
                <Todo text="Zrobic taski z django"/>
                <Todo text="Poczytac o DL"/>


            </div>
        );
    }
}

export default App;
