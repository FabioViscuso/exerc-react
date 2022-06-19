import { useState } from "react";

export function useGithubUser(username) {
    const [currUser, setUser] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchUser() {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (response.status !== 200) {
                throw new Error('Connection problem or invalid username')
            }
            const data = await response.json();
            setUser({ name: data.name, photo: data.avatar_url, bio: data.bio, location: data.location, url: data.html_url });
        } catch (err) {
            console.log(err.message);
            setUser(null);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return {
        currUser: currUser,
        isLoading: isLoading,
        error: error,
        onFetch: fetchUser
    }
}