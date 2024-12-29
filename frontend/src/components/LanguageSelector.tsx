import React from 'react';
import { Language } from '../types/Problem';

interface LanguageSelectorProps {
  language: Language;
  onChange: (language: Language) => void;
}

export function LanguageSelector({ language, onChange }: LanguageSelectorProps) {
  return (
    <select
      value={language}
      onChange={(e) => onChange(e.target.value as Language)}
      className="px-2 py-1 border rounded-md text-sm"
    >
      <option value="java">Java</option>
      <option value="python">Python</option>
      <option value="cpp">C++</option>
    </select>
  );
}