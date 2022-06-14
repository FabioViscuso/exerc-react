function Sum({ numbers }) {
    return <h1>{numbers.reduce((prevValue, currValue) => prevValue += currValue)}</h1>
}

export default Sum;