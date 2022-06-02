import React from "react";

class UncontrolledLogin extends React.Component {

    _formRef = React.createRef();

    formSubmitHandler = (event) => {
        event.preventDefault();

        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const remember = event.target.elements.remember.checked;

        console.log({ 'username': username, 'password': password, 'remember': remember })
    }

    checker = () => {
        console.log(document.querySelector('input[name="username"]').value)
        console.log(document.querySelector('input[name="password"]').value)

        if (document.querySelector('input[name="username"]').value === "" ||
            document.querySelector('input[name="password"]').value === "") {
            document.querySelector('button[type="submit"]').disabled = true
        } else {
            document.querySelector('button[type="submit"]').disabled = false
        }
    }

    componentDidMount() {
        this._formRef.current.username.focus()
    }

    render() {
        return (
            <form ref={this._formRef} onSubmit={this.formSubmitHandler}>
                <input name="username"
                    type="text"
                    placeholder="username"
                    /* Alternatively, just add "autofocus" as an attribute */
                    onChange={this.checker} />
                <input name="password"
                    type="password"
                    placeholder="password"
                    onChange={this.checker} />
                <input name="remember"
                    type="checkbox" />
                <button type="submit"
                    disabled={true}
                >Login</button>
                <button type="reset">Reset</button>
            </form>
        )
    }
}

export default UncontrolledLogin