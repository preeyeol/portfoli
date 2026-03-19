const resumeRepository = require('../repositories/resumeRepository');
const uploadResume = require('../usecases/uploadResume');
const getActiveResume = require('../usecases/getActiveResume');

const saveResume = async (file, baseUrl) => uploadResume(resumeRepository, file, baseUrl);
const fetchActiveResume = async () => getActiveResume(resumeRepository);

module.exports = {
  saveResume,
  fetchActiveResume,
};
