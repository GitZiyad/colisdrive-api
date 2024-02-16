const jwt = require('jsonwebtoken')

const checkAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        if(token) {
            const result = await jwt.verify(token, 'user')
            console.log(result)
            if(result) {
                req.user = result?.id
                next()
            }
            else {
                res.json({msg: "Non autorisé "})
            }
        }
        else {
            res.json({msg: "Non autorisé"})
        }
    } catch (err) {
        console.log(err)
        res.json({msg: "Non autorisé"})
    }
}


module.exports = checkAuth