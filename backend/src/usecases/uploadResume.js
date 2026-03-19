const uploadResume = async (resumeRepository, file, baseUrl) => {
  if (!file) {
    throw new Error('Resume file is required');
  }

  const allowedMimeTypes = ['application/pdf'];

  if (!allowedMimeTypes.includes(file.mimetype)) {
    throw new Error('Only PDF files are allowed');
  }

  await resumeRepository.deactivateAll();

  return resumeRepository.create({
    originalName: file.originalname,
    fileName: file.filename,
    mimeType: file.mimetype,
    size: file.size,
    fileUrl: `${baseUrl}/uploads/${file.filename}`,
    isActive: true,
  });
};

module.exports = uploadResume;
