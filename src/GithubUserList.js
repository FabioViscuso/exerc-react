import { useEffect } from "react";
import { useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUserList() {
    const [users, setUsers] = useState([])

    /* Initialize the component with the contents of local storage */
    useEffect(() => {
        if (localStorage.getItem('GithubUserList')) {
            setUsers(users => users = JSON.parse(localStorage.getItem('GithubUserList')))
        }
    }, [])

    /* This function will use a fetch, better declare as async */
    async function addUserHandler(event) {
        event.preventDefault();
        setUsers([...users, event.target.addUserInput.value])
        setTimeout(() => {
            localStorage.setItem('GithubUserList', JSON.stringify([...users, event.target.addUserInput.value]))
            event.target.reset()
        }, 500)
    }

    function removeUserHandler(event) {
        const userToRemove = Number(event.target.parentElement.attributes.githubusernumber.value)
        setUsers(users.filter((user, index) => index !== userToRemove))
        setTimeout(() => {
            localStorage.setItem('GithubUserList', JSON.stringify(users.filter((user, index) => index !== userToRemove)))
        }, 100)
    }

    function refreshListHandler() {
        setUsers(users => users = [])
        setTimeout(() => {
            localStorage.setItem('GithubUserList', JSON.stringify([]))
        }, 100)
    }

    return (
        <>
            <form onSubmit={addUserHandler}>
                <input type="text" name="addUserInput" placeholder="Search by username" />
                <button type="submit">Fetch and add to list</button>
                <button type="button" onClick={refreshListHandler}>Reset</button>
            </form>
            {
                users.map((user, index) => {
                    return (
                        <div className="userCardWrapper" githubusernumber={index} key={'githubListUser' + index}>
                            <GithubUser username={user} />
                            <button className="deleteFromListBtn" onClick={removeUserHandler}>X</button>
                        </div>
                    )
                })
            }
        </>
    )
}