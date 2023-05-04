const Sequelize=require('sequelize')

const sequelize=new Sequelize(
    'blog-app',
    'root',
    'root123',{
        dialect:'mysql',
        host:'localhost',
    }
    )
        
    module.exports=sequelize;

    
    