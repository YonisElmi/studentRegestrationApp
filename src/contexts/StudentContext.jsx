import React from 'react';
import React, { createContext } from 'react';

const StudentContext = createContext();


const StudentProvider = () => {

 return(
   <StudentContext.Provider value={{ students}}>
   {children}
 </StudentContext.Provider>
 )
};

export { StudentContext, StudentProvider };


