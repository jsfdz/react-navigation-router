import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

export const PostList = ({ posts }) => {

    let { url } = useRouteMatch()

    return (
        <div className="post-list">
            {posts.map(post => {
                return (
                    <div key={post.id} className="post-item">
                        <h2>
                            <Link to={`${url}${post.id}`}>
                                📄 {post.title} ✍🏻
                            </Link>
                        </h2>
                        <p>Published by 🤖 <strong>{post.author}</strong> on {post.publishedAt} 📌</p>
                    </div>
                )
            })
            }
        </div>
    )
}