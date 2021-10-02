import React from 'react';

export function ProjectContent({ data }) {
  return (
    <div className={'Project-Content-Container'}>
      <div className={'Project-Content-Inner-Padding'}>
        {data.map((item, index) => {
          const images = item.images.map((img, index) => {
            return <img key={`${index}-images`} alt="Project-Outcome" src={img} className={'Project-Content-Image'} />
          })
          return (
            <div key={`${index}-content`}>
              <h3 className={'Profile-Content-Header'}>{item.header}</h3>
              {images}
            </div>
          )
        })}

      </div>
    </div>
  )
}