const express = require('express'); 
const router = express.Router();
const fs = require("fs");


function readFarmData(){
    const farmData = fs.readFileSync("./data/farmData.json");
    const parsedData = JSON.parse(farmData);
    return parsedData;
}

/****[Retrieve All Farms]****/
router.get('/', (req, res) => {
    const farms = readFarmData();
    res.json(farms);

});

/****[Retrieve Single Farm]****/
router.get('/:id', (req, res) => {
    const farms = readFarmData();
    const selectedFarm = farms.filter((farm)=> farms.id === req.params.id);
    res.json(selectedFarm);

});




/****[upcoming feature: add a new farm]********** :
router.post('/', (req, res) => {
    const farmSubmission ={
        id: uuid(),
        farmName: req.body.farmName,
        farmImageSource: req.body.farmImageSource,
        contactInfo: {
            address: req.body.address,
            phone: req.body.phone,
            website: req.body.website
        },
        region: req.body.region,
        qtbipocAffirming: req.body.qaffirming
        blackAffirming: req.body.baffirming
        programName: req.body.programNAme,
        programFormat: [ req.body.programFormat ],
        hiresApprentices: req.body.hires,
        farmType: [ req.body.farmType ],
        ownership: [req.body.ownership ],
        communityType: [req.body.communityType],
        cost: {
            paidApprenticeship: req.body.paidApprenticeship,
            programFee: req.body.fee
        },
        lodgingAvailable: req.body.lodging,
        accessibility: req.body.accessibility,
        description: req.body.description
    }

    const farms = readFarmData();
    farms.push(farmSubmission);
    fs.writeFileSync('./data/farmData.json", JSON.stringify(notes));

    res.status(201).json(farmSubmssion).send("Thanks for your submission");
});

*/


module.exports = router;