const { User } = require('../models');

const userData = [
    {
        username: "mr chris",
        twitter: "mr chris",
        github: "mr chris",
        email: "mrchris@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "nat",
        twitter: "nat",
        github: "nat",
        email: "nat@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "kellogg",
        twitter: "kellogg",
        github: "kellogg",
        email: "kellogg@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "mom",
        twitter: "mom",
        github: "mom",
        email: "urmom@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "dad",
        twitter: "dad",
        github: "dad",
        email: "urdad@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "wow",
        twitter: "wowow",
        github: "wowowow",
        email: "woooow@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;