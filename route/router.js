const express = require("express");

const router = express.Router();
const Report_problem = require("../foods/Report_problem");




router.post("/addproblem", (req, res) => {
    // const data = req.body;

    console.log(req.body.data);

    Report_problem.addproblem(req.body, (result) => {
        console.log("Added");
        // console.log(result)
        res.status(200).send(result);

    })

});
router.get("/getproblem", (req, res) => {
    console.log(req.body);
Report_problem.Report_problem(req.body, (result) => {
        // var results={result:result}
        // res.json({res:result})
        res.send(result)

    })
});
module.exports = router;