import React, { useState} from 'react';


const StudentForm = () => {
  
  const [name, setName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');



  return (
    <form className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          className="w-full px-3 py-2 border rounded"
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Class</label>
        <input
          type="text"
          value={studentClass}
          className="w-full px-3 py-2 border rounded"
          placeholder="Class"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          type="text"
          value={phone}
          className="w-full px-3 py-2 border rounded"
          placeholder="Phone"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          className="w-full px-3 py-2 border rounded"
          placeholder="Email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Date of Birth</label>
        <input
          type="date"
          value={dateOfBirth}
          className="w-full px-3 py-2 border rounded"
          placeholder="Date of Birth"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Register</button>
    </form>
  );
};

export default StudentForm;
