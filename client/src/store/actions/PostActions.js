import * as services from '../../service/PostService'
import * as types from '../types'


//Load post from server to state
export const LoadPosts = () => {
    return async (dispatch) => {
        try {
            const posts = await services.GetPosts()
            dispatch({
                type: types.GET_POSTS,
                payload: posts
            })            
        } catch (error) {
            throw error
        }
    }
}

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