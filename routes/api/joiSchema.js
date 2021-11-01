const Joi = require("joi");

const patternName =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const patternPhone =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const joiSchema = Joi.object({
  name: Joi.string().min(3).max(30).pattern(patternName).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  phone: Joi.string().max(15).pattern(patternPhone).required(),
});

module.exports = joiSchema;
