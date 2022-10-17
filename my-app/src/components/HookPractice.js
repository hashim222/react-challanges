import React, { useState } from 'react'
// import { savedPosts } from "../posts.json";
// import { v4 as uuidv4 } from 'uuid';


export default function HookPractice() {

    const [isTrue, setIsTrueOrFalse] = useState(false)
    const [login, setLogin] = useState('Login')
    const [logout, setLogout] = useState('Logout')


    const checkLogin = () => {
        setLogin(login)
        setLogout(logout)
        setIsTrueOrFalse((isTrue => {
            return isTrue === true ? false : true
        }))
    }

    return (
        <div>
            {
                isTrue === true ? (
                    <div>
                        <ul>
                            <li>one</li>
                            <li>two</li>
                            <li>three</li>
                        </ul>
                        <button onClick={checkLogin}>{logout}</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={checkLogin}>{login}</button>
                    </div>
                )
            }
        </div>
    )
}
