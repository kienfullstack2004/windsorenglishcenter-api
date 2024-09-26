const joi = require("joi");

class Validate{
    phone = joi.string().alphanum().required()
}

module.exports = new Validate();