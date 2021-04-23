import React, { Component } from 'react'
import TimeLeftIcon from '../icons/timeLeftIcon'

export default class TimeLeft extends Component {
  render() {
    return (
      <div className='flex flex-col items-start'>
        <span className='lg:text-xl 2xl:text-2xl tracking-tighter flex items-center'>
          <span className='w-4 h-4 lg:w-8 lg:h-8 mr-1'>
            <TimeLeftIcon />
          </span>
          33 minutes left
        </span>
      </div>
    )
  }
}
