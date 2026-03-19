const getActiveResume = async (resumeRepository) => {
  const resume = await resumeRepository.findActive();

  if (!resume) {
    throw new Error('No resume uploaded yet');
  }

  return resume;
};

module.exports = getActiveResume;
