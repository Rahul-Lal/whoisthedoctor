import React from 'react'

const Doctor = props => {
    // <div className='column'>
    //     <h2>{props.name}</h2>
    //     <h3>{props.actor}</h3>
    //     <p>
    //         {props.startedYear} - {props.finishedYear}
    //     </p>
    //     <img src={props.image} width='450' height='575' />
    // </div>

    <div className='doctor-wrapper'>
        <div className='doctor'>
            <div className='doctor-name-plate'>
                <span className='doctor-name'>{props.name}</span>
                <span className='doctor-breed'>{props.actor}</span>
                <br />
                <img src={`/images/${props.image}`} className='doctor-pic' />
            </div>
            <span className='doctor-superpower'>{props.startedYear}</span>
            <span className='doctor-superpower'>{props.finishedYear}</span>
        </div>
    </div>
}

export default Doctor
