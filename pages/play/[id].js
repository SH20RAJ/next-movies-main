import { useRouter } from 'next/router'
import React from 'react'

export default function Id() {
    const router = useRouter()

    const id = router.query.id

  return (
    <div >
      <h1>Watch Movie</h1>
      {/* <iframe src={'https://vidsrc.xyz/embed/'+id} width="100%" height="100%" frameBorder="0" scrolling="no" allowFullScreen></iframe> */}

      <iframe width="800px" height="515" src={'https://vidsrc.xyz/embed/'+id} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe>
    </div>
  )
}
