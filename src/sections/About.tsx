import React from 'react';
import { Calendar, Award, HardDrive } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import useInView from '../hooks/useInView';

const About: React.FC = () => {
  const [contentRef, isContentInView] = useInView<HTMLDivElement>();
  const [statsRef, isStatsInView] = useInView<HTMLDivElement>();
  
  return (
    <section 
      id="about" 
      className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto">
        <SectionTitle 
          title="About Me" 
          subtitle="My background, experience, and why I love what I do."
        />
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-2/5 relative">
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Jieun"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-indigo-600 opacity-10" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-4 border-indigo-600 dark:border-indigo-400 rounded-lg -z-10 transition-colors duration-300" />
          </div>
          
          <div 
            ref={contentRef}
            className={`w-full lg:w-3/5 ${
              isContentInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            } transition-all duration-700 ease-out`}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Creative Developer & Designer
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">
              I'm a passionate web developer and designer with over 5 years of experience creating digital experiences that people love. My journey in tech began with a degree in design, which evolved into a deep love for coding and bringing designs to life.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">
              I specialize in building modern, responsive websites and applications using React, TypeScript, and other cutting-edge technologies. My approach combines technical expertise with an eye for design, allowing me to create solutions that are both beautiful and functional.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-300">
              When I'm not coding, you can find me exploring new design trends, participating in hackathons, or mentoring aspiring developers. I believe in continuous learning and pushing the boundaries of what's possible on the web.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button href="/resume.pdf" variant="outline">
                Download Resume
              </Button>
              <Button href="#contact">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        
        <div 
          ref={statsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 ${
            isStatsInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          } transition-all duration-700 ease-out`}
        >
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mr-4 transition-colors duration-300">
                <Calendar className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Experience</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
              5+ years of professional experience in web development and design, working with clients from startups to enterprise.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mr-4 transition-colors duration-300">
                <HardDrive className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Projects</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Completed 50+ projects ranging from personal websites to complex web applications and e-commerce platforms.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center mr-4 transition-colors duration-300">
                <Award className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Achievements</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Recognized with multiple design and development awards, including Best UI/UX at the Web Design Awards 2023.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;