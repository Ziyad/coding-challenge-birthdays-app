const moment = require('moment');

const logger = require('../logging');

const Birthdays = require('../model/birthdays.model');

// create birthday
const createBirthdays = function(birthdays, cb) {
    if(birthdays) {
        logger.info("create birthday request - birthdays: " + JSON.stringify(birthdays));
        Birthdays.create(birthdays, cb);
    }
};

Object.prototype.hasOwnProperty = function(property) {
    return this[property] !== undefined;
};

// get birthdays
const getBirthdays = function(filter, cb) {

    logger.info("getBirthdays request");
    var findConditions = {}; // starts empty
    // check for filter present
    if(filter.hasOwnProperty("from") && filter.hasOwnProperty("to")) {
        logger.info("filter: " + JSON.stringify(filter));
        var validFilter = true;
        // validate incoming "from" date
        if(!filter.from || !moment(new Date(filter.from)).isValid()) {
            logger.info("missing 'from' attribute or invalid date");
            validFilter = false;
        }
        // validate incoming "to" date
        if(!filter.to || !moment(new Date(filter.to)).isValid()) {
            logger.info("missing 'to' attribute or invalid date");
            validFilter = false;
        }
        if(!validFilter) {
            cb({error: "invalid request filter - aborting"});
            return; // couldn't use filter
        } else {
            findConditions = {
                birthday: {
                    $gte: moment(filter.from).toDate(),
                    $lte: moment(filter.to).toDate()
                }
            };
        }
    }
    Birthdays.find(findConditions, cb);
};

const updateBirthday = function(birthday, cb) {
    logger.info("updating birthday: " + JSON.stringify(birthday));
    Birthdays.update(birthday, cb);
};

const deleteBirthday = function(birthday, cb) {
    logger.info("deleting birthday: " + JSON.stringify(birthday));
    Birthdays.deleteOne({_id: birthday._id}, cb);
};



module.exports = {
    getBirthdays: getBirthdays,
    createBirthdays: createBirthdays,
    updateBirthday: updateBirthday,
    deleteBirthday: deleteBirthday
};