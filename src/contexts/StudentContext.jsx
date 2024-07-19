import React from 'react';
import React, { createContext } from 'react';

const StudentContext = createContext();
const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  
  };




 return(
   <StudentContext.Provider value={{ students}}>
   {children}
 </StudentContext.Provider>
 )
};

export { StudentContext, StudentProvider };




