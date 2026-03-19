const createMessage = require('../usecases/createMessage');
const messageRepository = require('../repositories/messageRepository');

const saveMessage = async (payload) => createMessage(messageRepository, payload);

module.exports = {
  saveMessage,
};
