import React from 'react';
import './style.css'

const ToDoList = (props) => {
    const {Items, DeletItem} = props;
    let Length = Items.length;
    const ListItems = Length ? (
        Items.map( (Item) => {
        return (
            <div className="content" key={Item.id}>
                <span>{Item.name}</span>
                <span>{Item.age}</span>
                <span onClick={() => DeletItem(Item.id)}>X</span>
            </div>
        )
        } )
    ) : (
        <p>There is No items to show</p>
    )
    return (
        <div className="todoitems">
            <div className="header">
                <span className="name">Name</span>
                <span className="age">Age</span>
                <span className="act">Action</span>
            </div>
            {ListItems}
        </div>
    )
}

export default ToDoList