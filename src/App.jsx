import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Leaf } from 'lucide-react';
import pythonLogo from './assets/python_logo.png';
import csharpLogo from './assets/csharp_logo.png';
import sqlLogo from './assets/sql_logo.png';
import javaLogo from './assets/java_logo.png';
import apacheSparkLogo from './assets/apache_spark_logo.png';
import profPic from './assets/josh.png';

export default function JoshuaYuanPortfolio() {
  const [modalContent, setModalContent] = useState(null);

  const handleCardClick = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <main className="min-h-screen bg-[#F5F1E6] bg-noise-texture bg-cover p-4">
      {/* Header */}
      <header className="mb-16 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#C4DFAA]/20 blur-3xl rounded-full"></div>
        <motion.h1
          className="text-6xl font-bold text-[#2F4F4F] mb-4 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Leaf className="absolute -left-12 top-4 text-[#7BA780] w-8 h-8" />
          Joshua Yuan
          <Leaf className="absolute -right-12 top-4 text-[#7BA780] w-8 h-8 transform rotate-180" />
        </motion.h1>
        <motion.p
          className="text-xl text-[#6B6B6B] font-light"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Aspiring Software Engineer | Creative Technologist
        </motion.p>
      </header>

      {/* About Me Section */}
      <section className="mb-24 text-center">
        <motion.div
          className="bg-[#FFFFFFCC] backdrop-blur-sm rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-[#00000008] max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-8 mb-8">
            <motion.img
              src = {profPic}
              alt="Joshua Yuan"
              className="w-48 h-48 rounded-2xl border-4 border-[#EBE3D5] shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <div className="text-left">
              <h2 className="text-3xl font-semibold text-[#40513B] mb-4">About Me</h2>
              <p className="text-[#6B6B6B] leading-relaxed mb-4">
                Bridging technology and nature through code. I specialize in creating human-centered solutions that blend technical excellence with aesthetic sensibility. When I'm not coding, you'll find me exploring mountain trails or capturing nature's beauty through my lens.
              </p>
              <a
                href="https://www.youtube.com/@JoshingNature"
                className="inline-flex items-center text-[#7BA780] hover:text-[#5A8A5F] transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlayCircle className="mr-2 w-5 h-5" />
                <span className="border-b border-transparent group-hover:border-[#7BA780]">
                  Explore Nature Through My Lens
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="h-px w-4/5 mx-auto bg-[#EBE3D5] rounded mb-12"></div>

      {/* Work Experience Section */}
      <section className="mb-12">
        <motion.h2
          className="text-4xl font-bold text-[#40513B] mb-8 text-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <motion.div
            className="bg-[#FEFCF6] rounded-xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow cursor-pointer border border-[#EBE3D5]"
            whileHover={{ scale: 1.02 }}
            onClick={() =>
              handleCardClick({
                title: 'Software Development Engineer Intern',
                content: `At Hopsteiner, I contributed as a Software Development Engineer Intern, digitizing the facility tour process using .NET Blazor. My key responsibilities included:
                  - Designing and developing user-friendly interfaces for seamless operation
                  - Implementing SQL Server to manage facility data effectively
                  - Collaborating with cross-functional teams to reduce manual workloads`,
                technologies: [csharpLogo, sqlLogo]
              })
            }
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-[#40513B]">Hopsteiner</h3>
              <div className="flex space-x-2">
                <div className="bg-[#7BA780]/10 px-3 py-1 rounded-full text-[#5A8A5F] text-sm">
                  .NET Blazor
                </div>
              </div>
            </div>
            <p className="text-[#6B6B6B] mb-4 leading-relaxed">
              Revolutionized facility tours through digital transformation, cutting manual processes by 40%.
            </p>
            <div className="border-t border-[#EBE3D5] pt-4 flex items-center justify-between">
              <span className="text-[#7BA780] text-sm">2023 Summer</span>
              <div className="flex space-x-2">
                <img src={csharpLogo} alt="C#" className="h-6 w-6" />
                <img src={sqlLogo} alt="SQL" className="h-6 w-6" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-[#FEFCF6] rounded-xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow cursor-pointer border border-[#EBE3D5]"
            whileHover={{ scale: 1.02 }}
            onClick={() =>
              handleCardClick({
                title: 'AI Research Intern',
                content: `As an AI Research Intern, I focused on climate prediction using geospatial big data. My contributions included:
                  - Analyzing geospatial datasets with Apache Spark
                  - Developing Python scripts to preprocess NASA metadata
                  - Fine-tuning prediction models for climate analysis`,
                technologies: [apacheSparkLogo, pythonLogo]
              })
            }
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-[#40513B]">AI Research</h3>
              <div className="flex space-x-2">
                <div className="bg-[#7BA780]/10 px-3 py-1 rounded-full text-[#5A8A5F] text-sm">
                  Apache Spark
                </div>
              </div>
            </div>
            <p className="text-[#6B6B6B] mb-4 leading-relaxed">
              Conducted climate prediction analysis using geospatial big data and NASA metadata.
            </p>
            <div className="border-t border-[#EBE3D5] pt-4 flex items-center justify-between">
              <span className="text-[#7BA780] text-sm">2023 Winter</span>
              <div className="flex space-x-2">
                <img src={apacheSparkLogo} alt="Apache Spark" className="h-6 w-6" />
                <img src={pythonLogo} alt="Python" className="h-6 w-6" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <motion.h2
          className="text-4xl font-bold text-[#40513B] mb-8 text-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <motion.div 
            className="relative bg-white rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#EBE3D5]"
            whileHover={{ scale: 1.02 }}
            onClick={() =>
              handleCardClick({
                title: 'Predicting Drug Diffusion in Hydrogels',
                content: `This project involved implementing neural networks to predict drug diffusion rates within hydrogels:
                  - Developed deep learning models in Python using TensorFlow
                  - Achieved 92% prediction accuracy through hyperparameter tuning
                  - Analyzed experimental datasets for model validation`,
                technologies: [pythonLogo]
              })
            }
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#C4DFAA]/20 to-[#7BA780]/10"></div>
            <div className="relative p-6">
              <h3 className="text-xl font-semibold text-[#40513B] mb-2">Drug Diffusion Predictor</h3>
              <p className="text-[#6B6B6B] mb-4">
                Neural network model predicting pharmaceutical release rates with 92% accuracy.
              </p>
              <div className="flex items-center space-x-2">
                <div className="h-3 w-full bg-[#EBE3D5] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#7BA780] to-[#5A8A5F]" 
                    style={{ width: '92%' }}
                  ></div>
                </div>
                <span className="text-[#7BA780] text-sm">92% Accuracy</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative bg-white rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#EBE3D5]"
            whileHover={{ scale: 1.02 }}
            onClick={() =>
              handleCardClick({
                title: 'Student Directory Mobile App',
                content: `Designed an iOS app for school directory management:
                  - Developed backend in Java with RESTful APIs
                  - Created polished frontend using Swift
                  - Utilized MySQL for secure data storage`,
                technologies: [javaLogo, sqlLogo]
              })
            }
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#C4DFAA]/20 to-[#7BA780]/10"></div>
            <div className="relative p-6">
              <h3 className="text-xl font-semibold text-[#40513B] mb-2">Student Directory</h3>
              <p className="text-[#6B6B6B] mb-4">
                iOS app with Java backend for efficient school directory management.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#7BA780] rounded-full"></div>
                  <span className="text-[#6B6B6B] text-sm">Java Backend</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#5A8A5F] rounded-full"></div>
                  <span className="text-[#6B6B6B] text-sm">MySQL Database</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="mb-12 max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-[#40513B] mb-8 text-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          My YouTube Videos
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#EBE3D5]">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/e7aWOtDSPzA"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#EBE3D5]">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/0Mp7qnD3LLA"
              title="YouTube Shorts player"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-[#00000040] backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#FEFCF6] rounded-xl max-w-2xl w-full p-8 shadow-2xl border border-[#EBE3D5] relative">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-[#6B6B6B] hover:text-[#40513B] transition-colors"
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold text-[#40513B] mb-4 flex items-center">
              <Leaf className="w-6 h-6 mr-2 text-[#7BA780]" />
              {modalContent.title}
            </h3>
            <p className="text-[#6B6B6B] leading-relaxed mb-6 whitespace-pre-line">
              {modalContent.content}
            </p>
            <div className="border-t border-[#EBE3D5] pt-6 flex items-center justify-between">
              <span className="text-[#7BA780] text-sm">Technologies Used</span>
              <div className="flex space-x-3">
                {modalContent.technologies.map((tech, index) => (
                  <img 
                    key={index} 
                    src={tech} 
                    className="h-8 w-8 object-contain grayscale hover:grayscale-0 transition-all"
                    alt="Technology"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto mb-24 px-4">
        <div className="relative bg-white rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.05)] overflow-hidden border border-[#EBE3D5]">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#C4DFAA]/20 rounded-full blur-3xl"></div>
          <h2 className="text-2xl font-semibold text-[#40513B] mb-6">Let's Grow Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[#6B6B6B]">
                <Leaf className="w-5 h-5 text-[#7BA780]" />
                <a href="mailto:Joshua.Yuano@gmail.com" className="hover:text-[#5A8A5F] transition-colors">
                  Joshua.Yuano@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-[#6B6B6B]">
                <Leaf className="w-5 h-5 text-[#7BA780]" />
                <a href="https://www.linkedin.com/in/jyuan1" className="hover:text-[#5A8A5F] transition-colors">
                  linkedin.com/in/jyuan1
                </a>
              </div>
              <div className="flex items-center space-x-2 text-[#6B6B6B]">
                <Leaf className="w-5 h-5 text-[#7BA780]" />
                <a href="https://github.com/josh-yuan" className="hover:text-[#5A8A5F] transition-colors">
                  github.com/josh-yuan
                </a>
              </div>
            </div>
            <div className="border-l border-[#EBE3D5] pl-6">
              <p className="text-[#6B6B6B] italic mb-2">
                "In every walk with nature, one receives far more than he seeks."
              </p>
              <p className="text-[#7BA780]">- John Muir</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-[#6B6B6B] text-sm mb-8">
        <p>Crafted with care • © 2025 Joshua Yuan</p>
        <div className="mt-2 flex justify-center space-x-2">
          <Leaf className="w-4 h-4 text-[#7BA780]" />
          <Leaf className="w-4 h-4 text-[#7BA780]" />
          <Leaf className="w-4 h-4 text-[#7BA780]" />
        </div>
      </footer>
    </main>
  );
}