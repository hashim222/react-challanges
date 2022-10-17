import React, { useEffect, useState } from "react";
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

function ContentHooks() {

    const [isLoaded, setLoaded] = useState(true)
    const [posts, setFetchedPosts] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
            setFetchedPosts(savedPosts)
        }, 2000);
    }, [])


    const handleSearchBar = (e) => {
        const inputName = e.target.value.toLowerCase()
        const filterName = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(inputName)
        })
        setFetchedPosts(filterName)
    }

    return (
        <div className={css.Content}>

            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor="searchInput">Search:</label>
                    <input type="search" id="searchInput" placeholder="by author" onChange={handleSearchBar} />
                    <h4>Posts Found: {posts.length}</h4>
                </form>
            </div>

            <div className={css.SearchResults}>
                {/* Part 1: Creating the map function */}

                {/* {
                savedPosts.map((post)=>{
                        return <div className={css.SearchItem} key={post.title}>
                            <p>{post.title}</p>
                            <p>{post.name}</p>
                            <img src={post.image} alt="random"/>
                            <p>{post.description}</p>
                            </div>
                    })
                } */}


                {/* Part 2: Creating a child component */}

                {
                    isLoaded === true ? <PostItem savedPosts={posts} /> : <Loader />
                }
            </div>
        </div>
    )
}

export default ContentHooks
