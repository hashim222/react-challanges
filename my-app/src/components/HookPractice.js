import React, { useState } from 'react'
// import { savedPosts } from "../posts.json";
// import { v4 as uuidv4 } from 'uuid';


export default function HookPractice() {

    const [login, setLogin] = useState('Login')
    const [logout, setLogout] = useState('Logout')
    const [isItTrueOrFalse, setIsItTrueOrFalse] = useState(true)

    const handleClick = () => {
        setLogin(login)
        setLogout(logout)
        setIsItTrueOrFalse((isItTrueOrFalse => {
            return isItTrueOrFalse === true ? false : true
        }))

    }

    return (
        <div>
            {
                isItTrueOrFalse === true ? (
                    <div>
                        <form>
                            <label htmlFor="name">Name:</label>
                            <br />
                            <input type="text" name='name' id='name' />
                            <label htmlFor="password">Password:</label>
                            <input type="password" name='password' id='password' />
                        </form>
                        <button onClick={handleClick}>{login}</button>
                    </div>
                ) : (
                    <button onClick={handleClick}>{logout}</button>
                )
            }
        </div>
    )
}
