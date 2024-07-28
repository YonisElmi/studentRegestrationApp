import React from 'react';
import StudentList from '../components/StudentList';

const ViewStudents = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-6">Student List</h1>
      <StudentList />
    </div>
  );
};

export default ViewStudents;
