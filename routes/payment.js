var express = require('express');
var router = express.Router();
var paymentController = require('../controllers/payment.controller');
var middleware = require('../middleware');

//integracion del controller ?
router.get('/promos', paymentController.getPromos);
router.get('/applyDiscount', paymentController.applyDiscount);
router.get('/create', paymentController.create);

router.use(middleware);

// router
//     .get('/promos', paymentController.getPromos);
//     .get('/applyDiscount', paymentController.applyDiscount);
//     .get('/create', paymentController.create);

module.exports = router;