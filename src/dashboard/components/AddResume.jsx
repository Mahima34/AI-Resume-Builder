import { Loader2, PlusSquare } from 'lucide-react'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from './../../../service/GlobalApi'
import { useUser } from '@clerk/clerk-react'


function AddResume() {

const [openDialog, setOpenDialog] = React.useState(false);
const [resumeTitle, setResumeTitle] = React.useState();
const {user}=useUser();
const [Loading, setLoading] = React.useState(false);


const onCreateResume = () => {
setLoading(true);
  const uuid = uuidv4();

const data = {
  data:{
    title: resumeTitle,
    resumeId: uuid,
    userEmail: user?.primaryEmailAddress?.emailAddress,
    userName:user?.fullName
  }
}

GlobalApi.CreateNewResume(data).then(resp=>{
  console.log(resp);
  if(resp){
    setLoading(false);
  }

},()=>{
  setLoading(false);
})

}


  return (
    <div>
      <div className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed'
       onClick={() => setOpenDialog(true)}
      >
         <PlusSquare/>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Resume</DialogTitle>
      <DialogDescription>
        <p>Add a title for your New Resume</p>
       <input className='my-2' placeholder='Ex.Full Stack Resume'
       onChange={(e)=> setResumeTitle(e.target.value)}
       />
      </DialogDescription>
      <div className='flex justify-end gap-5'>
        <Button onClick={() => setOpenDialog(false)} variant="ghost">Cancel</Button>
        <Button disabled={!resumeTitle || Loading} onClick={onCreateResume} variant="default">
          {Loading ? <Loader2 className="animate-spin" /> : "Create"}
        </Button>
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>
    </div>
  )
}

export default AddResume
