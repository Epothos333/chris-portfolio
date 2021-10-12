import React from 'react';
import { useViewPort } from '../../../hooks/useViewPort';
import { ReturnButton } from './ReturnButton';

export function ProjectContent({ data, border }) {
  const { isMobile } = useViewPort()
  return (
    <div className={'Project-Content-Container'}>
      {!isMobile &&
        <ReturnButton color={'gray'} margin={'40px 40px 10px 0'} />
      }
      <div className={'Project-Content-Inner-Padding'}>
        {data.map((item, index) => {
          const images = item.images.map((img, index) => {
            let style = {};
            if (item.outline !== false) {
              style.border = `2px solid ${border}`
            }
            const renderImg = <img key={`${index}-images`} style={style} alt="Project-Outcome" src={img} className={'Project-Content-Image'} />;
            if (item.links) {
              return <a href={item.links[index]}>
                {renderImg}
              </a>
            }
            return renderImg;
          })
          return (
            <div key={`${index}-content`} className={'Flex-Column'}>
              <h3 className={'Profile-Content-Header'}>{item.header}</h3>
              {images}
            </div>
          )
        })}

      </div>
    </div>
  )
}