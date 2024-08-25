const sql = require('mssql')
const connectionPool = require('../config/database.js')

const createUser = (data) => {
    const columns = ['id', 'name', 'address']
    const { idUser, nameUser, addressUser } = data
    connectionPool
        .then(pool => {
            return pool.request()
            .input('id', sql.TYPES.VarChar, idUser)
            .input('name', sql.TYPES.NVarChar, nameUser)
            .input('address', sql.TYPES.NVarChar, addressUser)
            .query(`INSERT INTO PERSONS (${columns}) VALUES (@id, @name, @address)`)
        })
        .then(data => {
            console.log('>>>Check--------->', data)
        })
        .catch(err => {
            console.log('>>>Check--------->', err)
        })
}

const getAllUsers = () => {
    return connectionPool
        .then(pool => {
            return pool.request().query(`SELECT * FROM PERSONS`)
        })
        .then(persons => {
            return persons.recordset
        })
}

module.exports = {
    getAllUsers,
    createUser
}