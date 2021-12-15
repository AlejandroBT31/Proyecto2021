var express = require('express');
var router = express.Router();
var operationsController = require('../controllers/operations.controller')
var middleware = require('../middleware');


router.get('/sum/:num1/:num2', operationsController.sum)
router.get('/substract/num1/num2', operationsController.substract)
router.get('/multiply/num1/num2', operationsController.multiply)
router.get('/divide/num1/num2', operationsController.divide);

router.use(middleware);

// router
//     .post('/', tasksController.create)
//     .get('/', tasksController.getAll)
//     .get('/sum', operationsController.sum)
//     .get('/substract', operationsController.substract)
//     .get('/multiply', operationsController.multiply)
//     .get('/divide', operationsController.divide);

module.exports = router;