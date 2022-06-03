import React from "react";

class TodoList extends React.Component {
    state = {
        items: []
    }

    addToTodoHandler = (event) => {
        event.preventDefault();
        this.setState({ items: [...this.state.items, event.target.elements.newTodo.value] })
    }

    checker = () => {
        if (document.querySelector('input[name="newTodo"]').value === "") {
            document.querySelector('#todoAdder').disabled = true
        } else {
            document.querySelector('#todoAdder').disabled = false
        }
    }

    render() {
        return (
            <>
                <form onSubmit={this.addToTodoHandler}>
                    <input type={'text'} name={'newTodo'} onChange={this.checker} />
                    <button id="todoAdder" type="submit" disabled>Add to Todo</button>
                </form>
                <ul>
                    {Object.values(this.state.items).map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </>
        )
    }
}

export default TodoList;