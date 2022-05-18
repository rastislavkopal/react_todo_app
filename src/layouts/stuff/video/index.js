import React from 'react'
import ReactPlayer from 'react-player'
import surf_trip from '../../../videos/surf_trip.mp4'

export default function Video() {
    return (
        <div className='player_wrapper'>
            <ReactPlayer
            className='react-player'
            url={surf_trip}
            width='100%'
            height='100%'
            controls = {true}
            />
        </div>
    )
}
