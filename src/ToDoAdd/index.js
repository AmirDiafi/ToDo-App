import React from 'react';
import './style.css'
class ToDoAdd extends React.Component {
    state = [
        {
            "name": "",
            "age": ""
        } 
     ]
     handleItem = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    resetItems = (e) => {
        e.preventDefault();
        if(e.target.name.value === "") {
            return false
        } else {
            this.props.additem(this.state);
            this.setState({
                "name": "",
                "age": ""
            })
        }
    }
    render() {
        return (
            <form onSubmit={this.resetItems}>
                <input type='text' placeholder='Your name here ex: Aissa' id='name' onChange={this.handleItem} value={this.state.name} />
                <input type='number' placeholder='Your age here (Optional)' id='age' onChange={this.handleItem} value={this.state.age} />
                <input type='submit' value="Add" />
            </form>
        )
    }
}

export default ToDoAdd