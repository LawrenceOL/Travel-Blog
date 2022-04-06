import { connect } from 'react-redux'
import { LoadPostDetail, UploadComment } from '../store/actions/PostDetailActions'
import { useEffect, useState } from 'react'
import Comment from '../components/Comment'
import AddComment from '../components/AddComment'
import { useParams } from 'react-router-dom'



const mapStateToProps = ({ postDetailState }) => {
    return { postDetailState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostDetail: (id) => dispatch(LoadPostDetail(id)),
        uploadComment: (id, comment) => UploadComment(id, comment)
    }
}



const HomePage = (props) => { 
    const { id } = useParams()

    const [addedComm, setAddedComm] = useState(true)
    const [comment, setComment] = useState('')

    useEffect(() => {
        props.fetchPostDetail(id)
    }, [])

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await props.uploadComment(id, comment)
        .then((res) => {
            console.log(res)
            setAddedComm(!addedComm)
        })
    }
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
            {/* {addedComm && <AddComment 
                            handleSubmit={handleSubmit}
                            comment={comment}
                            setComment={setComment}
                             />} */}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)