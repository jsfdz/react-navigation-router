import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { PostList } from './PostList'
import { PostDetails } from './PostDatails'
import { get } from '../services/Api'

export const PostsContainer = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        get().then(response => {
            setPosts(response.data)
        })
    }, [])

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