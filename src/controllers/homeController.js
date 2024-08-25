const { getAllUsers } = require('../services/crudServices')

const renderHomePage = async (req, res) => {
    const users = await getAllUsers()
    res.render('home.ejs', { users })
}

module.exports = {
    renderHomePage
};