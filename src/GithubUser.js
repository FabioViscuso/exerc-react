import { useState, useEffect } from "react";

export default function GithubUser({ username }) {
    const [currUser, setUser] = useState(null);
    const [isLoading, setLoading] = useState(false);

    async function fetchUser(username) {
        setLoading(true)
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            console.log(data);
            setUser({ name: data.name, photo: data.avatar_url, bio: data.bio, location: data.location, url: data.html_url });
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
                                <h2>Hello, I'm {currUser.name ? `${currUser.name}, aka ${username}` : username}{currUser.location && `, and I'm from ${currUser.location}`}</h2>
                                {
                                    currUser.bio &&
                                    <div className="userCard__about">
                                        <h3>About Me: </h3>
                                        <p>{currUser.bio}</p>
                                    </div>
                                }
                            </div>
                        </div>
                        <a href={currUser.url} target='_blank' rel="noreferrer">
                            <button className="userCard__button">Go to my GitHub page!</button>
                        </a>
                    </div>
                </div>
                : <h1>We have a problem</h1>}
        </>
    )
}