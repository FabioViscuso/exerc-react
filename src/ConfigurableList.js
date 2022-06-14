import React from "react";

class TodoList extends React.Component {
    state = {
        itemsList: []
    }

    addToListHandler = (event) => {
        event.preventDefault();
        this.setState({ itemsList: [...this.state.itemsList, event.target.elements[`new${this.props.subject}element`].value] })
        event.target.reset();
        document.querySelector(`#${this.props.subject}listAdder`).disabled = true
    }

    deleteFromListHandler = (event) => {
        const target = Number(event.target.parentElement.attributes.listnumber.value);
        this.setState((state) => {
            return {
                itemsList: state.itemsList.filter((item, index) => index !== target)
            }
        })
    }

    clearListHandler = () => {
        this.setState({ itemsList: [] });
    }

    emptyInputChecker = () => {
        if (document.querySelector(`[name = "new${this.props.subject}element"]`).value === "") {
            document.querySelector(`#${this.props.subject}listAdder`).disabled = true
        } else {
            document.querySelector(`#${this.props.subject}listAdder`).disabled = false
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addToListHandler}>
                    <input type={'text'} name={`new${this.props.subject}element`} onChange={this.emptyInputChecker} placeholder={`Insert new ${this.props.subject} element`} />
                    <button id={`${this.props.subject}listAdder`} type="submit" disabled>Add to {this.props.subject} list</button>
                    <button onClick={this.clearListHandler}>Clear {this.props.subject} list</button>
                </form>

                {this.props.render(this.state.itemsList, this.deleteFromListHandler)}
            </div>
        )
    }
}

export default TodoList;