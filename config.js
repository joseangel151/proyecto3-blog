require('dotenv').config()

const configs = {
    api: {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT,
        host: process.env.HOST
    },
    db: {
        develpment: {
            dialect: process.env.DB_DIALECT,
            host: process.env.DB_HOST,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASS,
            port: process.env.DB_PORT,
            database: process.env.DB_NAME,
            define: {
                timestamps: true, 
                underscored: true, 
                underscoredAll: true
            }
        },
        test: {

        },
        production: {
             
        }
    }    
}

module.exports = configs