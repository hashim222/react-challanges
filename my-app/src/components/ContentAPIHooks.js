import React, { useEffect, useState } from "react";
import css from "./css/Content.module.css";
import PostItemAPIHooks from "./PostItemAPIHooks";
import Loader from "./Loader";
import API_KEY from "../secrets";
import axios from "axios";

function ContentAPIHooks() {

    const [isLoaded, setLoaded] = useState(false)
    const [posts, setPosts] = useState([])
    const [savedPost, setSavedPost] = useState([])

    useEffect(() => {
        fetchImages()
    }, [])

    const fetchImages = async () => {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}`)
        const fetchedPosts = response.data.hits
        setLoaded(true)
        setPosts(fetchedPosts)
        setSavedPost(fetchedPosts)
    }

    const handleSearchBar = (event) => {
        const textInput = event.target.value.toLowerCase()
        const filterPosts = savedPost.filter(posts => {
            return posts.user.toLowerCase().includes(textInput)
        })           
        setPosts(filterPosts)
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
                    isLoaded === true ? <PostItemAPIHooks savedPosts={posts} /> : <Loader />
                }
            </div>
        </div>
    )
}

export default ContentAPIHooks
