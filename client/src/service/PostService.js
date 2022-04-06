import Client from ".";

export const GetPosts = async () => {
    try {
        const response = await Client.get(`posts`)
        console.log(response, "RESPONSE")
        return response.data
    } catch (error) {
        throw error
    }
}

export const GetPostDetail = async (id) => {
    try {
        const response = await Client.get(`posts/${id}`)
        console.log(response, "RESPONSE for Detail")
        return response.data
    } catch (error) {
        throw error
    }
}

export const AddComment = async (id, comment) => {
    try {
        await Client.post(`comment/${id}`, comment)
        .then((res) => res.data)
        .catch((error) => console.log(error))
    } catch (error) {
        throw error
    }
}