const Message = require('../models/Message');

const create = async (payload) => Message.create(payload);

module.exports = {
  create,
};
