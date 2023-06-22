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
 "Fruit/Vegetable",
        "fruitVegetable",
        "flowerHerb",
        "mushroom",
        "poultryLivestock",
        "indoorGreenhouse"
        "aquaponicFish",
        "beePollinatorInsect",
        "gardenSmallSpaceRooftopUrban",
        "poultryLivestock"

CommunityTypes:
qtbipoc
africanDiaspora
aapi
latinAmerican

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