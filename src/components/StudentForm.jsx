import React, { useState, useContext } from 'react';
import { StudentContext } from '../contexts/StudentContext';

const StudentForm = () => {
  // Access the addStudent function from the StudentContext
  const { addStudent } = useContext(StudentContext);

  // State variables to manage the form inputs
  const [name, setName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new student using the addStudent function
    addStudent({ id: Date.now(), name, studentClass, phone, email, dateOfBirth });

    // Clear the form inputs after submission
    setName('');
    setStudentClass('');
    setPhone('');
    setEmail('');
    setDateOfBirth('');
  };

  return (
    // Form with styling and event handling
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto p-6 bg-white shadow-md rounded">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Class</label>
          <input
            type="text"
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="Class"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="Phone"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded">Register</button>
      </form>
    </div>
  );
};

export default StudentForm;
