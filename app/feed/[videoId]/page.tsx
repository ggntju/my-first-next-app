import React from 'react'

interface PageParams {
  params: Promise<{
    videoId: string
  }>;
}

const Page = async ({params}: PageParams) => {
  console.log("Server Component")
  const { videoId } = await params;
  return (
    <div>
      Video Id: {videoId}
    </div>
  )
}

export default Page;
