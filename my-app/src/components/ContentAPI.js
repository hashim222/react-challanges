import axios from "axios";
import React, { Component } from "react";
import css from "./css/Content.module.css";
import PostItemAPI from "./PostItemAPI";
import Loader from "./Loader";
import API_KEY from "../secrets";

export class ContentAPI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts: [],
            savedPosts: []
        }
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         isLoaded: true,
        //         posts: savedPosts
        //     })
        // }, 500);
        // axios.get(`https://pixabay.com/api/?key=${API_KEY}`)
        //     .then(response => console.log(response.data))
        this.fetchImages()
    }


    fetchImages = async () => {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}`)
        console.log(response);
        const fetchedPosts = response.data.hits
        this.setState({
            isLoaded: true,
            posts: fetchedPosts,
            savedPosts: fetchedPosts
        })
    }

    handleSearchBar = (event) => {
        let textInput = event.target.value.toLowerCase()

        let filteredPosts = this.state.savedPosts.filter((post) => {
            return post.user.toLowerCase().includes(textInput)
        })

        this.setState({
            posts: filteredPosts,
        })
    }

    render() {
        return (
            <div className={css.Content}>

                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor="searchInput">Search:</label>
                        <input type="search" id="searchInput" placeholder="by author" onChange={this.handleSearchBar} />
                        <h4>Posts Found: {this.state.posts.length}</h4>
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
                        this.state.isLoaded === true ? <PostItemAPI savedPosts={this.state.posts} /> : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default ContentAPI