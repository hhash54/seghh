import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Confirmation = () => {
  const location = useLocation();
  const { name } = location.state || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Confirmation
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Thank you, <span className="font-medium">{name}</span>! Your registration is successful.
          </p>
        </div>
        <div className="mt-8">
          <div className="mt-6">
            <Link to="/" className="group w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
