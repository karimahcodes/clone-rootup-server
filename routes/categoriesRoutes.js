const express = require('express'); 
const router = express.Router();
const fs = require("fs");


//to generate a list of farms
function readFarmData(){
    const farmData = fs.readFileSync("./data/farmData.json");
    const parsedFarmData = JSON.parse(farmData);
    return parsedFarmData;
}

//to generate list of options within a category
function readCategories(){
    const categories = fs.readFileSync("./data/categories.json");
    const parsedCategories = JSON.parse(categories);
}

// GET all farms by type of production/("farmtype")
// router.get('/farmtypes', (req, res)=>{
//     let farmtype = req.query.type;

// })

router.get('/farmtypes', (req, res)=>{
    console.log("farmtype", req.query.farmType);
    
    const farmData = fs.readFileSync("./data/farmData.json");
    const parsedFarmData = JSON.parse(farmData);
    
    //convert all values to adjust for mis-casing in the request
    const farmType = req.query.farmType.toLowerCase();

    let farmsByCategory = parsedFarmData.filter((farm) => farm.farmType.includes(farmType));
    console.log("test of farms")
    // if (fruitVegFarms === req.query.farmType) {
    res.json(farmsByCategory);
    // }else{ 
        // res.status(404).json({message: "farmtype not found"})
    // }
    // ;
    
})

/*
 "Fruit/Vegetable",
        "Flower/Herb",             
        "Mushroom",
        "Aquaponic/Fish",
        "Garden/SmallSpace/Rooftop/Urban",
        "Bee/Pollinator/Insect",
        "Animal husbandry"
 */



/***************************************************/
router.get('/regions', (req, res)=>{
    let region = req.query.type;
    

})
router.get('/communities', (req, res)=>{
    let communities = req.query.type;

})

module.exports = router;