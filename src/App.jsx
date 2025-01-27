import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import pythonLogo from './assets/python_logo.png';
import csharpLogo from './assets/csharp_logo.png';
import sqlLogo from './assets/sql_logo.png';
import javaLogo from './assets/java_logo.png';
import dotnetLogo from './assets/dotnet_logo.png';
import apacheSparkLogo from './assets/apache_spark_logo.png';

export default function JoshuaYuanPortfolio() {
  const [modalContent, setModalContent] = useState(null);

  const handleCardClick = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <main className="min-h-screen bg-[#1E1E1E] text-gray-200 p-4">
      {/* Header */}
      <header className="mb-16 text-center">
        <motion.h1
          className="text-6xl font-extrabold text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Joshua Yuan
        </motion.h1>
        <motion.p
          className="text-xl text-gray-400 mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Aspiring Software Engineer | Innovator | Problem Solver
        </motion.p>
      </header>

      {/* About Me Section */}
      <section className="mb-24 text-center">
        <motion.img
          src="src/assets/josh.png"
          alt="Joshua Yuan"
          className="rounded-full w-56 h-56 border-4 border-gray-700 shadow-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-gray-300 mb-4">About Me</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Hi, I'm Joshua! I'm passionate about creating innovative solutions through code. I thrive on building engaging web applications and exploring new technologies. Beyond coding, I enjoy hiking, capturing stunning landscapes with my camera, and inspiring others through storytelling on my YouTube channel.
          </p>
          <a
            href="https://www.youtube.com/@JoshingNature"
            className="flex items-center justify-center text-gray-300 hover:underline text-lg font-medium mt-4 gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PlayCircle className="w-6 h-6" />
            <span>Visit my YouTube Channel: JoshingNature</span>
          </a>
        </motion.div>
      </section>

      <div className="h-1 w-4/5 mx-auto bg-gray-700 rounded mb-12"></div>

      {/* Work Experience Section */}
      <section className="mb-12">
        <motion.h2
          className="text-4xl font-bold text-gray-300 mb-8 text-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            className="bg-gray-100 text-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl relative transition cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onClick={() =>
              handleCardClick({
                title: 'Software Development Engineer Intern',
                content: `
                  At Hopsteiner, I contributed as a Software Development Engineer Intern, digitizing the facility tour process using .NET Blazor.
                  My key responsibilities included:
                  - Designing and developing user-friendly interfaces for seamless operation.
                  - Implementing SQL Server to manage facility data effectively.
                  - Collaborating with cross-functional teams to reduce manual workloads, streamlining workflows and improving overall operational efficiency.`,
                technologies: [dotnetLogo, csharpLogo, sqlLogo]
              })
            }
          >
            <div className="absolute top-4 right-4 flex gap-2">
              <img src={dotnetLogo} alt=".NET" className="h-8" />
              <img src={csharpLogo} alt="C#" className="h-8" />
              <img src={sqlLogo} alt="SQL" className="h-8" />
            </div>
            <h3 className="font-bold text-xl mb-3">Software Development Engineer Intern</h3>
            <p className="text-gray-600 mb-3">
              Digitized facility tours for Hopsteiner using .NET Blazor, reducing manual workload and improving efficiency.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-100 text-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl relative transition cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onClick={() =>
              handleCardClick({
                title: 'AI Research Intern',
                content: `
                  As an AI Research Intern, I focused on climate prediction using geospatial big data. My contributions included:
                  - Analyzing geospatial datasets with Apache Spark for scalable computation.
                  - Developing Python scripts to preprocess NASA metadata for effective insights.
                  - Collaborating with researchers to fine-tune prediction models, enabling advanced climate analysis.`,
                technologies: [apacheSparkLogo, pythonLogo]
              })
            }
          >
            <div className="absolute top-4 right-4 flex gap-2">
              <img src={apacheSparkLogo} alt="Apache Spark" className="h-8" />
              <img src={pythonLogo} alt="Python" className="h-8" />
            </div>
            <h3 className="font-bold text-xl mb-3">AI Research Intern</h3>
            <p className="text-gray-600 mb-3">
              Conducted climate prediction analysis using geospatial big data, NASA metadata, and Apache Spark.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <motion.h2
          className="text-4xl font-bold text-gray-300 mb-8 text-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            className="bg-gray-100 text-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl relative transition cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onClick={() =>
              handleCardClick({
                title: 'Predicting Drug Diffusion in Hydrogels',
                content: `
                  This project involved implementing neural networks to predict drug diffusion rates within hydrogels. Key tasks included:
                  - Developing deep learning models in Python using TensorFlow.
                  - Employing hyperparameter tuning for optimal predictions.
                  - Analyzing experimental datasets for model validation.`,
                technologies: [pythonLogo]
              })
            }
          >
            <div className="absolute top-4 right-4 flex gap-2">
              <img src={pythonLogo} alt="Python" className="h-8" />
            </div>
            <h3 className="font-bold text-xl mb-3">Predicting Drug Diffusion in Hydrogels</h3>
            <p className="text-gray-600 mb-3">
              Implemented a neural network to predict diffusion rates for microneedle technology.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-100 text-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl relative transition cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onClick={() =>
              handleCardClick({
                title: 'Student Directory Mobile App',
                content: `
                  Designed an iOS app for school directory management. Key features included:
                  - Developing a backend in Java with RESTful APIs for efficient data handling.
                  - Creating a polished frontend using Swift for seamless user experience.
                  - Utilizing MySQL for secure data storage and retrieval.`,
                technologies: [javaLogo, sqlLogo]
              })
            }
          >
            <div className="absolute top-4 right-4 flex gap-2">
              <img src={javaLogo} alt="Java" className="h-8" />
              <img src={sqlLogo} alt="SQL" className="h-8" />
            </div>
            <h3 className="font-bold text-xl mb-3">Student Directory Mobile App</h3>
            <p className="text-gray-600 mb-3">
              Designed a school directory iOS app backed by a Java RESTful API.
            </p>
          </motion.div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="mb-12">
        <motion.h2
          className="text-4xl font-bold text-gray-300 mb-8 text-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          My YouTube Videos
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/e7aWOtDSPzA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/0Mp7qnD3LLA"
            title="YouTube Shorts player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Modal */}
      {modalContent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white text-black p-8 rounded-lg shadow-lg w-4/5 max-w-3xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={closeModal}
            >
              Close
            </button>
            <h3 className="text-3xl font-bold mb-6">{modalContent.title}</h3>
            <p className="text-lg leading-7 mb-6 whitespace-pre-line">{modalContent.content}</p>
            <div className="flex justify-center gap-4">
              {modalContent.technologies.map((tech, index) => (
                <img key={index} src={tech} alt="Technology Logo" className="h-10" />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-gray-300 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let's collaborate! Reach out to me via email or connect with me on LinkedIn.
        </motion.p>
        <a
          href="mailto:Joshua.Yuano@gmail.com"
          className="text-gray-300 hover:underline text-lg font-medium"
        >
          Email: Joshua.Yuano@gmail.com
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/jyuan1"
          className="text-gray-300 hover:underline text-lg font-medium"
        >
          LinkedIn: https://www.linkedin.com/in/jyuan1
        </a>
        <br />
        <a
          href="https://github.com/josh-yuan"
          className="text-gray-300 hover:underline text-lg font-medium"
        >
          GitHub: https://github.com/josh-yuan
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500">
        <p>© 2025 JoshuaYuan.com | Built with passion and creativity</p>
      </footer>
    </main>
  );
}
