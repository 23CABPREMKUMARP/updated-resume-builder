import React from 'react';

interface TechTagProps {
  tech: string;
  color?: string; // optional for customization
}

const TechTag: React.FC<TechTagProps> = ({ tech, color }) => {
  const bgColor = color || 'bg-blue-100';
  const textColor = color?.replace('bg-', 'text-') || 'text-blue-800';

  return (
    <span
      className={`inline-block ${bgColor} ${textColor} text-xs font-medium mr-2 mb-1 px-2.5 py-0.5 rounded`}
    >
      {tech}
    </span>
  );
};

export default TechTag;
