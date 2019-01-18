import React from 'react';
import '../App.css';
import Button from './button'

const Card = (props) => {
  return (
    <div className="card col-sm-4 mx-2 my-2 bg-dark" >
      <div className="card-body">
        <p className="card-text text-white font-weight-bolder">{props.quote}</p>
        {props.tags.map((tag, idx) => {
          return <Button 
            key={idx}
            tag={tag}/>
        })}
      </div>
    </div>
  )
}

export default Card;