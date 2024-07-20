import React, { createContext, useState, useEffect } from 'react';

const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students'));
    if (storedStudents) {
      setStudents(storedStudents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(students.map(student => student.id === updatedStudent.id ? updatedStudent : student));
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, updateStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export { StudentContext, StudentProvider };




