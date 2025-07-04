import { createContext, useState } from 'react';


// Create the context
const ResumeInfoContext = createContext();

// Create a provider component
export const ResumeInfoProvider = ({ children }) => {
  const [resumeInfo, setResumeInfo] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    address: '',
    phone: '',
    email: '',
    summary: '',
    experience: [],
    education: [],
    skills: [],
    // Add other resume fields as needed
  });

  const updateResumeInfo = (updates) => {
    setResumeInfo(prev => ({ ...prev, ...updates }));
  };

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo, updateResumeInfo }}>
      {children}
    </ResumeInfoContext.Provider>
  );
};

// Remove custom hook and direct context export from this file for Fast Refresh compatibility.