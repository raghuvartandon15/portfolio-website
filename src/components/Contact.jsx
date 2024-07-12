import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID || 'service_j33i7wk';
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID || 'template_lty2f6b';
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY || 'N05lbDIN20YqWlk7c';

    emailjs
      .send(serviceId, templateId,
        {
          from_name: form.name,
          to_name: "Raghuvar",
          from_email: form.email,
          to_email: "raghuvartandon15@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(
        (response) => {
          console.log('Email successfully sent!', response.status, response.text);
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error('Email sending failed:', error);
          setLoading(false);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center gap-4">
          <a href="https://www.facebook.com/share/14Vbcm7vFUBH9uyx/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} className="text-white hover:text-blue-600" />
          </a>
          <a href="https://www.instagram.com/raghuvar.tandon?igsh=OXE1dzNwejByMWNs&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-white hover:text-pink-600" />
          </a>
          <a href="https://www.linkedin.com/in/raghuvar-tandon-180b69273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="text-white hover:text-blue-800" />
          </a>
          <a href="https://github.com/raghuvartandon15" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="text-white hover:text-gray-600" />
        </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
