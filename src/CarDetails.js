import { useEffect } from "react"
import { useRef } from "react"
export function CarDetails({ initialData }) {
    const modelRef = useRef()
    const yearRef = useRef()
    const colorRef = useRef()

    function formSubmitHandler(event) {
        event.preventDefault()
        console.table('model ' + modelRef.current.value,
            'year ' + yearRef.current.value,
            'color ' + colorRef.current.value)
        event.target.reset()
    }

    /* This way, the form's default values will immediately 
        reflect initiaData's values */
    useEffect(() => {
        modelRef.current.value = initialData.model;
        yearRef.current.value = initialData.year;
        colorRef.current.value = initialData.color;
    }, [initialData])

    return (
        <>
            <form onSubmit={formSubmitHandler}>
                <input ref={modelRef} defaultValue={initialData.model} type="text" placeholder="model" />
                <input ref={yearRef} defaultValue={initialData.year} type="year" min={1992} max={2022} step={1} placeholder="year" />
                <input ref={colorRef} defaultValue={initialData.color} type="color" placeholder="color" />
                <button>Submit</button>
            </form>
        </>
    )
}