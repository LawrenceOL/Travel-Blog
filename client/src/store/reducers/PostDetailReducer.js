const { GET_POST_DETAIL, ADD_COMMENT } = require('../types')

const initialState = {
    postDetail: {},

}

const PostDetailReducer = (state =initialState, action) => {
    switch (action.type) {
        case GET_POST_DETAIL:
            return {...state, postDetail: action.payload}
        default:
            return {...state}
    }
}

export default PostDetailReducer