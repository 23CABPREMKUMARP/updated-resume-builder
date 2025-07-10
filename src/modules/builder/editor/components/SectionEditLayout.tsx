// src/modules/builder/editor/components/SectionEditLayout.tsx
import React from 'react';

const SectionEditLayout = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default SectionEditLayout;
