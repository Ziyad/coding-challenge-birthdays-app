const logger = require('../logging');

const express = require('express');
const router = express.Router();

const Birthdays = require('./birthdays.controller');

router.get(
    '/',
    function(req, res) {
        Birthdays.getBirthdays(
            req.query,
            function(err, birthdays) {
                if(err) {
                    logger.error(err);
                    res.json(err);
                } else {
                    logger.info("getBirthdays Response: " + JSON.stringify(birthdays));
                    res.json(birthdays);
                }
            }
        );
    }
);

router.post(
    '/',
    function(req, res) {
        Birthdays.createBirthdays(
            req.body,
            function(err, birthdays) {
                if(err) {
                    logger.error(err);
                    res.json(err);
                } else {
                    logger.info("createBirthday Response: " + JSON.stringify(birthdays));
                    res.json(birthdays);
                }
            }
        )
    }
);

router.put( // update
    '/',
    function(req, res) {
        Birthdays.updateBirthday(
            req.body,
            function(err, birthday) {
                if(err) {
                    logger.error(err);
                    res.json(err);
                } else {
                    logger.info("updateBirthday Response: " + JSON.stringify(birthday));
                    res.json(birthday);
                }
            }
        );
    }
);

router.delete(
    '/',
    function(req, res) {
        Birthdays.deleteBirthday(
            req.body,
            function(err, birthday) {
                if(err) {
                    logger.error(err);
                    res.json(err);
                } else {
                    logger.info("deleteBirthday Response: " + JSON.stringify(birthday));
                    res.json(birthday);
                }
            }
            );
    }
);

module.exports = router;