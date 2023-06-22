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
router.get('/farmtypes', (req, res)=>{
    let farmtype = req.query.type;

})

router.get('/farmtypes', (req, res)=>{
    const farmData = fs.readFileSync("./data/farmData.json");
    const parsedFarmData = JSON.parse(farmData);
    
    const farmsByType = parsedFarmData.includes((farm)=>farm.farmType)

    res.JSON(farmsByType)

    let fruitVegFarms = farmsData.find((farmType) => farmType.Fruit-Vegetable === true);
    if (fruitVegFarms === req.params.farmType) {
        res.json(fruitVegFarms)
    }else{ 
        res.status(404).json({message: "farmtype not found"})
    };
    
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
    const farmData = fs.readFileSync("./data/farmData.json");
    const parsedFarmData = JSON.parse(farmData);
    const region = req.query.region;
    
    

})
router.get('/communities', (req, res)=>{
    const farmData = fs.readFileSync("./data/farmData.json");
    const parsedFarmData = JSON.parse(farmData);
    const communities = req.query.community;

})

module.exports = router;