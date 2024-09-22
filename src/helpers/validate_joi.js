import joi from "joi"

export const phone = joi.string().alphanum().required()