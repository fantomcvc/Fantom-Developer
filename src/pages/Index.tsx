
import React from 'react';
import GhostLogo from '@/components/GhostLogo';
import ProjectCard from '@/components/ProjectCard';
import SocialLink from '@/components/SocialLink';
import Section from '@/components/Section';
import { ArrowDown, Star } from 'lucide-react';

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-5">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col justify-center items-center animate-fade-in">
          <GhostLogo />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 text-center">Fantom Developer</h1>
          <div className="mt-3 inline-flex items-center gap-2 bg-secondary/50 px-4 py-1 rounded-full">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">PytDevs</span>
          </div>
          
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-center text-muted-foreground max-w-lg">
          I create elegant and efficient Python applications with a focus on clean code and seamless functionality.
          </p>
          
          <div className="mt-8 sm:mt-12 animate-hover-bounce">
            <ArrowDown className="text-primary w-6 h-6" />
          </div>
        </div>
        
        {/* About Section */}
        <Section id="about" title="About Me">
          <div className="space-y-4">
            <p className="text-muted-foreground">
            Hey! I'm Fantom — a Python developer with 4 years of experience specializing in Telegram bots and API development. I love building smart, functional tools that actually get things done.
            </p>
            <p className="text-muted-foreground">
            My philosophy? Fast, clean, and cost-effective. I write code that’s easy to maintain and always aim for that perfect balance between quality and efficiency.
            For me, bots aren’t just tools — they’re a way to automate, optimize, and sometimes even surprise. Need something awesome? Just say hi 
            </p>
          </div>
        </Section>
        
        {/* Projects Section */}
        <Section id="projects" title="Recent Projects">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <ProjectCard 
              title="Phantom's Den"
              description="This minimalist bot platform allows users to browse, purchase, and receive digital scripts directly within Telegram. It features seamless payment integration, secure file delivery, and admin controls for managing listings and sales."
              imageUrl="https://i.imgur.com/ZeUbRwG.jpeg"
              url='https://t.me/pytdevbot?start=r-8129916837'
            />
            <ProjectCard 
              title="AioHelperSMS"
              description="AioHelperSMS is an asynchronous Python API wrapper for the HelperSMS service, providing a simple and efficient way to interact with their API. It supports various operations, such as retrieving account balance, getting available countries for messaging, and handling exceptions like incorrect API keys. This library allows users to integrate HelperSMS functionalities into Python applications smoothly using async and sync versions of the API client."
              imageUrl="https://i.imgur.com/bPvWeZ1.png"
              url='https://github.com/fantomcvc/aiohelpersms'
            />
            <ProjectCard 
              title="AioAntiPublic"
              description="AioAntiPublic is an asynchronous Python library for interacting with the AntiPublic.cc API, allowing you to check and retrieve information about bank cards and their BIN codes. The library supports asynchronous operations, enabling efficient integration into Python applications."
              imageUrl="https://i.imgur.com/ASnvsxr.png"
              url='https://github.com/fantomcvc/aioantipublic'
            />
          </div>
        </Section>
        
        {/* Contact Section */}
        <Section id="contact" title="Get In Touch">
          <div className="flex flex-wrap gap-3">
            <SocialLink 
              platform="github" 
              username="fantomcvc" 
              url="https://github.com/fantomcvc" 
            />
            <SocialLink 
              platform="telegram" 
              username="devrift.t.me" 
              url="https://t.me/devrift" 
            />
          </div>
        </Section>
        
        {/* Footer */}
        <footer className="py-6 sm:py-8 text-center text-xs sm:text-sm text-muted-foreground border-t border-secondary">
          <p>© {new Date().getFullYear()} PytDevs. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
