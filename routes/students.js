

const express = require('express');
const router = express.Router();
const Plan = require('../models/student');



router.post('/', async (req, res) => {
    const plan = new Plan({
        name: req.body.name,
        duration: req.body.duration,
        price: req.body.price,
    });
    try {
        const newPlan = await plan.save();
        res.status(201).json(newPlan);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/:id', getPlan, (req, res) => {
    res.json(res.plan);
});

router.get('/', async (req, res) => {
    try {
        const plans = await Plan.find();
        res.json(plans);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
async function getPlan(req, res, next) {
    let plan;
    try {
        plan = await Plan.findById(req.params.id);
        if (plan == null) {
            return res.status(404).json({ message: 'Cannot find plan' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.plan = plan;
    next();
}
module.exports = router;
