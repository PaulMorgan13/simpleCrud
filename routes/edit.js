const express = require("express") 
const router = express.Router()  
const editcontroller = require("../controllers/edit")   


router.get("",editcontroller.getEdit )  //get the edit page with item id   

router.get("", editcontroller.deleteTask)// this will delete selected item 



module.exports = router