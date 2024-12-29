import React from 'react';
import { CodeEditor } from '../components/CodeEditor';
import { ProblemDescription } from '../components/ProblemDescription';
import { LanguageSelector } from '../components/LanguageSelector';
import { problems } from '../data/problems';
import { PlayCircle } from 'lucide-react';
import { Language } from '../types/Problem';

export function ProblemsPage() {
  const problem = problems[0];
  const [language, setLanguage] = React.useState<Language>('java');
  const [code, setCode] = React.useState(problem.starterCode[language]);

  // Update code when language changes
  React.useEffect(() => {
    setCode(problem.starterCode[language]);
  }, [language, problem.starterCode]);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-2 gap-6 h-[calc(100vh-5rem)]">
        {/* Problem Description */}
        <div className="bg-white rounded-lg shadow-sm overflow-y-auto">
          <ProblemDescription problem={problem} />
        </div>

        {/* Code Editor */}
        <div className="bg-white rounded-lg shadow-sm flex flex-col">
          <div className="border-b p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="font-medium">Solution</h2>
              <LanguageSelector language={language} onChange={setLanguage} />
            </div>
            <button
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              onClick={() => console.log('Run code')}
            >
              <PlayCircle className="h-5 w-5" />
              Run
            </button>
          </div>
          <div className="flex-1">
            <CodeEditor 
              code={code} 
              onChange={setCode}
              language={language}
            />
          </div>
        </div>
      </div>
    </div>
  );
}