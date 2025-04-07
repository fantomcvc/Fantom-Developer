
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ id, title, children, className }: SectionProps) => {
  return (
    <section id={id} className={cn("py-16", className)}>
      <h2 className="text-2xl font-semibold mb-8 text-primary">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
