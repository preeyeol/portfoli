import { useState } from 'react';
import { sendMessage } from '../services/api';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback({ type: '', message: '' });

    try {
      await sendMessage(formData);
      setFeedback({ type: 'success', message: 'Message sent successfully.' });
      setFormData(initialForm);
    } catch (error) {
      setFeedback({
        type: 'error',
        message: error.response?.data?.message || 'Failed to send message.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container section-card">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something useful</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
          />
          <button className="button primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {feedback.message ? (
          <p className={feedback.type === 'error' ? 'message error' : 'message success'}>
            {feedback.message}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export default Contact;
