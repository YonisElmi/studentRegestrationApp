import React, { createContext, useState, useEffect } from 'react';

// Create the StudentContext
const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  // State to hold the list of students
  const [students, setStudents] = useState([]);

  // useEffect to load students from localStorage when the component mounts
  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students'));
    if (storedStudents) {
      setStudents(storedStudents);
    }
  }, []);

  // useEffect to save students to localStorage whenever the students state changes
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  // Function to add a new student
  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  // Function to update an existing student
  const updateStudent = (updatedStudent) => {
    setStudents(students.map(student => student.id === updatedStudent.id ? updatedStudent : student));
  };

  // Function to delete a student by ID
  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    // Provide the students and the CRUD functions to the rest of the app
    <StudentContext.Provider value={{ students, addStudent, updateStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export { StudentContext, StudentProvider };
