import React from 'react';
import { Link } from 'react-router-dom';
import Register2 from '../images/Register2.png'
import user1 from '../images/user1.jpeg'
import user2 from '../images/user2.jpeg'
import user3 from '../images/user3.jpeg'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-100 min-h-screen flex items-center">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center h-full lg:pb-5">
              <h1 className="text-5xl font-bold text-black sm:text-7xl lg:text-8xl">
                Welcome to
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] "></span>
                  <h1 className="relative text-5xl font-bold text-black sm:text-7xl lg:text-8xl">
                    Student Registration.
                  </h1>
                </div>
              </h1>
              <p className="mt-8 text-lg text-black sm:text-2xl">
                Easily register new students, view existing students, and manage all student information efficiently.
              </p>
              <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                <Link
                  to="/view-students"
                  title=""
                  className="inline-flex items-center justify-center px-12 py-4 text-lg font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-60 focus:bg-orange-600"
                  role="button"
                >
                  View Student Lists
                </Link>
              </div>
            </div>
            <div className="flex justify-center h-full">
              <img
                className="w-full h-full object-cover"
                src={Register2}
                alt="Student Registration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600">
            What we offer
          </p>
          <div className="mt-12 grid gap-8 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
            <div className="p-8 bg-gray-100 rounded-lg shadow">
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-orange-100 rounded-full">
                <svg
                  className="w-8 h-8 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Student Registration</h3>
              <p className="mt-2 text-gray-600">
                Seamlessly register new students and manage their information in a centralized system.
              </p>
            </div>

            <div className="p-8 bg-gray-100 rounded-lg shadow">
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-green-100 rounded-full">
                <svg
                  className="w-8 h-8 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 17v-6h6v6h5l-8 8-8-8h5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Student Management</h3>
              <p className="mt-2 text-gray-600">
                Efficiently manage student records, attendance, and academic performance.
              </p>
            </div>

            <div className="p-8 bg-gray-100 rounded-lg shadow">
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-blue-100 rounded-full">
                <svg
                  className="w-8 h-8 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6M9 16h6m-6-8h.01M17 20H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Reports & Insights</h3>
              <p className="mt-2 text-gray-600">
                Generate detailed reports and gain insights into student data for better decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl lg:text-5xl">
            What Our Users Say
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600">
            Hear from our satisfied users
          </p>
          <div className="mt-12 grid gap-8 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
            <div className="p-8 bg-gray-100 rounded-lg shadow">
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full" src={user1} alt="User 1" />
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">John Doe</h3>
                  <p className="text-gray-600">Software Engineer</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                "This platform has significantly simplified our student registration process. Highly recommended!"
              </p>
            </div>

            <div className="p-8 bg-gray-100 rounded-lg shadow">
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full" src={user2}  alt="User 2" />
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Jane Smith</h3>
                  <p className="text-gray-600">Administrator</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                "Managing student information has never been easier. This tool is intuitive and very effective."
              </p>
            </div>

            <div className="p-8 bg-gray-100 rounded-lg shadow">
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full" src={user3} alt="User 3" />
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">Michael Johnson</h3>
                  <p className="text-gray-600">Teacher</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">
                "A fantastic solution for keeping track of student records and registration details."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
