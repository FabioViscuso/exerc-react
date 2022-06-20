import { useGithubUser } from "./utils/useGithubUser"
import { useParams } from 'react-router-dom'
import { useEffect } from "react";

export function GithubUserFromLink() {
    const { currUser, isLoading, error, onFetch } = useGithubUser()
    const { username } = useParams()
    useEffect(() => {
        onFetch(username)
    }, [])
    return (
        <>
            {isLoading && <h1>Loading</h1>}

            {currUser && <div className="userCard">
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
            </div>}
            {error && <h1>{error}</h1>}
        </>
    )
}