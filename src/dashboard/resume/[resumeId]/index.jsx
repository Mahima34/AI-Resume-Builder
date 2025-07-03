import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'


function EditResume() {
   const params = useParams();
   useEffect(() => {
     // Fetch resume data using params.resumeId
   }, [params.resumeId]);
  return (
    <div>
      Edit Resume
    </div>
  )
}

export default EditResume
