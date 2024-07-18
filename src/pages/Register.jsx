import React from 'react';
import StudentForm from '../components/StudentForm';

const Register = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-6">Register a New Student</h1>
      <StudentForm />
    </div>
  );
};

export default Register;
