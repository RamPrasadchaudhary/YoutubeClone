import React from 'react'
import PlayVideo from '../../Component/PlayVideo/PlayVideo'
import './Video.css'
import Recommended from '../../Component/Recommended/Recommended'
import { useParams } from 'react-router-dom'
const Video = () => {
  const {videoId ,categoryId} =useParams();
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video