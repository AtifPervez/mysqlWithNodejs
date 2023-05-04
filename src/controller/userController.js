const { where } = require('sequelize')
const userModel = require('../model/userModel')
const op=require('sequelize')

const createUser = async (req, res) => {

    try {

        let data = req.body
        let savedData = await userModel.create(data)
        res.send({ msg: savedData })
        
    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}

const getUser = async (req, res) => {

    try {
        let getData = await userModel.findAll()
        return res.status(200).send({ status: true, msg: getData })

    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}


const getUserById=async(req,res)=>{
    try {
        let id=req.params.id
        let getData=await userModel.findByPk(id)
        res.send({msg:getData})
         

        
    } catch (error) {
           return res.status(500).send({ status: false, msg: error.message })
    }
}

const updateById=async(req,res)=>{
    try {
        let id=req.params.id
        let data=req.body
        let updateData=await userModel.update({title:data.title},{
        where:{
            id:id
        }
    })

res.send({msg:updateData})

        
    } catch (error) {
        return res.status(500).send({status:false,msg:error.message})
    }
}

const deleteApi=async(req,res)=>{
try {
    let id=req.params.id
    let deleteData=await userModel.destroy({
        
            where:{
                id:id
            }
        
    })
    res.send({msg:deleteData})
    
} catch (error) {
    return res.status(500).send({status:false,msg:error.message})
}

}


module.exports = { createUser, getUser ,getUserById,updateById,deleteApi}

