import React, { useContext, useState } from 'react';
import { StudentContext } from '../contexts/StudentContext';

const StudentDetails = ({ student }) => {
  // Access the updateStudent and deleteStudent functions from the StudentContext
  const { updateStudent, deleteStudent } = useContext(StudentContext);

  // State variables to manage editing and input values
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(student.name);
  const [studentClass, setStudentClass] = useState(student.studentClass);
  const [phone, setPhone] = useState(student.phone);
  const [email, setEmail] = useState(student.email);
  const [dateOfBirth, setDateOfBirth] = useState(student.dateOfBirth);

  // Handle the update operation
  const handleUpdate = () => {
    // Update the student with the new values
    updateStudent({ ...student, name, studentClass, phone, email, dateOfBirth });
    // Exit editing mode
    setIsEditing(false);
  };

  return (
    <tr>
      {isEditing ? (
        // Render input fields when in editing mode
        <>
          <td className="border px-4 py-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-2 py-1 border rounded"
            />
          </td>
          <td className="border px-4 py-2">
            <input
              type="text"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              className="w-full px-2 py-1 border rounded"
            />
          </td>
          <td className="border px-4 py-2">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-2 py-1 border rounded"
            />
          </td>
          <td className="border px-4 py-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-2 py-1 border rounded"
            />
          </td>
          <td className="border px-4 py-2">
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full px-2 py-1 border rounded"
            />
          </td>
          <td className="border px-4 py-2 flex space-x-2">
            <button onClick={handleUpdate} className="bg-green-500 text-white px-2 py-1 rounded">Save</button>
          </td>
        </>
      ) : (
        // Render student details and action buttons when not in editing mode
        <>
          <td className="border px-4 py-2">{student.name}</td>
          <td className="border px-4 py-2">{student.studentClass}</td>
          <td className="border px-4 py-2">{student.dateOfBirth ? new Date(student.dateOfBirth).toLocaleDateString() : 'N/A'}</td>
          <td className="border px-4 py-2">{student.phone}</td>
          <td className="border px-4 py-2">{student.email}</td>
          <td className="border px-4 py-2 flex space-x-2">
            <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
            <button onClick={() => deleteStudent(student.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default StudentDetails;
