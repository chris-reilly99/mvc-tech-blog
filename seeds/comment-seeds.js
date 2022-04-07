const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is cool"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wowza"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Way awesome"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Overrated"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Wow!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "I guess"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Pretty cool"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;