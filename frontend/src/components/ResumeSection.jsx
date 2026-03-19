import { useEffect, useMemo, useState } from 'react';
import { getActiveResume, uploadResume } from '../services/api';

function ResumeSection() {
  const [resume, setResume] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isUploading, setIsUploading] = useState(false);

  const resumeDownloadUrl = useMemo(() => {
    if (!resume?.fileUrl) {
      return '';
    }

    return resume.fileUrl;
  }, [resume]);

  const fetchResume = async () => {
    try {
      const response = await getActiveResume();
      setResume(response.data.data);
    } catch (_error) {
      setResume(null);
    }
  };

  useEffect(() => {
    fetchResume();
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
    setStatus({ type: '', message: '' });
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setStatus({ type: 'error', message: 'Please choose a PDF resume first.' });
      return;
    }

    setIsUploading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await uploadResume(selectedFile);
      setResume(response.data.data);
      setSelectedFile(null);
      event.target.reset();
      setStatus({ type: 'success', message: 'Resume uploaded successfully.' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Resume upload failed.',
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section id="resume" className="section">
      <div className="container resume-layout">
        <div className="section-card">
          <p className="eyebrow">Resume</p>
          <h2>Upload and download your latest CV</h2>
          <p>
            This section lets you upload a PDF resume from the frontend and make
            the latest version available for download.
          </p>

          {resumeDownloadUrl ? (
            <a
              className="button primary"
              href={resumeDownloadUrl}
              target="_blank"
              rel="noreferrer"
              download
            >
              Download Resume
            </a>
          ) : (
            <p className="muted-text">No resume uploaded yet.</p>
          )}
        </div>

        <div className="section-card">
          <h3>Upload new resume</h3>
          <form onSubmit={handleUpload} className="upload-form">
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <button className="button secondary" type="submit" disabled={isUploading}>
              {isUploading ? 'Uploading...' : 'Upload Resume'}
            </button>
          </form>

          {selectedFile ? <p className="muted-text">Selected: {selectedFile.name}</p> : null}

          {status.message ? (
            <p className={status.type === 'error' ? 'message error' : 'message success'}>
              {status.message}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
