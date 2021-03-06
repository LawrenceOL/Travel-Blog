import { connect } from 'react-redux'
import { LoadPosts } from '../store/actions/PostActions'
import { useEffect } from 'react'
import Post from '../components/Post'



const mapStateToProps = ({ postState }) => {
    return { postState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(LoadPosts())
    }
}

const HomePage = (props) => { 
    
    useEffect(() => {
        props.fetchPosts()
    }, [])
    
    
    return (
        <div className='home'>
            {props.postState.posts.map((post) => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)