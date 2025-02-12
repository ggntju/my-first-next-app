import { Button } from '@/components/ui/button'
import { UserCircleIcon } from 'lucide-react'
import React from 'react'

export const AuthButton = () => {
  // TODO: Add different auth states
  return (
    <Button variant={'outline'} className='px-4 py-2 font-medium text-blue-600 hover:text-blue-500 boarder-blue-500/2 rounded-full shadow-none []'>
      <UserCircleIcon className='size-4'/>
      Sign in
    </Button>
  )
}

