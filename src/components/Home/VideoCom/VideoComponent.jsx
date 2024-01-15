import React from 'react'

const VideoComponent = () => {
  return (
    <video width="240" height="300" controls style={{
     borderRadius: '20px'
    }}>
      <source src='https://www.youtube.com/watch?v=cf-J4ffMBfo' type="video/mp4"/>
      Browser don't support the video format
    </video>
  )
}

export default VideoComponent
