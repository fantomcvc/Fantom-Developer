import React from 'react';
import { Github, ExternalLink } from 'lucide-react'; // додали Telegram

interface SocialLinkProps {
  platform: 'github' | 'telegram';
  username: string;
  url: string;
}

const SocialLink = ({ platform, username, url }: SocialLinkProps) => {
  const getIcon = () => {
    switch (platform) {
      case 'github':
        return <Github className="w-5 h-5 mr-2" />;
      case 'telegram': 
        return <ExternalLink className="w-5 h-5 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="social-icon flex items-center py-2 px-4 rounded-full bg-secondary hover:bg-accent/10"
    >
      {getIcon()}
      <span>{username}</span>
    </a>
  );
};

export default SocialLink;
