import { useMemo } from "react"

export function FilteredList({ adultPeople }) {

    function filterHandler(toFilter) {
        return toFilter.filter(item => item.age > 18)
    }

    const memoList = useMemo(() => filterHandler(adultPeople), [adultPeople])

    return (
        <div>
            <h2>Adult people</h2>
            {
                memoList.map((item, index) =>
                    <ul key={'list n°' + index}>
                        <li>Entry number: {item.id}</li>
                        <li>Name: {item.name}</li>
                        <li>Age: {item.age}</li>
                    </ul>)
            }
        </div>
    )

}