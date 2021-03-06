import { Link } from 'react-router-dom'

const Post = ({post}) => {

    return (
        <div className='post'>
            <Link to={`/post/${post._id}`} >
                <h2>{post.name}</h2>
            </Link>
            <img src={post.image} alt='post image' />
            <h5>{post.location}</h5>
        </div>
    )
}

export default Post