

const Comment = ({rating, comment}) => {

    return (
        <div>
            <h5>{rating}</h5>
            <p>{comment}</p>
        </div>
    )
}

export default Comment