export interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  examples: Example[];
  constraints: string[];
  starterCode: {
    java: string;
    python: string;
    cpp: string;
  };
}

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export type Language = 'java' | 'python' | 'cpp';