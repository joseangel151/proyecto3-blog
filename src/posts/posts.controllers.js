const Posts = require('../models/posts.models')

const findAllPosts = async () => {
    const data = await Posts.findAll()
    return data
}

const findPostById = async (id) => {
    const data = await Posts.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createPost = async (postObj) => {
    //? Your code here:

 const newPost = {
        userName: postObj.userName,
        content: postObj.content
    }
    
    const data = await Posts.create(newPost)
    return data


}

const updatePost = async (id, postObj) => {
    //? Your code here:

    const data = await Posts.update(postObj, {
        where: {
            id: id
        }
    })
    return data

}

const deletePost = async (id) => {
    //? Your code here:
    const data = await Posts.destroy({
        where: {
            id: id
        }
    })
    return data


}

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost
}