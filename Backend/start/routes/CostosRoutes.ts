import router from '@adonisjs/core/services/router'
const CostosArfertController = () => import('#controllers/costos_arferts_controller')

router.group(() => {
  router.get('/costos', [CostosArfertController, 'index'])
  router.put('/costos/:id', [CostosArfertController, 'update'])
}).prefix('/api')