import React from 'react'

function CardDetails(props) {
  const { card } = props
  return (
    <div>
      <div className="header">
        <h1>Famous Blog Template</h1>
      </div>
      <div className="card-details-section">
        <div className="container">
          <div className="row">
            <div className="col-8 c-col">
              <div className="card-details">
                <h3 className='card-title'>{card.title}</h3>
                <img src={card.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className='card-text'>{card.desc}</p>
                  <p className='card-text'>{card.desc}</p>
                  <p className='card-text'>{card.desc}.</p>
                  <div className="category">
                    <label htmlFor="category">Category :</label>
                    <a href={card.linkUrl}> {card.linkText}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetails
