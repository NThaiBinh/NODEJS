const { createUser } = require('../services/crudServices')

const postCreateUser = async (req, res) => {
    createUser(req.body)
    res.send('create user')
}

module.exports = {
    postCreateUser
}