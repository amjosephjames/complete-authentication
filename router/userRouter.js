const express = require("express");
const {
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    signinUser,
    createUser,
    getingToken,
} = require("../controller/userController");

const {upload} = require("../utils/multer")

const router = express.Router();

router.route("/").get(getUser)

router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser)
router.get("/:id/:token",getingToken)
router.route("/register").post(upload,createUser)
router.route("/signin").post(signinUser)

