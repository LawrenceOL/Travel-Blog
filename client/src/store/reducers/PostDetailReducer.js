const { GET_POST_DETAIL, UPDATE_COMMENTING, UPDATE_NEW_COMMENT } = require('../types')

const initialState = {
    postDetail: {},
    newComment: {},
    commenting: false
}

const PostDetailReducer = (state =initialState, action) => {
    switch (action.type) {
        case GET_POST_DETAIL:
            return {...state, postDetail: action.payload}
        case UPDATE_NEW_COMMENT:
            return {...state, newComment: action.payload }
        default:
            return {...state}
    }
}

export default PostDetailReducer