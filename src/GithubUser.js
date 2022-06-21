import { useGithubUser } from "./utils/useGithubUser"

export default function GithubUser({ username }) {
    const { user, isLoading, error } = useGithubUser(username);

    return (
        <>
            {isLoading && <h1>Loading</h1>}

            {user && <div className="userCard">
                <img src={user.avatar_url} className="userCard__avatar" alt={`avatar of ${user.name}`} />
                <div className="userCard__text">
                    <div className="userCard__about">
                        <div>
                            <h2>Hello, I'm {user.name ? `${user.name}, aka ${username}` : username}{user.location && `, and I'm from ${user.location}`}</h2>
                            {
                                user.bio &&
                                <div className="userCard__about">
                                    <h3>About Me: </h3>
                                    <p>{user.bio}</p>
                                </div>
                            }
                        </div>
                    </div>
                    <a href={user.url} target='_blank' rel="noreferrer">
                        <button className="userCard__button">Go to my GitHub page!</button>
                    </a>
                </div>
            </div>}
            {error && <h1>{error}</h1>}
        </>
    )
}