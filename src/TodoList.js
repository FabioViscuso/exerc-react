import React from "react";

class TodoList extends React.Component {
    state = {
        items: []
    }

    addToTodoHandler = (event) => {
        event.preventDefault();
        this.setState({ items: [...this.state.items, event.target.elements.newTodo.value] })
        event.target.reset();
    }

    clearTodos = () => {
        this.setState({ items: [] });
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
                    <button onClick={this.clearTodos}>Clear Todos</button>
                </form>
                <ul>
                    {
                        // eslint-disable-next-line array-callback-return
                        Object.values(this.state.items).map((item, index) => {
                            if (item !== "") {
                                return (<li key={index}>{item}</li>)
                            }
                        })
                    }
                </ul>
            </>
        )
    }
}

export default TodoList;