

const Comment = ({comm}) => {

    return (
        <div>
            <h5>{comm.rating}</h5>
            <p>{comm.comment}</p>
        </div>
    )
}

export default Comment