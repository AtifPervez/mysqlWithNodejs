const express=require('express')
const router=express.Router()
const userController=require('../controller/userController')

router.post('/post',userController.createUser)
router.get('/get',userController.getUser)
router.get('/getById/:id',userController.getUserById)
router.put('/updateById/:id',userController.updateById)
router.delete('/delete/:id',userController.deleteApi)



module.exports=router

