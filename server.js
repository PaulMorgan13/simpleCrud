//todo - declare Variables  
const express = require("express");

const app = express()  

const PORT = 8000  

const mongoose = require("mongoose")     




const connectDB = require("./config/database")  
const homeRoutes = require("./routes/home")


//connect to database


require("dotenv").config({path:"./config/.env"})

connectDB()




//set middleware
app.set("view engine", "ejs")   
app.set(express.static("public"))   
app.use(express.urlencoded({extended:true}))





//set routes    

app.use('/', homeRoutes) 





//start server

app.listen(PORT, () => {
    console.log(` this is running on port ${PORT}`)
}

)