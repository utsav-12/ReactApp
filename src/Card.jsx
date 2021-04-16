import React from 'react'
import './Card.css';
import Images from './Images';
import Sname from './Sname'


function Card(props) {
    return (
        <div>
            <div className='cards'>
                <div className='card'>
                    <div className="card__info">
                        <Images imgsrc = {props.imgsrc}/>
                        <span className="card__category">{props.title} </span>
                        <Sname sname = {props.sname}/>
                        <a href={props.link} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
  }

export default Card

