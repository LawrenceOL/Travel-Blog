

const Comment = ({comm}) => {

    return (
        <div>
            <h5>{comm.name}</h5>
            <p>{comm.comment}</p>
        </div>
    )
}

export default Comment