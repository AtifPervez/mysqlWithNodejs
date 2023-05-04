const Sequelize=require('sequelize')
const sequelize=require('../config/database')

const User=sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:{
        type:Sequelize.STRING
    },
    price:{
        type:Sequelize.DOUBLE,
        allowNull:false
    },
    ImageUrl:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
module.exports=User;
