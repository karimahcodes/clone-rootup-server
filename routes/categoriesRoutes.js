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

router.get('/farmtypes', (req, res)=>{
    console.log("farmtypes")
    const farmData = fs.readFileSync("./data/farmData.json");
    const parsedFarmData = JSON.parse(farmData);
    const farmType = req.query.farmType;

    console.log(farmType);
    const farmsByType = parsedFarmData.filter((farm)=>farm.farmType.includes(farmType))
    res.json(farmsByType)
    
});



/*
    farmType optionss:
        "fruitVegetable",
        "flowerHerb",
        "mushroom",
        "aquaponicFish",
        "beePollinatorInsect",
        "gardenSmallSpaceRooftopUrban",
        "poultryLivestock"
        "indoorGreenhouse"
    communityType options:
        qtbipoc
        africanDiaspora
        aapi
        latinAmerican
        arabMENA
        nativeAmerican
    region options:
        "(US-NE) NorthEast",
        "(US-SE) SouthEast",
        "(US-MW) Midwest",
        "(US-W) West/Northwest",
        "region": "(US-S) South",
        "(US-PO) Pacific Ocean",
        "(US-CAR) Caribbean (Puerto Rico, US Virgin Islands)",

 */



/***************************************************/
router.get('/regions', (req, res)=>{
    const farmData = fs.readFileSync("./data/farmData.json");
    const parsedFarmData = JSON.parse(farmData);
    const region = req.query.region;
    const farmsByRegion = parsedFarmData.filter((farm)=>farm.region.includes(region));
    res.json(farmsByRegion)
});

router.get('/communities', (req, res)=>{
    const farmData = fs.readFileSync("./data/farmData.json");
    const parsedFarmData = JSON.parse(farmData);
    const community = req.query.communityType;
    const farmsByCommunity = parsedFarmData.filter((farm)=>farm.communityType.includes(community));
    res.json(farmsByCommunity);

})

module.exports = router;