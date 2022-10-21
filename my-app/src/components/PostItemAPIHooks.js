import React from "react"
import css from "./css/PostItem.module.css";


function PostItemAPIHooks(props) {
    return (
        props.savedPosts.map(post => {
            // Extra task destructuring 
            const { id, type, user, tags, webformatURL } = post
            return <div className={css.SearchItem} key={id}>
                <p>{type}</p>
                <p>{user}</p>
                <img src={webformatURL} alt="random" />
                <p>{tags}</p>
            </div>
        }
        )
    )
}

export default PostItemAPIHooks