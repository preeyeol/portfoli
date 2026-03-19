const messageService = require('../services/messageService');

const createMessageController = async (req, res) => {
  try {
    const data = await messageService.saveMessage(req.body);

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createMessageController,
};
