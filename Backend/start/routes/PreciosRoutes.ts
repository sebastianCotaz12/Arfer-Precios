import router from '@adonisjs/core/services/router'
const PreciosController = () => import('#controllers/precios_controller')

router.get('/', async () => ({ name: 'Arfert API', version: '1.0' }))

router.group(() => {
  router.get('/zonas', [PreciosController, 'zonas'])
  router.get('/zonas/:nombre/productos', [PreciosController, 'productos'])
  router.put('/zonas/:nombre/productos/:id', [PreciosController, 'updatePrecio'])
  router.put('/zonas/:nombre/productos', [PreciosController, 'bulkUpdate'])
}).prefix('/api')