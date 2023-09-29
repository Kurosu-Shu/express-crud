const userModel = require("../models/user");

exports.createUser = (req, res) => {
    const { name, email, address } = req.body;

    userModel.create({
        name,
        email,
        address
    }).then(
        res.json({
            "message": "create succefully"
        })
    ).catch((error) => console.log(error));

};

exports.fetchUser = (req, res) => {
    userModel.find().then(
        (data) => {
            res.json(data);
        }
    ).catch((error) => console.log(error));
}

exports.updateUser = (req, res) => {
    const userId = req.params.userId;
    const name = req.body.name;
    const email = req.body.email;

    userModel
        .findByIdAndUpdate(userId, { name, email })
        .then(() => {
            res.send({ "message": "sucessfully" });
        }).catch((error) => console.error(error));
}

exports.deleteUser = (req, res) => {
    const userId = req.params.userId;
    userModel
        .findByIdAndDelete(userId)
        .then(() => {
            res.send({ "message": "delete successfully" });
        })
        .catch(error => console.log(error));
}