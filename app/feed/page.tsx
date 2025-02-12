"use client";

import React, { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    console.log("Where am I rendered?")
  }, [])
  return (
    <div>
      Feed Page!
    </div>
  )
}
