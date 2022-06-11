import React from "react";

class TodoList extends React.Component {
    state = {
        todos: []
    }

    addToTodoHandler = (event) => {
        event.preventDefault();
        this.setState({ todos: [...this.state.todos, event.target.elements.newTodo.value] });
        event.target.reset();
        document.querySelector('#todoAdder').disabled = true;
    }

    deleteTodoHandler = (event) => {
        const listNumber = Number(event.target.parentElement.attributes.todonumber.value);
        this.setState((state) => {
            return {
                todos: state.todos.filter((item, index) => {
                    return index !== listNumber
                })
            }
        })
    }

    clearTodosHandler = () => {
        this.setState({ todos: [] });
    }

    emptyInputChecker = () => {
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
                    <input type={'text'} name={'newTodo'} onChange={this.emptyInputChecker} />
                    <button id="todoAdder" type="submit" disabled>Add to Todo</button>
                    <button onClick={this.clearTodosHandler}>Clear Todos</button>
                </form>
                <ul>
                    {
                        // eslint-disable-next-line array-callback-return
                        this.state.todos.map((item, index) => {
                            if (item !== "") {
                                return (
                                    <li todonumber={index} key={'list' + index}>{item}&nbsp;
                                        <button key={'btn' + index} onClick={this.deleteTodoHandler}>Delete</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </>
        )
    }
}

export default TodoList;