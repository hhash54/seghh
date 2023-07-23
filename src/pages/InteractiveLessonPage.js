import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import ChatBox from '../components/ChatBox';
import LessonResources from '../components/LessonResources';

function InteractiveLessonPage() {
  return (
    <main className="font-mono bg-gray-900 text-gray-200 min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-5xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-gray-800 shadow-lg sm:rounded-3xl sm:p-20">

          <h1 className="text-4xl font-bold mb-6 text-gray-100 text-center">Interactive Music Lessons</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg mx-auto mt-10 lg:col-span-2">
              <VideoPlayer />
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg mx-auto mt-10 lg:col-span-1">
              <ChatBox />
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg mx-auto mt-10 lg:col-span-1 lg:row-span-2">
              <LessonResources />
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}

export default InteractiveLessonPage;
