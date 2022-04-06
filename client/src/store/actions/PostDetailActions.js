import * as services from '../../service/PostService'
import * as types from '../types'

//Load detail of a post from server to state
export const LoadPostDetail = (id) => {
    return async (dispatch) => {
        try {
            const postDetail = await services.GetPostDetail(id)
            dispatch({
                type: types.GET_POST_DETAIL,
                payload: postDetail
            })            
        } catch (error) {
            throw error
        }
    }
}

//Add a comment to database
export const UploadComment = (id) => {
    return async () => {
        try {
            await services.GetPostDetail(id)
        } catch (error) {
            throw error
        }
    }
}