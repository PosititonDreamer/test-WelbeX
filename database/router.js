const Router = require('express')
const router = new Router()
const routesController = require('./controller')

router.post('/route', routesController.createRoute)
router.get('/route', routesController.getRoutes)
router.get('/route/:id', routesController.getOneRoutes)
router.put('/route', routesController.updateRoute)
router.delete('/route/:id', routesController.deleteRoute)

module.exports = router