const Resume = require('../models/Resume');

const deactivateAll = async () => Resume.updateMany({}, { isActive: false });

const create = async (payload) => Resume.create(payload);

const findActive = async () => Resume.findOne({ isActive: true }).sort({ createdAt: -1 });

module.exports = {
  deactivateAll,
  create,
  findActive,
};
