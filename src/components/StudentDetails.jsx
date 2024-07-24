import React from 'react';

const StudentDetails = ({ student }) => {
  return (
    <tr>
      <td className="border px-4 py-2">{student.name}</td>
      <td className="border px-4 py-2">{student.studentClass}</td>
      <td className="border px-4 py-2">{student.dateOfBirth ? new Date(student.dateOfBirth).toLocaleDateString() : 'N/A'}</td>
      <td className="border px-4 py-2">{student.phone}</td>
      <td className="border px-4 py-2">{student.email}</td>
    </tr>
  );
};

export default StudentDetails;
