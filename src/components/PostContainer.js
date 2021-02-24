import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { PostList } from './PostList'
import { PostDetails } from './PostDatails'

export const PostsContainer = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        await fetch('https://bender-blog.herokuapp.com/posts')
            .then(response => response.ok ? response.json() : Promise.reject(response))
            .then(data => setPosts(data))
    }

    return (
        <Router>
            <Switch>
                <Route
                    path="/"
                    render={() => <PostList posts={posts} />}
                    exact
                />
                <Route
                    path="/:id"
                    render={() => <PostDetails posts={posts} />}
                />
            </Switch>
        </Router>
    )
}