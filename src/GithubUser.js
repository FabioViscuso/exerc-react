import { useState, useEffect } from "react";

export default function GithubUser({ username }) {
    const [currUser, setUser] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    async function fetchUser(username) {
        setLoading(true)
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            console.log(data)
            if (!data.name && data.name === null) {
                throw new Error('Invalid username');
            } else {
                setUser({name: data.name, bio: data.bio, location: data.location, url: data.html_url});
            }
        } catch (err) {
            console.log(err.message);
            setUser(null);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser(username);
    }, [username])

    return (
        <>
            {isLoading && <h1>Loading</h1>}

            <h1>Hello, I'm {currUser.name} from {currUser.location}</h1>
            <h2>About Me: </h2>
            <p>{currUser.bio}</p>
            <p><a href={currUser.url} target='_blank' rel="noreferrer">Find me here!</a></p>
        </>
    )
}