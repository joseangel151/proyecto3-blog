/* const express = require('express')
const app = express()*/


const express = require('express')
const app = express()
const postRouter = require('./posts/posts.router')
const db = require('./utils/database')


app.use(express.json())

db.authenticate() //? Mostrar en consola de manera informativa si la conexion se hizo de manera correcta
    .then(() => {
        console.log('Las credenciales de la base de datos son correctas')
    })
    .catch((err) => {
        console.log(err) //! Errores de autenticacion (contraseña, usuario o hosts)
    })





db.sync() //? Sincronizar nuestra base de datos con los modelos que tenemos definidos
    .then(() => {
        console.log('La base de datos del virus ha sido actualizada')
    })
    .catch(err => {
        console.log(err) //! error en las tablas, propiedades, etc
    })

//* como nosotros podemos recibir info o data del cliente

app.get('/', (req, res) => {
    res.json({
        message: 'Server Ok!',
        routes: {
            posts: 'http://localhost:9000/api/v1/posts'
        }
    })
})

app.use('/api/v1',postRouter)


app.listen(9000, () => {
    console.log('Server started at port 9000')
})

module.exports = app




/*module.exports = app*/
