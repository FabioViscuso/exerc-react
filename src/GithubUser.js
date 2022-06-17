import { useState, useEffect } from "react";

export default function GithubUser({ username }) {
    const [currUser, setUser] = useState(null);
    const [isLoading, setLoading] = useState(false);

    async function fetchUser(username) {
        setLoading(true)
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            if (!data.name && data.name === null) {
                throw new Error('Invalid username');
            } else {
                setUser({ name: data.name, bio: data.bio, location: data.location, url: data.html_url });
            }
        } catch (err) {
            console.log(err.message);
            setUser(null);
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

            {currUser
                ? <>
                    <h1>Hello, I'm {currUser.name} {currUser.location && `from ${currUser.location}`}</h1>
                    {currUser.bio && <>
                        <h2>About Me: </h2>
                        <p>{currUser.bio}</p> </>}
                    <p><a href={currUser.url} target='_blank' rel="noreferrer">Find me here!</a></p>
                </>
                : <h1>We have a problem</h1>}
        </>
    )
}