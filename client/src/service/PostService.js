import Client from ".";

export const GetPosts = async () => {
    try {
        await Client.get(`posts`)
        .then((res) => res.data)
        .catch((error) => console.log(error))
    } catch (error) {
        throw error
    }
}

export const GetPostDetail = async (id) => {
    try {
        await Client.get(`posts/${id}`)
        .then((res) => res.data)
        .catch((error) => console.log(error))
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