const express = require('express'); 
const router = express.Router();
const fs = require("fs");


router.get('/', (req, res)=>{
    const categories = fs.readFileSync("./data/categoriesData.json");
    const parsedCategories = JSON.parse(categories);
    res.json(parsedCategories);

})


// //to generate a list of farms
// function readFarmData(){
//     const farmData = fs.readFileSync("./data/farmData.json");
//     const parsedFarmData = JSON.parse(farmData);
//     return parsedFarmData;
// }

// //to generate list of options within a category
// function readCategories(){
//     const categories = fs.readFileSync("./data/categories.json");
//     const parsedCategories = JSON.parse(categories);
// }

/****************[GET FARMS BY PRODUCTION TYPE]***************/
router.get('/farmtypes', (req, res)=>{
    const farmData = fs.readFileSync("./data/farmData.json");
    const parsedFarmData = JSON.parse(farmData);
    const farmType = req.query.farmType;
    const farmsByType = parsedFarmData.filter((farm)=>farm.farmType.includes(farmType)); 

    res.json(farmsByType)
    
});


/*********************[GET FARMS BY REGION]*********************/
router.get('/regions', (req, res)=>{
    const farmData = fs.readFileSync("./data/farmData.json");
    const parsedFarmData = JSON.parse(farmData);
    const region = req.query.region;
    const farmsByRegion = parsedFarmData.filter((farm)=>farm.region.includes(region));

    res.json(farmsByRegion)
});

/*********************[GET FARMS BY COMMUNITY OF FOCUS]*********************/
router.get('/communities', (req, res)=>{
    const farmData = fs.readFileSync("./data/farmData.json");
    const parsedFarmData = JSON.parse(farmData);
    const community = req.query.communityType;
    const farmsByCommunity = parsedFarmData.filter((farm)=>farm.communityType.includes(community));

    res.json(farmsByCommunity);

})



module.exports = router;


/*
    farmType optionss:
        "fruitVegetable",
        "flowerHerb",
        "mushroom",
        "aquaponicFish",
        "gardenSmallSpaceRooftopUrban",
        "beePollinatorInsect",        
        "poultryLivestock",
        "indoorGreenhouse"
    communityType options:
        "qtbipoc",
        "africanDiaspora",
        "aapi",
        "latinAmerican",
        "arabMENA",
        "nativeAmerican"
    region options:
        "(US-NE) NorthEast",
        "(US-SE) SouthEast",
        "(US-MW) Midwest",
        "(US-W) West/Northwest",
        "(US-S) South",
        "(US-PO) Pacific Ocean",
        "(US-CAR) Caribbean (Puerto Rico, US Virgin Islands)",

 */