import { useState, useEffect } from "react";

export default function GithubUser({ username }) {
    const [currUser, setUser] = useState(null);
    const [isLoading, setLoading] = useState(false);

    async function fetchUser(username) {
        setLoading(true)
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            if (!data.name || data.name === null) {
                throw new Error('Invalid username');
            } else {
                setUser({ name: data.name, photo: data.avatar_url, bio: data.bio, location: data.location, url: data.html_url });
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
                ? <div className="userCard">
                    <img src={currUser.photo} className="userCard__avatar" alt={`avatar of ${currUser.name}`} />
                    <div className="userCard__text">
                        <div className="userCard__about">
                            <div>
                                <h1>Hello, I'm {currUser.name} {currUser.location && `from ${currUser.location}`}</h1>
                                <a href={currUser.url} target='_blank' rel="noreferrer">
                                    <button className="userCard__button">Go to my GitHub page!</button>
                                </a>
                            </div>
                        </div>
                        {currUser.bio ? <div className="userCard__about">
                            <h2>About Me: </h2>
                            <p>{currUser.bio}</p> </div> : <p>No bio for this user! :(</p>}
                    </div>
                </div>
                : <h1>We have a problem</h1>}
        </>
    )
}