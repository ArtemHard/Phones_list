const { db } = require("../../db");
const { v4: uuidv4 } = require("uuid");

const getPhones = (req, res) => {
  const filter = req.query.filter && JSON.parse(req.query.filter);
  console.log(filter);
  let dataForClient = db.phones.map(({ email, ...rest }) => rest);

  if (filter) {
    if (filter.search) {
      const searchRegExp = new RegExp(filter.search, "i");
      dataForClient = dataForClient.filter((phone) =>
        searchRegExp.test(phone.name)
      );
    }
  }

  res.json(dataForClient);
};

const getCurrentPhone = (req, res) => {
  const { id } = req.params;

  const dataForClient = db.phones.find((phone) => phone.id === id);

  if (!dataForClient) {
    return res.sendStatus("404");
  }

  setTimeout(() => {
    res.json(dataForClient);
  }, 3e3);
};

const createPhone = (req, res) => {
  const dataFromClient = req.body;

  if (!Object.values(dataFromClient).every((value) => !!value))
    return res.sendStatus(400);

  const newPhone = {
    ...dataFromClient,
    id: uuidv4(),
  };
  db.phones.push(newPhone);

  return res.sendStatus(201).json(newPhone);
};

const updatePhone = (req, res) => {
  const { id } = req.params;

  const currentPhoneIndex = db.phones.findIndex((phone) => phone.id === id);

  if (currentPhoneIndex === -1) return res.sendStatus(404);

  if (!Object.values(req.body).every((value) => !!value))
    return res.sendStatus(400);

  db.phones[currentPhoneIndex] = {
    ...db.phones[currentPhoneIndex],
    ...req.body,
  };

  return res.json(db.phones[currentPhoneIndex]);
};

const deletePhone = (req, res) => {
  const { id } = req.params;

  const index = db.phones.findIndex((phone) => phone.id === id);

  if (index > -1) {
    db.phones.splice(index, 1);

    return res.sendStatus("200");
  }

  return res.sendStatus("404");
};

module.exports = {
  getPhones,
  getCurrentPhone,
  createPhone,
  updatePhone,
  deletePhone,
};
