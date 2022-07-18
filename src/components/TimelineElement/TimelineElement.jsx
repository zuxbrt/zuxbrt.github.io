import * as React from 'react';
// import { useState, useRef, useEffect} from 'react';

const TimelineElement = (props) => {

  return (
    <div className='timeline__container'>
        <p className='headline'>Timeline:</p>

        <div className='items'>

            <div className='single-item'>
                <div className='point_date__wrapper'>
                    <div className='point'></div>
                    <p className='date'>2018.</p>
                </div>  
                <div className='point__text'>
                    <p>Started working - First expirience with Symfony framework and PHP MVC arhitecture.</p>
                    <p>Writing / testing / improving API's in PHP for mobile based apps and Admin Consoles for the same.</p>
                </div>
            </div>

            <div className='item-connector'></div>

            <div className='single-item reverse'>
                <div className='point_date__wrapper'>
                    <div className='point'></div>
                    <p className='date'>2019.</p>
                </div>  
                <div className='point__text'>
                    <p>Getting familiar with Laravel. Worked on few projects which were related to eLearning industry.</p>
                    <p>Learned Vue.js, integrated it into apps made with Laravel.</p>
                    <p>Learned three.js.</p>
                </div>
            </div>

            <div className='item-connector'></div>

            <div className='single-item'>
                <div className='point_date__wrapper'>
                    <div className='point'></div>
                    <p className='date'>2021.</p>
                </div>  
                <div className='point__text'>
                    <p>Learned Node.js, React.js, Next.js</p>
                    <p>Learned three.js - Worked on a web application which was using concept of virtual exhibitions.</p>
                    <p>Development of solutions with admin dashboards with API's, websites with custom CMS preferences and other custom web solutions</p>
                </div>
            </div>

            <div className='item-connector'></div>

            <p className='in-progress'>TBC</p>

        </div>

    </div>
  )

}

export default TimelineElement;