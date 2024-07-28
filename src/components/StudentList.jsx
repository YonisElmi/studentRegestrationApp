import React, { useContext, useState } from 'react';
import { StudentContext } from '../contexts/StudentContext';
import StudentDetails from './StudentDetails';

const StudentList = () => {
  // Access the students array from the StudentContext
  const { students } = useContext(StudentContext);

  // State variable to manage the search term for filtering students
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the students based on the search term
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Search input to filter students by name */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Class</th>
              <th className="py-2 px-4">DOB</th>
              <th className="py-2 px-4">Phone</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Render the filtered list of students */}
            {filteredStudents.map(student => (
              <StudentDetails key={student.id} student={student} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
