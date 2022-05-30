import React from "react";

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false,
    }

    inputChangeHandler = (event) => {
        const value = (event.target.type === "checkbox" ? event.target.checked : event.target.value);
        const name = event.target.name;

        this.setState({
            [name]: value
        })
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        return (
            <form>
                <input name="username"
                    type="text"
                    value={this.state.username}
                    placeholder="username"
                    onChange={this.inputChangeHandler} />
                <input name="password"
                    type="password"
                    value={this.state.password}
                    placeholder="password"
                    onChange={this.inputChangeHandler} />
                <input name="remember"
                    type="checkbox"
                    checked={this.state.remember}
                    onChange={this.inputChangeHandler} />
            </form>
        )
    }
}
export default Login;