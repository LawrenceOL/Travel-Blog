import { connect } from 'react-redux'
import { LoadPostDetail } from '../store/actions/PostActions'
import { useEffect } from 'react'
import Comment from '../components/Comment'
import AddComment from '../components/AddComment'
import { useParams } from 'react-router-dom'



const mapStateToProps = ({ postDetailState }) => {
    return { postDetailState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostDetail: (id) => dispatch(LoadPostDetail(id))
    }
}

const HomePage = (props) => { 
    const { id } = useParams()
    useEffect(() => {
        props.fetchPostDetail(id)
    }, [])

    return (
        <div>
            <h2>{props.postDetailState.postDetail.name}</h2>
            <img src={props.postDetailState.postDetail.image} alt='post image' />
            <h5>{props.postDetailState.postDetail.location}</h5>
            <div className='comment-container'>
                {props.postDetailState.postDetail.comments.map((comm) => (
                    <Comment comm={comm} key={comm._id} />
                ))}
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)