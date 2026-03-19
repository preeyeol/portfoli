const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);

const createMessage = async (messageRepository, payload) => {
  const { name, email, message } = payload;

  if (!name || !email || !message) {
    throw new Error('Name, email, and message are required');
  }

  if (!isEmailValid(email)) {
    throw new Error('Please provide a valid email address');
  }

  return messageRepository.create({ name, email, message });
};

module.exports = createMessage;
