import React from 'react'

interface LayoutPage {
    children: React.ReactNode;
}

const layout = ({children}: LayoutPage) => {
  return (
    <div>
        <div className='p-4 bg-rose-500 w-full'>
            I am a navbar!
        </div>
      {children}
    </div>
  )
}

export default layout
