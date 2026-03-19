const resumeService = require('../services/resumeService');

const uploadResumeController = async (req, res) => {
  try {
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const data = await resumeService.saveResume(req.file, baseUrl);

    return res.status(201).json({
      success: true,
      message: 'Resume uploaded successfully',
      data,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getActiveResumeController = async (req, res) => {
  try {
    const data = await resumeService.fetchActiveResume();

    return res.status(200).json({
      success: true,
      message: 'Resume fetched successfully',
      data,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadResumeController,
  getActiveResumeController,
};
