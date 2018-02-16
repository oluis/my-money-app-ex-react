const express = require('express')

module.exports = function(server){
  //Defini URL base para todas as chamadas
  const router = express.Router()
  server.use('/api', router)

  //Rotas
  const BillingCycle = require('../api/billingCycle/billingCycleService')
  BillingCycle.register(router, '/billingCycles')

  const Usuario = require('../api/user/usuarioService')
  Usuario.register(router, '/usuarios')

}
