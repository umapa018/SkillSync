import React from 'react';
import { Code2, ArrowRight, Brain, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Practice Problems",
      description: "Sharpen your coding skills with our curated collection of programming challenges"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Compete",
      description: "Join coding contests and compete with developers worldwide"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community",
      description: "Learn from others by exploring different solutions and approaches"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Master Your Coding Skills</h1>
            <p className="text-xl text-gray-600 mb-8">
              Practice coding problems, prepare for interviews, and improve your programming skills
            </p>
            <Link
              to="/problems"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Start Coding
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-green-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}