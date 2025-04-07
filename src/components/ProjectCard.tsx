
import React from 'react';
import { cn } from '@/lib/utils';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { useIsMobile } from '@/hooks/use-mobile';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
  url: string;
}

const ProjectCard = ({ title, description, imageUrl, className, url }: ProjectCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a href={url}>
          <div className={cn("project-card group cursor-pointer", className)}>
            <div className="overflow-hidden rounded-md mb-3 relative">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              {/* Image with zoom effect */}
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full aspect-[4/3] sm:aspect-video object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
            
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-primary group-hover:translate-x-1 transition-transform duration-300 line-clamp-1">{title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{description}</p>
            
            {/* Animated underline indicator */}
            <div className="w-0 h-0.5 bg-primary mt-2 group-hover:w-full transition-all duration-300 ease-in-out"></div>
          </div>
        </a>
      </HoverCardTrigger>
      
      <HoverCardContent className={cn("w-[90vw] sm:w-80", {"hidden": isMobile})}>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">{title}</h4>
          <p className="text-xs text-muted-foreground">{description}</p>
          <div className="pt-2">
            <a href={url}><span className="text-xs bg-secondary/50 px-2 py-1 rounded-full text-primary">View Project</span></a>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ProjectCard;
