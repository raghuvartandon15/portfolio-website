import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard=({index, title, icon})=>{
  return (
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondry text-[17px] max-w-3xl leading-[30px]'>
    As a final-year Bachelor of Computer Applications student, I have built a strong foundation in programming, machine learning, and artificial intelligence. Proficient in Python, Java, C/C++, and cloud technologies, I specialize in ML, NLP, deep learning, and MLOps—applying these skills to real-world projects like AI-driven resume screening, recommendation systems, and computer vision applications.

A team-oriented problem solver, I value collaboration in technical projects and excel in deploying AI models for scalable, cloud-based solutions. Passionate about innovation and continuous learning, I stay updated with emerging technologies.

Beyond software, I have experience working with hardware components like Arduino, integrating AI with IoT for automation and smart systems. I enjoy building AI-powered hardware projects that combine computer vision, embedded systems, and real-time processing for practical applications.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")