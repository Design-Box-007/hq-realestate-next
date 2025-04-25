'use client'
import React, { useRef, useState, ChangeEvent, FormEvent } from 'react';
import './Contact.css';
import { LuCircleArrowRight } from 'react-icons/lu';
import LeftToRightReveal from '../LeftToRightReveal';
// import TopToBottomReveal from '../TopToBottomReveal'
import VisibleReveal from '../VisibleReveal';
import emailjs from 'emailjs-com'

// Define the type for form data state
interface FormData {
  name: string;
  email: string;
  mobile: string;
  propertyType: string;
  description: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    propertyType: '',
    description: '',
  });

  const form = useRef<HTMLFormElement | null>(null); // Ref type for the form
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Prepare the data to match your template
    const templateParams = {
      to_name: 'Housing Quest Realestates', // Replace with the actual recipient's name or a variable
      from_name: formData.name,
      message: `
        Email: ${formData.email}
        Mobile: ${formData.mobile}
        Property Type: ${formData.propertyType}
        Description: ${formData.description}
      `,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KE || ""
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setMessage('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          propertyType: '',
          description: '',
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setMessage('Failed to send your message. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id='contact' className="contact my-5">
      <div className='row'>
        <div className='col-md-8'>
          <LeftToRightReveal>
            <div>
              <h2 className='contact-title'>Lets Have a Quick<br /> Conversation</h2>
            </div>
          </LeftToRightReveal>
        </div>
        <div className='col-md-4'>
          <div className='contact-card'>
            Get a <br />Quote
            <span className='contact-icon'>
              <LuCircleArrowRight />
            </span>
          </div>
        </div>
      </div>

      <form ref={form} onSubmit={handleSubmit}>
        <VisibleReveal>
          <div className='row'>
            <div className='col-md-6'>
              <input
                type="text"
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className='contact-input'
                required
              />
            </div>
            <div className='col-md-6'>
              <input
                type="text"
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className='contact-input'
                required
              />
            </div>
            <div className='col-md-6'>
              <input
                type="tel"
                name='mobile'
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile No"
                className='contact-input'
                required
              />
            </div>
            <div className='col-md-6'>
              <select
                name='propertyType'
                value={formData.propertyType}
                onChange={handleChange}
                required
                className='contact-input custom-dropdown'
              >
                <option value="">Select Property Type</option>
                <option value='Off Plan'>Off Plan</option>
                <option value='Ready To Move'>Ready To Move</option>
                <option value='Rent'>Rent</option>
              </select>
            </div>
            <div className='col-md-12'>
              <textarea
                placeholder="Message"
                name='description'
                value={formData.description}
                onChange={handleChange}
                className='contact-input'
                required
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <button className='contact-button' type="submit">
                {loading ? 'Submitting...' : 'Submit Information'}
                <LuCircleArrowRight />
              </button>
            </div>
            {message && <div className='col-md-12 mt-3'>{message}</div>}
          </div>
        </VisibleReveal>
      </form>
    </section>
  );
}

export default Contact;
