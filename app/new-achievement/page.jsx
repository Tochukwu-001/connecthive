import React from 'react'
import Achievement from './Achievement'
import { auth } from '@/auth'


const page = async () => {
  const session = await auth()
  if(!session){

  }
    return (
   <main className=''>
<Achievement session={session}/>
   </main>
  )
}

export default page
