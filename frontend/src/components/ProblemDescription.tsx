import React from 'react';
import { Problem } from '../types/Problem';
import { Badge } from './ui/Badge';

interface ProblemDescriptionProps {
  problem: Problem;
}

export function ProblemDescription({ problem }: ProblemDescriptionProps) {
  const difficultyColor = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800'
  }[problem.difficulty];

  return (
    <div className="px-6 py-4">
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-2xl font-bold">{problem.title}</h1>
        <Badge className={difficultyColor}>{problem.difficulty}</Badge>
      </div>
      
      <div className="prose max-w-none">
        <p className="whitespace-pre-wrap">{problem.description}</p>
        
        <h3 className="font-medium mt-6 mb-3">Examples:</h3>
        {problem.examples.map((example, index) => (
          <div key={index} className="mb-4">
            <p className="font-medium">Example {index + 1}:</p>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p><strong>Input:</strong> {example.input}</p>
              <p><strong>Output:</strong> {example.output}</p>
              {example.explanation && (
                <p><strong>Explanation:</strong> {example.explanation}</p>
              )}
            </div>
          </div>
        ))}

        <h3 className="font-medium mt-6 mb-3">Constraints:</h3>
        <ul className="list-disc pl-6">
          {problem.constraints.map((constraint, index) => (
            <li key={index}>{constraint}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}