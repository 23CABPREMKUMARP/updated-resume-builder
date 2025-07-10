// ✅ File: src/modules/builder/editor/components/TextInput.tsx

import React from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => (
  <div className="flex flex-col gap-1 w-full">
    {label && (
      <label className="text-xs font-medium text-gray-600">{label}</label>
    )}
    <input
      {...props}
      className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
  </div>
);
