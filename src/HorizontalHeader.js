import React, { Component } from 'react'
import TimeLeft from './Components/TimeLeft'
import Star from './icons/Star'
export default class HorizontalHeader extends Component {
  render() {
    const patterns = {
      flat: {
        opacity: 1,
        background: 'transparent',
      },

      dotted: {
        opacity: 0.3,
        backgroundImage: `radial-gradient(${this.props.headerPatternColor} 1px, transparent 1px), radial-gradient(${this.props.headerPatternColor} 1px, transparent 1px)`,
        backgroundSize: '5px 5px',
        backgroundPosition: '0 0,2.5px 2.5px',
      },
      lined: {
        opacity: 0.2,
        background: `repeating-linear-gradient( 45deg, ${this.props.headerPatternColor} , ${this.props.headerPatternColor} 2px, transparent 2px, transparent 10px)`,
      },
      gradient: {
        opacity: 0.4,
        backgroundImage: `linear-gradient(180deg, ${this.props.headerPatternColor} 0%, rgba(8,19,35,0) 100%)`,
      },
    }
    return (
      <div
        style={{
          background: this.props.background,
          color: this.props.textColor,
          borderBottomRightRadius: `${this.props.headerBorderRadius}px`,
          borderBottomLeftRadius: `${this.props.headerBorderRadius}px`,
        }}
        className='w-full h-full p-2 lg:px-5 lg:py-5 2xl:py-5 2xl:px-7 flex  relative '>
        <div
          style={{
            ...patterns[this.props.headerPattern],
            borderBottomRightRadius: `${this.props.headerBorderRadius}px`,
            borderBottomLeftRadius: `${this.props.headerBorderRadius}px`,
          }}
          className='w-full h-full absolute left-0 top-0 z-0'></div>
        <div className='w-full lg:w-3/5 flex z-10'>
          <div className='w-5 h-5 lg:w-16 lg:h-16 rounded-full flex flex-shrink-0 bg-red-400 sm:mr-5 z-10'></div>
          <div className='flex flex-col items-start mr-auto z-10'>
            <span className='lg:text-2xl leading-none font font-semibold'>Olive Allen</span>
            <span className='lg:text-3xl leading-none font-light'>“A piece of Something”</span>
            <div className='flex items-center mt-auto mb-10  z-10'>
              <span className='w-3 h-2 lg:w-6 lg:h-5 mr-1 fill-current'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.83 19.45'>
                  <g id='Layer_2' data-name='Layer 2'>
                    <g id='Layer_2-2' data-name='Layer 2'>
                      <path d='M6,0A6,6,0,0,0,1.75,1.74a5.88,5.88,0,0,0,0,8.37l9.12,9.12a.77.77,0,0,0,1,0l0,0,9.14-9.11a5.88,5.88,0,0,0,0-8.37,6.05,6.05,0,0,0-8.51,0L11.41,2.9,10.26,1.74A6,6,0,0,0,6,0ZM6,1.36A4.49,4.49,0,0,1,9.19,2.69l1.7,1.7a.76.76,0,0,0,1,0l0,0L13.64,2.7A4.47,4.47,0,0,1,20,2.7a4.56,4.56,0,0,1,0,6.46c-2.87,2.86-5.73,5.73-8.6,8.58L2.82,9.15a4.56,4.56,0,0,1,0-6.46A4.49,4.49,0,0,1,6,1.36Z' />
                    </g>
                  </g>
                </svg>
              </span>
              <span className='lg:text-2xl'>40</span>
            </div>
            <TimeLeft />
          </div>
        </div>

        <div className='w-full lg:w-2/5 flex-col border border-white p-4 justify-between relative z-10 xl:ml-7 2xl:ml-14'>
          <div className='h-full flex  flex-col justify-between z-10'>
            <div className='flex flex-col items-start mb-2'>
              <span className='lg:font-semibold uppercase lg:text-xl leading-none'>Category:</span>
              <span className='lowercase tracking-wide lg:text-2xl 2xl:text-3xl leading-none -mt-1'>
                sports
              </span>
            </div>
            <div className='flex flex-col items-start mb-2'>
              <span className='text-left lg:font-semibold uppercase leading-none lg:text-xl'>
                highest bid:
              </span>
              <span className='lowercase tracking-wide lg:text-xl 2xl:text-3xl leading-none'>
                $3000
              </span>
            </div>
            <div className='flex flex-col items-start mb-2'>
              <span className='text-left lg:font-semibold uppercase lg:text-lg 2xl:text-xl leading-none'>
                series number:
              </span>
              <span className='lowercase tracking-wide lg:text-xl 2xl:text-3xl leading-none'>
                1 of 24
              </span>
            </div>
            <button
              style={{
                maxWidth: '200px',
                color: this.props.button.textColor,
                background: this.props.button.background,
                borderRadius: `${this.props.button.borderRadius}px`,
                border: this.props.button.border
                  ? `${this.props.button.borderWidth} solid ${this.props.button.borderColor}`
                  : 'none',
              }}
              className='uppercase outline-none border rounded-lg border-gray-900 py-1 px-2 lg:px-4 lg:py-3 2xl:py-5 2xl:px-10 font-semibold leading-none'>
              go to auction
            </button>
          </div>
          <div className='absolute top-2 right-3  items-end z-10'>
            <div className='flex items-center justify-end'>
              <Star /> <span className='ml-2 font-semibold lg:text-xl'>@</span>
            </div>
          </div>
          <div
            style={{
              ...patterns[this.props.footerPattern],
              borderBottomLeftRadius: `${this.props.footerBorderRadius}px`,
              borderBottomRightRadius: `${this.props.footerBorderRadius}px`,
            }}
            className='w-full h-full absolute left-0 top-0 z-0'></div>
        </div>
      </div>
    )
  }
}
