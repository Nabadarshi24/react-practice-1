import React from 'react';

function Card(props) {
  const { card } = props;
  return (
      <div className='card-box-shadow'>
        <img src={card.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <a href={card.linkUrl}>{card.linkText}</a>
          <h5 className="card-title fw-bold">{card.title}</h5>
          <p className="card-text">{card.desc}</p>
          <p className="card-text"><small className="text-muted">{card.footer}</small></p>
        </div>
      </div>
  )
}

export default Card; 
