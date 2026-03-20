import React from 'react';
import '../App.css';
import Button from './button'

const Card = (props) => {
  return (
    <div className="card col-sm-4 mx-2 my-2 bg-dark" >
      <div className="card-body">
        <p className="card-text text-white font-weight-bolder">{props.quote}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            {props.tags.map((tag, idx) => {
              return <Button
                key={idx}
                tag={tag}/>
            })}
          </div>
          <button
            className="btn btn-outline-secondary btn-sm flag-btn"
            onClick={() => props.onFlag(props.jokeId)}
            title="Flag as inappropriate">
            <i className="fas fa-flag"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card;
