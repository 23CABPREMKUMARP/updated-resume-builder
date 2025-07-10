'use client';

import { StyledButton } from '../builder/nav-bar/atoms';
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { Button } from '@mui/material';
import FeatureSection from './components/Feature';
import Person from './components/Person';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HomeLayout.module.css';

const HomeLayout = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative">
      {/* 🎯 Custom 3D Banner */}
      <div className={styles.banner}>
        <div className={styles.slider} style={{ '--quantity': 10 } as React.CSSProperties}>
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={styles.item}
              style={{ '--position': i + 1 } as React.CSSProperties}
            >
              <img
                src={`/images/dragon_${i + 1}.${i === 0 ? 'png' : 'jpg'}`}
                alt={`dragon_${i + 1}`}
              />
            </div>
          ))}
        </div>
        <section className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-50">
          <Link href="/builder">
            <Button
              variant="contained"
              className="animate-neon text-black text-xl font-bold italic px-8 py-2 rounded-lg transition-all duration-300 hover:scale-105 neon-stroke bg-white/80 backdrop-blur"
            >
              Start Building Your Resume
            </Button>
          </Link>
        </section>
        <div className={styles.content}>
          <h1 data-content="“Build professional resumes in minutes — no design skills needed.”">
            “Build professional resumes in minutes — no design skills needed.”
          </h1>
          <div className={styles.author}>
            {/* You can add something like a name or label here */}
          </div>
          <div className={styles.model}></div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-30 bg-opacity-80 backdrop-clear-md shadow-md py-2 px-6 flex justify-between items-center">
        <Link href="/">
          <Image src="/icons/resume-icon.png" alt="logo" width={70} height={36} />
        </Link>
        <div className="flex gap-4 p-4 items-center">
          <Link href="/builder">
            <StyledButton variant="text" className="neon-text">
              Editor
            </StyledButton>
          </Link>
          <Link href="#contribute">
            <StyledButton variant="text" className="neon-text">
              Contribute
            </StyledButton>
          </Link>
          <Link href="#about-us">
            <StyledButton variant="text" className="neon-text">
              About Me
            </StyledButton>
          </Link>
          <a href="https://github.com/23CABPREMKUMARP" target="_blank" rel="noreferrer">
            <BsGithub className="h-6 w-6 neon-text" />
          </a>
        </div>
      </nav>

      {/* CTA Button */}

      {/* Features */}
      <section className="bg-white text-gray-800 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeatureSection />
          </div>
        </div>
      </section>

      {/* Contribute */}
      <section
        id="contribute"
        className="bg-gradient-to-r from-blue-100 via-blue-50 to-white py-20 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Want to contribute a new template?</h2>
          <p className="mb-6">
            If you love React and design, contribute your own resume templates to our open-source
            project.
          </p>
          <a href="https://github.com/23CABPREMKUMARP" target="_blank" rel="noreferrer">
            <Button variant="contained" className="bg-blue-600 hover:bg-blue-700">
              Contribute on GitHub
            </Button>
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about-us" className="bg-white text-black py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Meet the Developer</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            A passionate developer building open-source tools for students and professionals.
          </p>
          <div className="flex justify-center flex-wrap gap-10">
            <Person />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-transparent text-black text-[25px] py-6 text-center">
        © 2025 Premkumar | Resume Builder License By LicenseSpring.
      </footer>
    </motion.div>
  );
};

export default HomeLayout;
