var express = require("express");
var router = express.Router();
const TableStore = require("tablestore");

const client = require("../utils/client");

router.post('/updatelogo', (req, res) => {
    console.log(req.body)
    const { logourl, logolink } = req.body
    const params = {
        tableName: "personlogo",
        condition: new TableStore.Condition(
            TableStore.RowExistenceExpectation.IGNORE,
            null
        ),
        primaryKey: [{ id: "1" }],
        updateOfAttributeColumns: [
            {
                PUT: [
                    { logourl },
                    { logolink },
                ],
            },
        ],
    };
    client.updateRow(params, function (err, data) {
        if (err) {
            console.log("error:", err);
            res.json({ error: err });
            return;
        }

        console.log("success:", data);
        res.json("update");
    });


})

router.post('/additem', (req, res) => {
    console.log(req.body)
    const {
        name,
        menuname,
        herf,
        subs,
    } = req.body;
    const params = {
        tableName: "personNav0",
        condition: new TableStore.Condition(
            TableStore.RowExistenceExpectation.IGNORE,
            null
        ),
        primaryKey: [
            // { id: `${Date.now()}-${Math.random()}` }
            { id: `${Date.now() - Math.random()}` },
        ],
        attributeColumns: [
            { name },
            { menuname },
            { herf },
            { subs: subs ? subs.toString() : "" },
        ],
    };

    client.putRow(params, function (err, data) {
        if (err) {
            console.log("error:", err);
            res.json({ error: err });
            return;
        }

        console.log("success:", data);
        res.json("add");
    });

})

router.get('/getitem', (req, res) => {
    const params = {
        tableName: "personNav0",
        direction: TableStore.Direction.FORWARD,
        inclusiveStartPrimaryKey: [{ id: TableStore.INF_MIN }],
        exclusiveEndPrimaryKey: [{ id: TableStore.INF_MAX }],
        limit: 100,
    };

    client.getRange(params, function (err, data) {
        if (err) {
            console.log("error:", err);
            res.json({ error: err });
            return;
        }
        let result = []
        data.rows.forEach((item) => {
            let tmp = {
                id: item.primaryKey[0].value,
                name: item.attributes[2].columnValue,
                herf: item.attributes[0].columnValue,
                menuname: item.attributes[1].columnValue,
                subs: item.attributes[3].columnValue.split(",") 
            }
            result.push(tmp)
        })

        res.json(result);
    });
})

router.post('/updateitem', (req, res) => {

})

router.post('/delitem', (req, res) => {

})
module.exports = router;