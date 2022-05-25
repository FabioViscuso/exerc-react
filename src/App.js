let hello = <h1>Hello World</h1>;

function App(a, b) {
    return <h2>{a + b}</h2>;
}

export default App;

/* JSX-03
    Q: What happens if the name variable is not passed to the function?
    A: The App function would not render the "name";
*/

/* JSX-04
    Q: What happens if the name variable contains a JSX expression instead of a string?
    A: It would be rendered as usual;
*/
