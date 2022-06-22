import useSWR from "swr";
const fetcher = (url) => fetch(url).then((response) => response.json())

export function useGithubUser(username) {
    const isUsernameInvalid = !username ? true : false;
    const { data, error, mutate } = useSWR(
        isUsernameInvalid ? null : `https://api.github.com/users/${username}`
        , fetcher
    )

    function refetchHandler() {
        mutate()
    }

    return {
        user: data,
        error,
        isLoading: !data && !error && !isUsernameInvalid,
        isUsernameInvalid,
        onRefetch: refetchHandler
    }
}