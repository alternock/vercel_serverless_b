require('module-alias/register');
//libs
let {
    StatusCodes: SC
} = require("http-status-codes");
let axios = require("axios");


export default async function handler(req, res) {

    try {
        let url = "https://jsonplaceholder.typicode.com/users";
        let {
            data
        } = await axios.get(url);
        res.status(SC.OK)
            .json({
                data
            });
    } catch (err) {
        res.status(SC.NO_CONTENT)
            .json({
                data: SC.NO_CONTENT
            });
    }
}