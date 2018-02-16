const Usuario = require('./user')
const errorHandler = require('../common/errorHandler')

Usuario.methods(['get','post', 'put', 'delete'])
//Para retornar sempre o registro novo alterado
//Para rodar as validações tbm no momento da atualização 'put'
Usuario.updateOptions({new: true, runValidators: true})
Usuario.after('post', errorHandler).after('put', errorHandler)


Usuario.route('count', (req, res, next) => {
    Usuario.count((error, value) => {
        if(error){
          res.status(500).json({errors: [error]})
        }else{
          res.json({value})
        }
    })
})
module.exports = Usuario
