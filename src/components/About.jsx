import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { BiDownload } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';
import project from '../assets/rigcomp.gif';
import resume from '../assets/Andrew Karanja CV.pdf';
import { Link } from 'react-scroll';

export default class About extends Component {
  render() {
    return (
      <div className='about-page-main-container' id='about' name='about'>
        <div className='right-area-main-container'>
          <div className='home-hello-wrapper ' data-aos='fade-up'>
            <div className='hello-line'></div>
            <h3 className='hero-hello'>About me</h3>
          </div>
          <h2 className='slogan' data-aos='fade-up'>
            Hi, Here I am
            <br /> To help your next project
          </h2>

          <p className='about-work' data-aos='fade-up'>
            I'm Andrew Karanja .An eager to learn Informatics and Computer Scientist working towards
            becoming a skilled computer scientist and a team player in the
            technological industry in projects that make the world a better place to
            live in, for everyone. Have been coding for the last four years and good
            in full stack development using tools and techniques such as Node js,
            React js, android java, google cloud, aws cloud just to name a few. This
            experience has enabled me build both personal and client projects which
            can be located either on my GitHub or hosted on the world wide web.I love digging into hard problems, learning
            new languages and technologies.
          </p>
          <h3 className='languages-title' data-aos='fade-up'>
            Languages and <span>Frameworks</span>
          </h3>
          <div className='about-work-details-wrapper'>
            <div className='work-about-item-wrapper' data-aos='fade-up-right'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>Java</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-left'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>Javascript</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-right'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>Android Java</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-left'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>NodeJS</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-right'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>ReactJS</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-left'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>Next js</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-right'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>AWS cloud</h3>
            </div>
            <div className='work-about-item-wrapper' data-aos='fade-up-left'>
              <div className='check-icon'>
                <IconContext.Provider value={{ className: 'check-list-icon' }}>
                  <BsCheckCircle />
                </IconContext.Provider>
              </div>
              <h3>Google cloud</h3>
            </div>
          </div>
          <div className='btn-wrapper about' data-aos='fade-up'>
            <Link
              to='portfolio'
              spy={true}
              smooth={true}
              duration={500}
              className='hire-me-btn'
            >
              My portfolio
            </Link>
            <a href={resume} download className='download-cv-btn'>
              Download CV{' '}
              <IconContext.Provider value={{ className: 'download-icon' }}>
                <BiDownload />
              </IconContext.Provider>
            </a>
          </div>
        </div>
        <div className='right-about-page-area' data-aos='fade-up-left'>
          <div className='image-container'>
            <img src={project} alt='project' className='project-about-img' />
            <svg
              version='1.0'
              className='dots-svg about'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1280.000000 1280.000000'
              preserveAspectRatio='xMidYMid meet'
            >
              <metadata></metadata>
              <g
                transform='translate(0.000000,1280.000000) scale(0.100000,-0.100000)'
                fill='#000000'
                stroke='none'
              >
                <path
                  d='M500 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M1780 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M3060 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M4340 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M5620 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M6900 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M8180 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M9460 12647 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M10740 12647 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 249 -73 535 101 615 373 46 158 -8 345 -139 476 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M12020 12647 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 249 -73 535 101 615 373 46 158 -8 345 -139 476 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M500 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M1780 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M3060 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M4340 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M5620 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M6900 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M8180 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M9460 11367 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M10740 11367 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 249 -73 535 101 615 373 46 158 -8 345 -139 476 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M12020 11367 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 249 -73 535 101 615 373 46 158 -8 345 -139 476 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M500 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M1780 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M3060 10087 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M4340 10087 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M5620 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M6900 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M8180 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M9460 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M10740 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M12020 10087 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M500 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M1780 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M3060 8807 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M4340 8807 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M5620 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M6900 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M8180 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M9460 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M10740 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M12020 8807 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M500 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M1780 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M3060 7527 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M4340 7527 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M5620 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M6900 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M8180 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M9460 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M10740 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M12020 7527 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M500 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M1780 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M3060 6247 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M4340 6247 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M5620 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M6900 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M8180 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M9460 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M10740 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M12020 6247 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 219 0 428 165 494 389 73 249 -101 535 -373 615 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M500 4967 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M1780 4967 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M3060 4967 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M4340 4967 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M5620 4967 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M6900 4967 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M8180 4967 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M9460 4967 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M10740 4967 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M12020 4967 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M500 3687 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M1780 3687 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M3060 3687 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M4340 3687 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M5620 3687 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M6900 3687 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M8180 3687 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M9460 3687 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M10740 3687 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M12020 3687 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495
132z'
                />
                <path
                  d='M500 2407 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 127 -57 257 -155 355 -137 137 -330 189 -495 132z'
                />
                <path
                  d='M1780 2407 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M3060 2407 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M4340 2407 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M5620 2407 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M6900 2407 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M8180 2407 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M9460 2407 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M10740 2407 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M12020 2407 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M500 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494 -631
266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M1780 1127 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 295 -86 631 177 631 494 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M3060 1127 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 249 -73 535 101 615 373 73 249 -101 535 -373 615 -78 23 -182 20 -261
-7z'
                />
                <path
                  d='M4340 1127 c-176 -60 -303 -191 -354 -366 -73 -249 101 -535 373
-615 249 -73 535 101 615 373 73 249 -101 535 -373 615 -78 23 -182 20 -261
-7z'
                />
                <path
                  d='M5620 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M6900 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M8180 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M9460 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M10740 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
                <path
                  d='M12020 1127 c-176 -60 -303 -191 -354 -366 -86 -295 177 -631 494
-631 266 0 510 244 510 510 0 219 -165 428 -389 494 -78 23 -182 20 -261 -7z'
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}
