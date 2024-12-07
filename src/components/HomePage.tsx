import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Users, Globe, Lightbulb, CheckCircle, Target, Award } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Hero Section -Modified to remove the button */}
      <div className="bg-gradient-to-b from-blue-50 to-[#f9fafb]">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">N</span>ational{' '}
              <span className="text-blue-600">R</span>esilience{' '}
              <span className="text-blue-600">P</span>latform
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering our nation with collaborative innovation and cutting-edge IT solutions to tackle crises and drive resilience
            </p>
          </div>
        </div>
      </div>

      {/* About the Website Section */}
      <div className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About the Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="text-lg text-gray-600 leading-relaxed">
                The National Resilience Platform is a groundbreaking initiative that connects talented professionals, 
                engineers, and innovators with critical national projects. Our platform serves as a bridge between 
                technological expertise and national security needs, fostering collaboration and innovation for a 
                more resilient future.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors duration-300">
                <h3 className="font-bold text-xl mb-2">500+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors duration-300">
                <h3 className="font-bold text-xl mb-2">1000+</h3>
                <p className="text-gray-600">Expert Contributors</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors duration-300">
                <h3 className="font-bold text-xl mb-2">50+</h3>
                <p className="text-gray-600">Partner Organizations</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors duration-300">
                <h3 className="font-bold text-xl mb-2">24/7</h3>
                <p className="text-gray-600">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Idea Section */}
      <div className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Main Idea</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Target className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Mission</h3>
              <p className="text-gray-600">
                To strengthen national security through technological innovation and collaboration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Lightbulb className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Vision</h3>
              <p className="text-gray-600">
                Creating a resilient future through community-driven technological solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Goal</h3>
              <p className="text-gray-600">
                Connecting experts with critical projects to solve national challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div id="how-it-works" className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">Browse Projects</h3>
              <p className="text-gray-600">Explore available projects that match your expertise</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">Choose Contribution</h3>
              <p className="text-gray-600">Select how you want to contribute - technically or financially</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">Submit Proposal</h3>
              <p className="text-gray-600">Present your ideas or make your contribution</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">4</div>
              <h3 className="font-bold mb-2">Start Contributing</h3>
              <p className="text-gray-600">Begin working on approved projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Cybersecurity Enhancement</h3>
              <p className="text-gray-600 mb-4">
                A team of experts developed an advanced threat detection system, improving national infrastructure security by 60%.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Emergency Response System</h3>
              <p className="text-gray-600 mb-4">
                Innovative AI-powered solution reduced emergency response times by 45% in critical situations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Data Analytics Platform</h3>
              <p className="text-gray-600 mb-4">
                Created a comprehensive data analysis system that helped prevent multiple security breaches.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Add hover effect to the container */}
      <div className="bg-[#f9fafb] py-20">
        <div className="container mx-auto px-4 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
          <h2 className="text-3xl font-bold mb-8">Ready to Make a Difference?</h2>
          <button
            onClick={() => navigate('/signup')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Join Our Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 