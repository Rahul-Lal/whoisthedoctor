import React from 'react'

const Doctor = props => {
    <div className='column'>
        <h2>{props.name}</h2>
        <h3>{props.actor}</h3>
        <p>
            {props.startedYear} - {props.finishedYear}
        </p>
        <img src={props.image} width='450' height='575' />
    </div>
}

export default Doctor
