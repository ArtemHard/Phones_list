const express = require("express");

const phonesRouter = express.Router();

const {
  getPhones,
  getCurrentPhone,
  createPhone,
  deletePhone,
  updatePhone,
} = require("../controllers/phonesController");

phonesRouter.route("/").get(getPhones).post(createPhone);

phonesRouter
  .route("/:id")
  .get(getCurrentPhone)
  .patch(updatePhone)
  .delete(deletePhone);

module.exports = {
  phonesRouter,
};
