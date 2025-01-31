import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShoppingCart, 
  Truck, 
  BarChart2, 
  TrendingUp, 
  Cloud,
  ArrowRight
} from 'lucide-react';

const categories = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    description: 'Build and scale your online store with modern e-commerce solutions',
    icon: ShoppingCart,
    features: ['Custom E-commerce Platforms', 'Payment Integration', 'Inventory Management', 'Shopping Cart Solutions']
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    description: 'Optimize your supply chain with intelligent logistics solutions',
    icon: Truck,
    features: ['Fleet Management', 'Route Optimization', 'Warehouse Management', 'Real-time Tracking']
  },
  {
    id: 'analytics',
    title: 'Business Analytics',
    description: 'Transform data into actionable business insights',
    icon: BarChart2,
    features: ['Data Visualization', 'Predictive Analytics', 'Business Intelligence', 'Custom Reports']
  },
  {
    id: 'sales',
    title: 'Sales & Marketing',
    description: 'Boost your sales with advanced marketing solutions',
    icon: TrendingUp,
    features: ['CRM Integration', 'Lead Generation', 'Marketing Automation', 'Sales Analytics']
  },
  {
    id: 'cloud',
    title: 'Cloud Services',
    description: 'Scale your infrastructure with modern cloud solutions',
    icon: Cloud,
    features: ['Cloud Migration', 'DevOps', 'Serverless Architecture', 'Cloud Security']
  }
];

const ServiceCategories: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f9fafb] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                onClick={() => navigate(`/services/${category.id}/applications`)}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                <div className="space-y-2">
                  {category.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Coming Soon Card */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-center items-center h-full">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <span className="text-2xl text-blue-600">✨</span>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">More Coming Soon!</h3>
              <p className="text-gray-600">
                We're working on adding more exciting services. Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategories;