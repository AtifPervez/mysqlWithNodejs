
const express=require('express')
const router=require('./router/route')
const app=express()
app.use(express.json())
// const sequelize=require('./config/database')



app.use('/',router)

// sequelize.sync().then((result)=>{
    // console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })

app.listen(3000,()=>{
    console.log('Express App is Running');
})
