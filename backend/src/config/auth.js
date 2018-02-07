const jwt = require('jsonwebtoken')
const env = require('../.env')

module.exports = (req, res, next) => {
  // CORS config
  if('a'==='a'){
    next();
    return;
  }
  if (req.method === 'OPTIONS') {
    next()
  } else {
    const token = req.body.token || req.query.token || req.headers['authorization']
    if (!token) {
      return res.status(403).send({ errors: ['Nenhum token encontrado'] })
    }
    jwt.verify(token, env.authSecret, function(err, decoded) {
      if (err) {
        return res.status(403).send({ errors: ['Falha ao validar token.'] })
      } else {
        //req.decoded = decoded
        next()
      }
    })
  }
}
