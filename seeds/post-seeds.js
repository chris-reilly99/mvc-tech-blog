const { Post } = require('../models');

const postData = [
    {
        title: "Cool Stuff!",
        post_content: "Even cooler content in this post here.",
        user_id: 3
    },
    {
        title: "Awesome stuff",
        post_content: "how awesome is this???",
        user_id: 1
    },
    {
        title: "This is great!",
        post_content: "Great things coming soon!",
        user_id: 2

    },
    {
        title: "Can't believe it!",
        post_content: "how could that be the way it really is?!?!?!?!!!",
        user_id: 5
    },
    {
        title: "Oh my",
        post_content: "I'm so surprised by this",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;