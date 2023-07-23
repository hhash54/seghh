import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import backgroundImage from '../images/dash1.jpg';
import { Transition } from '@headlessui/react';

const courses = [
  {
    title: 'Piano for Beginners',
    progress: 20,
  },
  {
    title: 'Intermediate Guitar',
    progress: 75,
  },
];

const recommendedCourses = [
  {
    title: 'Advanced Guitar Techniques',
    progress: 0,
  },
  {
    title: 'Jazz Improvisation',
    progress: 0,
  },
];

const UserDashboard = () => {
  const [myCourses, setMyCourses] = useState(courses);
  const location = useLocation();
  const { name } = location.state || {};

  const handleUnenroll = (courseTitle) => {
    setMyCourses(prevCourses => prevCourses.filter(course => course.title !== courseTitle));
  };

  return (
    <div className="min-h-screen bg-cover bg-center text-white p-10"
      style={{ backgroundImage: `url(${backgroundImage})` }}>

      <h1 className="text-4xl font-bold mb-10">My Dashboard</h1>

      <div className="md:flex md:justify-between">
        <div className="mb-10 md:mb-0 md:w-1/2 md:mr-5 bg-white bg-opacity-20 p-5 rounded">
          <h2 className="text-3xl mb-5">Welcome, {name}</h2>

          <p className="mb-5">You are currently enrolled in {myCourses.length} courses.</p>

          <Transition
            show={true}
            enter="transition ease-out duration-1000 transform"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
          >
            {myCourses.map((course, index) => (
              <div key={index} className="w-full p-5 mb-5 rounded shadow-md bg-white bg-opacity-60 flex justify-between items-center space-x-5">
                <h2 className="text-xl font-bold">{course.title}</h2>

                <div className="w-full h-4 rounded bg-gray-200">
                  <div className="h-full rounded bg-blue-500" style={{width: `${course.progress}%`}} />
                </div>

                <div>
                  <button className="px-5 py-2 rounded text-white bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out mr-5">Continue Learning</button>
                  <button className="px-5 py-2 rounded text-white bg-red-500 hover:bg-red-700 transition duration-300 ease-in-out" onClick={() => handleUnenroll(course.title)}>Unenroll</button>
                </div>
              </div>
            ))}
          </Transition>
        </div>

        <div className="md:w-1/2 md:ml-5 bg-white bg-opacity-20 p-5 rounded">
          <h2 className="text-3xl mb-5">Recommended for you</h2>

          <Transition
            show={true}
            enter="transition ease-out duration-1000 transform"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
          >
            {recommendedCourses.map((course, index) => (
              <div key={index} className="w-full p-5 mb-5 rounded shadow-md bg-white bg-opacity-60 flex justify-between items-center space-x-5">
                <h2 className="text-xl font-bold">{course.title}</h2>

                <div className="w-full h-4 rounded bg-gray-200">
                  <div className="h-full rounded bg-blue-500" style={{width: `${course.progress}%`}} />
                </div>

                <div>
                  <button className="px-5 py-2 rounded text-white bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out">Start Learning</button>
                </div>
              </div>
            ))}
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
