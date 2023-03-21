require('module-alias/register');
//libs
let {
    StatusCodes: SC
} = require("http-status-codes");
let joi = require("joi");
//files
let mock = require("@helper/mock")


const schema = joi.object({
    email: joi.string().email().required(),
    alias: joi.string().required()
});

module.export = async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            let validate = schema.validate(req.body);

            if (!validate.hasOwnProperty("error")) {
                res.status(SC.OK).json({
                    data: validate
                });
            } else {
                res.status(SC.BAD_REQUEST)
                    .json({
                        data: SC.BAD_REQUEST
                    })
            }
        } catch (err) {
            res.status(SC.PRECONDITION_FAILED)
                .json({
                    data: SC.PRECONDITION_FAILED
                })
        }
    } else {
        res.status(SC.METHOD_NOT_ALLOWED).json({
            data: "METHOD_NOT_ALLOWED"
        });
    }
}