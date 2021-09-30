import React from 'react';

export function ProjectContent({ data }) {
  return (
    <div className={'Project-Content-Container'}>
      {data.map((item, index) => {
        const images = item.images.map((img, index) => {
          return <img key={`${index}-images`} alt="Project-Outcome" src={img} style={{ width: '70px', height: '70px' }} />
        })
        return (
          <div key={`${index}-content`}>
            <h3>{item.header}</h3>
            {images}
          </div>
        )
      })}

    </div>
  )
}