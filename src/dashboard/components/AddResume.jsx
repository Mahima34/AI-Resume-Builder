import { PlusSquare } from 'lucide-react'
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
function AddResume() {

const [openDialog, setOpenDialog] = React.useState(false);
const [resumeTitle, setResumeTitle] = React.useState();



const onCreateResume = () => {
  console.log('resumeTitle', resumeTitle)
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
       <input className='my-2' placeholder='Ex.Full Stack Resume'/>
      </DialogDescription>
      <div className='flex justify-end gap-5'>
        <Button onClick={() => setOpenDialog(false)} variant="ghost">Cancel</Button>
        <Button onClick={onCreateResume} variant="default">Create</Button>
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>
    </div>
  )
}

export default AddResume
