let hello = <h1>Hello World</h1>;

function App(name) {
    return <h1>Hello {name}</h1>;
}

export default App;

/* JSX-03
    Q: What happens if the name variable is not passed to the function?
    A: The App function would not render the "name";
*/
