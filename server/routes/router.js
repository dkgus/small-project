const express = require('express');
const router = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
router.get('/', services.homeRoutes); //콜백대신 서비스를 이용 원래는 (req,res)=>{}

/**
 *  @description add users
 *  @method GET /add-user
 */
router.get('/add-user', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
router.get('/update-user', services.update_user)


// API
router.post('/api/users', controller.create);
router.get('/api/users', controller.find);
router.put('/api/users/:id', controller.update);
router.delete('/api/users/:id', controller.delete);


module.exports = router