const candies = require('./db.json');
let globalId = 4;

module.exports = {
    getCandies: (req, res) => {
        res.status(200).send(candies);
    },
    addCandy: (req, res) => {
        let {type, flavor, qty} = req.body;
        console.log(req.body)
        let newCandy = {
            id: globalId,
            type,
            flavor,
            qty: +qty,
        };
        candies.push(newCandy);
        res.status(200).send(candies);
        globalId++;
    },
    updateCandy: (req, res) => {
        console.log(req.params);
        console.log(req.body);
        let { id } = req.params;
        let { type } = req.body;
        let idx = candies.findIndex(element => +element.id === +req.params.id);

        if(candies[idx].qty >= 300 && type === 'plus') {
            res.status(400).send('too much inventory on hand')
        } else if (candies[idx].qty <= 50 && type === 'minus') {
            res.status(400).send('insufficient inventory. please place order')
        } else if (type === 'plus') {
            candies[idx].qty += 50;
            res.status(200).send(candies);
        } else if (type === 'minus') {
            candies[idx].qty -= 50;
            res.status(200).send(candies);
        } else {
            res.sendStatus(400);
        }
    },
    deleteCandy: (req, res) => {
        let idx = candies.findIndex(element => +element.id === +req.params.id);
        candies.splice(idx, 1);
        res.status(200).send(candies);
    }
}
