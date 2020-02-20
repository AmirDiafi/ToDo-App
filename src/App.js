import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
import ToDoAdd from './ToDoAdd';

class App extends React.Component {
  state = {
    Items : [
    {"id": 1, "name": "Amir", "age": 23},
    {"id": 2, "name": "Sami", "age": 25},
    {"id": 3, "name": "Zayn", "age": 29},
    ]
  } 
  deletItem = (id) => {
        // let {Items} = this.state;
        // let i = Items.findIndex(Item => Item.id === id) The First Track
        // Items.splice(i,1)
        // this.setState({Items})

        let Items = this.state.Items.filter(Item => {
          return Item.id !== id 
        });
        this.setState({Items});
      }
      additem = (Newitem) => {
        Newitem.id = Math.random() * 10; 
        let {Items} = this.state;
        Items.push(Newitem);
        this.setState({Items})
      }
    render() {
      return (
      <div className="App container">
        <h1>ToDo List App</h1>
        <header>
          <ToDoList Items={this.state.Items} DeletItem={this.deletItem}/>
          <ToDoAdd additem={this.additem} />
        </header>
      </div>
    );
  }
}

export default App;
