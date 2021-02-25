import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const PostDetails = ({ posts }) => {

    let { id } = useParams()

    return (
        <div className="post-body">
            { posts[id - 1] ?
                <>
                    <h2>{posts[id - 1].title}</h2>
                    <p>{posts[id - 1].content}</p>
                    <Link to='/'>📑 Back to List</Link>
                </>
                :
                <>
                    <h2>Not Found 404</h2>
                    <Link to='/'>📑 Back to List</Link>
                </>
            }
        </div>
    )

}