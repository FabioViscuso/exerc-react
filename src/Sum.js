/* If the prop is omitted, .reduce() won't be a function and the 
    app will break. We can avoid this problem by passing a default value
    for the prop */
function Sum({ numbers = [0, 1, 2] }) {
    return <h1>{numbers.reduce((prevValue, currValue) => prevValue += currValue)}</h1>
}

export default Sum;