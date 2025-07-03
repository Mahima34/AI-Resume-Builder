import React, { useEffect } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react';
import GlobalApi from './../../service/GlobalApi';
import ResumeCardItem from './components/ResumeCardItem';



function Dashboard() {

  const {user}=useUser();

/**
 * *Used to Get User Resumes  List
 */

  const [resumeList, setResumeList] = React.useState([]);
  useEffect(() => {
    if (user) {
      GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then((resp) => {
        setResumeList(resp.data);
      });
    }
  }, [user]);
  
  return (
    <div className='p-10 md:px-20 lg:px-32 '>
      <h2 className='text-3xl font-bold'>My Resume</h2>
      <p>Start Creating AI Resume To Your Next Job Role</p>
      <div className='grid grid-cols-2 mt-10 md:grid-cols-3 lg:grid-cols-5'>
        <AddResume/>
        {resumeList.length>0&&resumeList.map((resume,index) => (
          <ResumeCardItem resume={resume} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Dashboard


