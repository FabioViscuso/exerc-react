import { useState } from "react";

export function useGithubUser(username) {
    const [currUser, setUser] = useState(null);
    const [isLoading, setLoading] = useState(false);

    async function fetchUser() {
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

    return {
        currUser: currUser,
        isLoading: isLoading,
        onFetch: fetchUser
    }
}