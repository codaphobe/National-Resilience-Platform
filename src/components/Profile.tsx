import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { User, Folder } from 'lucide-react';

const Profile: React.FC = () => {
  const { user } = useAuthContext();
  const [selectedMenu, setSelectedMenu] = useState('Profile');

  if (!user) {
    return <div>Loading...</div>;
  }

  const renderContent = () => {
    switch (selectedMenu) {
      case 'Profile':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <p><strong>Name:</strong> {user.fullname}</p>
            <p><strong>Email:</strong> {user.email}</p>
            {/* Add more user details and options to change them */}
          </div>
        );
      case 'Projects':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            {/* Add projects content here */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-blue-600 text-white p-4 font-bold rounded-r-lg">
        <ul>
          <li
            className={`p-3 cursor-pointer rounded-lg text-white-600 hover:text-white-600 hover:bg-blue-700 flex items-center ${selectedMenu === 'Profile' ? 'bg-blue-700' : ''}`}
            onClick={() => setSelectedMenu('Profile')}
          >
            <User className="mr-2" /> Profile
          </li>
          <li
            className={`p-3 cursor-pointer rounded-lg text-white-600 hover:text-white-600 hover:bg-blue-700 flex items-center ${selectedMenu === 'Projects' ? 'bg-blue-700' : ''}`}
            onClick={() => setSelectedMenu('Projects')}
          >
            <Folder className="mr-2" /> Projects
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-4 bg-white rounded-lg shadow-md">
        {renderContent()}
      </div>
    </div>
  );
};

export default Profile;