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
/***************[FARM PRODUCTION TYPE]**************/
router.get('/farmtypes', (req, res)=>{
    // console.log("farmtype", req.query.farmType);
    
    const farmData = fs.readFileSync("./data/farmData.json");
    const parsedFarmData = JSON.parse(farmData);
    //convert all values to adjust for mis-casing in the request
    // const farmType = req.query.farmType.toLowerCase();

    const farmsByType = parsedFarmData.filter((farm) => farm.farmType.includes(farmType));
    res.json(farmsByType);
   
    
})

/*******************[REGIONS]**********************/
router.get('/regions', (req, res)=>{
    const farmData = fs.readFileSync("./data/farmData.json");
    const parsedFarmData = JSON.parse(farmData);
    const region = req.query.region;

    const farmsByRegion = parsedFarmData.filter((farm)=> farm.region.includes(region));

    res.json(farmsByRegion);

})


/****************[COMMUNITY OF FOCUS]**************/
router.get('/communities', (req, res)=>{
    const farmData = fs.readFileSync("./data/farmData.json");
    const parsedFarmData = JSON.parse(farmData);
    const communityType = req.query.communityType;

    const farmsByCommunity = parsedFarmData.filter((farm)=> farm.communityType.includes(communityType));

    res.json(farmsByCommunity);


})

module.exports = router;