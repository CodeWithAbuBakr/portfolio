import styled from 'styled-components';
import CyberButton from '../components/CyberButton';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Form = styled(motion.form)`
  width: 90%;
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  position: relative;
  background: rgba(10, 10, 30, 0.95);
  border: 1px solid rgba(106, 0, 255, 0.4);
  border-radius: 8px;
  box-shadow: 0 0 30px rgba(106, 0, 255, 0.2);
  font-family: 'Exo 2', sans-serif;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  background: rgba(20, 20, 40, 0.8);
  border: 1px solid #3a3a6a;
  color: #00ffaa;
  font-size: 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  line-height: 1.5;

  &:focus {
    outline: none;
    border-color: #6a00ff;
    box-shadow: 0 0 15px rgba(106, 0, 255, 0.3);
  }

  &::placeholder {
    color: #6d6d9e;
    font-size: 0.9rem;
  }
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 120px;
  resize: vertical;
  padding: 1.2rem;
  line-height: 1.6;
  scrollbar-width: thin;
  scrollbar-color: #6a00ff rgba(20, 20, 40, 0.8);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(20, 20, 40, 0.8);
  }

  &::-webkit-scrollbar-thumb {
    background: #6a00ff;
    border-radius: 4px;
  }

  &::placeholder {
    color: #6d6d9e;
    font-style: italic;
  }
`;

const StatusIndicator = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #00ffaa;
  font-size: 0.8rem;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    background: #00ffaa;
    border-radius: 50%;
    box-shadow: 0 0 8px #00ffaa;
  }
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id='contact'
      style={{
        padding: '8rem 1rem 0rem',
        background: 'radial-gradient(circle at center, #0a0a2e, #000)',
        minHeight: '100vh'
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          background: 'linear-gradient(45deg, #6a00ff, #00ffaa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: "'Orbitron', sans-serif",
          margin: '0 0 2rem'
        }}
      >
        CONTACT US
      </motion.h1>

      <Form
        onSubmit={handleSubmit}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
      >
        <StatusIndicator>ONLINE</StatusIndicator>

        <Input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />

        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        />

        <TextArea
          name="message"
          placeholder="Enter your neural message..."
          value={formData.message}
          onChange={handleChange}
          required
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: '1.5rem' }}
        >
          <CyberButton
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'linear-gradient(45deg, #6a00ff, #00b4d8)',
              padding: '1rem 2rem',
              fontSize: '1.1rem'
            }}
          >
            Send Message
          </CyberButton>
        </motion.div>
      </Form>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </motion.section>
  );
}