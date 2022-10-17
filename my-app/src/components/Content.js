import React, { Component } from "react";
import css from "./css/Content.module.css";
import { savedPosts } from "../posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts: []
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoaded: true,
                posts: savedPosts
            })
        }, 500);
    }


    handleSearchBar = (event) => {
        let textInput = event.target.value.toLowerCase()
        let filteredPosts = savedPosts.filter((post) => {
            return post.name.includes(textInput)
        })
        this.setState({
            posts: filteredPosts 
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
                        this.state.isLoaded === true ? <PostItem savedPosts={this.state.posts} /> : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default Content