'use client'

import Image from "next/image"

export default function HomePage() {
  return (
    <div>
      <Image
        src="/mahaveera.webp"
        alt="Mahaveera"
        width={1920}   
        height={1080}  
        className="md:h-[85vh] w-full object-cover"
        priority 
      />
    </div>
  )
}
