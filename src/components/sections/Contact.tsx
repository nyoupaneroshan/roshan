import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Kathmandu, Nepal',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'roshan@11techmedia.com.np',
    },
    // {
    //   icon: Phone,
    //   title: 'Phone'
    //   // content: '+977 9876543210',
    // },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    } else if (formState.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      valid = false;
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formState.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      if (formRef.current) {
        formRef.current.reset();
      }
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-neutral-50 dark:bg-neutral-900">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="mb-4">
            Get In <span className="text-blue-800 dark:text-blue-400">Touch</span>
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div>
              <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-8">
                Feel free to reach out through any of the following channels. I'm always open to discussing new projects, opportunities, or partnerships.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400">
                    <item.icon size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">{item.title}</h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* <motion.div 
              className="flex space-x-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {['Github', 'LinkedIn', 'X', 'instagram'].map((social) => (
                <a 
                  key={social}
                  href={`https://${social}.com/nyoupaneroshan`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md transition-shadow duration-300 text-neutral-700 dark:text-neutral-300 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label={`${social} profile`}
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${social}/718096`} 
                    alt={social}
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </motion.div> */}
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3 bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="text-2xl font-medium mb-6">Send Me a Message</h3>
            
            <AnimatePresence mode="wait">
              {submitStatus === 'success' && (
                <motion.div 
                  className="mb-6 p-4 rounded-lg bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 flex items-center"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <CheckCircle className="mr-2" size={20} />
                  Your message has been sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  className="mb-6 p-4 rounded-lg bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400 flex items-center"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <AlertCircle className="mr-2" size={20} />
                  There was an error sending your message. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`block w-full px-4 py-3 rounded-lg border ${
                      errors.name 
                        ? 'border-red-500 dark:border-red-400' 
                        : 'border-neutral-300 dark:border-neutral-600'
                    } bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-200`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500 dark:text-red-400"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`block w-full px-4 py-3 rounded-lg border ${
                      errors.email 
                        ? 'border-red-500 dark:border-red-400' 
                        : 'border-neutral-300 dark:border-neutral-600'
                    } bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-200`}
                    placeholder="your@example.com"
                  />
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-red-500 dark:text-red-400"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
              </div>
              
              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Subject (Optional)
                </label>
                <input 
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Your Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className={`block w-full px-4 py-3 rounded-lg border ${
                    errors.message 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-neutral-300 dark:border-neutral-600'
                  } bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent resize-none transition-colors duration-200`}
                  placeholder="Hello, I'd like to discuss a potential project..."
                ></textarea>
                {errors.message && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500 dark:text-red-400"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>
              
              <motion.button 
                type="submit"
                className="btn btn-primary w-full flex justify-center items-center"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <Send size={18} className="mr-2" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;