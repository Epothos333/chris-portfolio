import React from 'react';
import { useViewPort } from '../../../hooks/useViewPort';
import { ReturnButton } from './ReturnButton';

export function ProjectContent({ data, border }) {
  const { isMobile } = useViewPort()
  return (
    <div className={'Project-Content-Container'}>
      <div className={'Project-Content-Inner-Padding'}>
        {data.map((item, index) => {
          const images = item.images.map((img, index) => {
            let style = {};
            if (item.outline !== false) {
              style.border = `2px solid ${border}`
            }
            const renderImg = <img key={`${index}-images`} style={style} alt="Project-Outcome" src={img} className={`Project-Content-Image ${item.shrink && 'Project-Contant-Shrink'}`} />;
            if (item.links) {
              return (
                <div className={'Flex-Row J-C A-C'}>
                  {renderImg}
                  <button className="Banner-Button Link-Button" style={{
                    position: 'absolute',
                    marginTop: isMobile ? '50px' : '125px',
                    width: isMobile ? '150px' : '200px,',
                    fontSize: isMobile ? '12px' : '16px'

                  }}>
                    <a href={item.links[index]} target="_blank" rel="noreferrer" >
                      Link to Project
                    </a>
                  </button>
                </div>
              )
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
      {!isMobile &&
        <ReturnButton color={'gray'} margin={'10px 40px 40px 0'} />
      }
    </div>
  )
}