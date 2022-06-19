import { useControlledLogin } from './utils/useControlledLogin'

function Login() {
    const { login, onLogin, onReset, onInputChange } = useControlledLogin()

    const buttonStyle = {
        backgroundColor: (login.password.length <= 8) ? 'red' : 'green'
    }

    return (
        <form onSubmit={onLogin}>
            <input name="username"
                type="text"
                value={login.username}
                placeholder="username"
                onChange={onInputChange} />
            <input name="password"
                type="password"
                value={login.password}
                placeholder="password"
                onChange={onInputChange} />
            <input name="remember"
                type="checkbox"
                checked={login.remember}
                onChange={onInputChange} />
            <button type="submit"
                style={buttonStyle}
                disabled={(login.username === "" || login.password.length < 9 ? true : false)}
            >Login</button>
            <button type='button' onClick={onReset}>Reset</button>
        </form>
    )
}
export default Login;