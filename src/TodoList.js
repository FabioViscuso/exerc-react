import React from "react";

class TodoList extends React.Component {
    state = {
        items: []
    }

    addToTodoHandler = (event) => {
        event.preventDefault();
        this.setState({ items: [...this.state.items, event.target.elements.newTodo.value] })
        event.target.reset();
        document.querySelector('#todoAdder').disabled = true
    }

    deleteTodoHandler = (event) => {
        const target = event.target.previousSibling.innerText;
        this.setState((state) => {
            return { items: state.items.filter((item) => item !== target) }
        })
    }

    clearTodosHandler = () => {
        this.setState({ items: [] });
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
                        Object.values(this.state.items).map((item, index) => {
                            if (item !== "") {
                                return (<>
                                    <li id={'todonumber' + index} key={index}>{item}</li>
                                    <button onClick={this.deleteTodoHandler}>&nbsp; Delete</button>
                                </>)
                            }
                        })
                    }
                </ul>
            </>
        )
    }
}

export default TodoList;