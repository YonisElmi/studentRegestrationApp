import React from 'react';
import React, { createContext } from 'react';

const StudentContext = createContext();
const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  
  };

  const updateStudent = (updatedStudent) => {
        setStudents(students.map(student => student.id === updatedStudent.id ? updatedStudent : student));
      };

      const deleteStudent = (id) => {
            setStudents(students.filter(student => student.id !== id));
          };



 return(
   <StudentContext.Provider value={{ students}}>
   {children}
 </StudentContext.Provider>
 )
};

export { StudentContext, StudentProvider };




